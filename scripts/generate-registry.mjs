#!/usr/bin/env node
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ICONS_DIR = join(ROOT, 'src/icons');
const CHECK_ONLY = process.argv.includes('--check');

const GROUPS = [
  { dir: 'enterprise', label: 'ENTERPRISE', title: 'Enterprise' },
  { dir: 'so', label: 'SO', title: 'SO' },
  { dir: 'common', label: 'COMMON', title: 'Common' },
];

async function collectIcons() {
  const groups = [];

  for (const group of GROUPS) {
    const files = await readdir(join(ICONS_DIR, group.dir));
    const icons = [];

    for (const file of files.sort()) {
      if (!file.endsWith('.tsx') || file.endsWith('.test.tsx')) continue;

      const source = await readFile(join(ICONS_DIR, group.dir, file), 'utf8');
      const component = source.match(/export function (\w+)\(/)?.[1];

      if (!component) {
        throw new Error(`No exported component found in ${group.dir}/${file}`);
      }

      if (component !== file.replace(/\.tsx$/, '')) {
        throw new Error(
          `${group.dir}/${file} must export a component named ${file.replace(/\.tsx$/, '')}`
        );
      }

      const description = source.match(/\/\*\*\s*([^/*][\s\S]*?)\s*\*\//)?.[1];

      icons.push({
        component,
        file: file.replace(/\.tsx$/, ''),
        path: `./icons/${group.dir}/${file.replace(/\.tsx$/, '')}.js`,
        description: description
          ? description.replace(/\s+/g, ' ').trim()
          : null,
      });
    }

    groups.push({ ...group, icons });
  }

  return groups;
}

function buildIndex(groups) {
  return `${groups
    .map(
      (group) =>
        `//${group.label}\n${group.icons.map((icon) => `export { ${icon.component} } from '${icon.path}';`).join('\n')}`
    )
    .join('\n\n')}\n`;
}

function buildPackageExports(groups) {
  const entries = groups.flatMap((group) =>
    group.icons.map((icon) => [
      `./${icon.file}`,
      {
        types: `./dist/icons/${group.dir}/${icon.file}.d.ts`,
        import: `./dist/icons/${group.dir}/${icon.file}.js`,
      },
    ])
  );

  return Object.fromEntries(entries);
}

function buildUsage(groups) {
  const imports = groups
    .map(
      (group) =>
        `import { ${group.icons.map((icon) => icon.component).join(', ')} } from "@raulmoracode/icons";`
    )
    .join('\n');
  const usages = groups
    .map((group) =>
      group.icons
        .map((icon) => `      <${icon.component} size={24} />`)
        .join('\n')
    )
    .join('\n');

  return `\`\`\`tsx\n${imports}\n\nfunction App() {\n  return (\n    <div>\n${usages}\n    </div>\n  );\n}\n\`\`\``;
}

function buildIconList(group) {
  return group.icons
    .map((icon) =>
      icon.description && icon.description !== icon.component
        ? `- \`${icon.component}\` - ${icon.description}`
        : `- \`${icon.component}\``
    )
    .join('\n');
}

function replaceBlock(content, id, body) {
  const start = `<!-- ${id}:start -->`;
  const end = `<!-- ${id}:end -->`;
  const startIndex = content.indexOf(start);
  const endIndex = content.indexOf(end);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error(`README.md is missing the ${start} ... ${end} block`);
  }

  return `${content.slice(0, startIndex + start.length)}\n${body}\n${content.slice(endIndex)}`;
}

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'));
}

async function buildOutputs() {
  const groups = await collectIcons();
  const packageJson = await readJson(join(ROOT, 'package.json'));
  const readme = await readFile(join(ROOT, 'README.md'), 'utf8');

  const nextPackageJson = {
    ...packageJson,
    exports: {
      '.': packageJson.exports['.'],
      ...buildPackageExports(groups),
      './package.json': './package.json',
    },
  };

  let nextReadme = replaceBlock(readme, 'usage', buildUsage(groups));

  for (const group of groups) {
    nextReadme = replaceBlock(
      nextReadme,
      `icons-${group.dir}`,
      buildIconList(group)
    );
  }

  return [
    { path: 'src/index.ts', content: buildIndex(groups) },
    {
      path: 'package.json',
      content: `${JSON.stringify(nextPackageJson, null, 2)}\n`,
    },
    { path: 'README.md', content: nextReadme },
  ];
}

async function main() {
  const outputs = await buildOutputs();
  const stale = [];

  for (const output of outputs) {
    const current = await readFile(join(ROOT, output.path), 'utf8');

    if (current === output.content) continue;

    stale.push(output.path);

    if (!CHECK_ONLY) {
      await writeFile(join(ROOT, output.path), output.content);
    }
  }

  if (stale.length === 0) {
    console.log('Registry is up to date.');
    return;
  }

  if (CHECK_ONLY) {
    console.error(
      `Registry is out of date, run \`pnpm run generate\`: ${stale.join(', ')}`
    );
    process.exitCode = 1;
    return;
  }

  console.log(`Generated: ${stale.join(', ')}`);
}

main();
