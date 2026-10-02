import { readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';
import * as icons from './index';

const ICON_GROUPS = ['enterprise', 'so', 'common'];

const ICONS_SRC = join(dirname(fileURLToPath(import.meta.url)), 'icons');

const ICON_NAMES = ICON_GROUPS.flatMap((group) =>
  readdirSync(join(ICONS_SRC, group))
    .filter((file) => file.endsWith('.tsx') && !file.endsWith('.test.tsx'))
    .map((file) => file.replace(/\.tsx$/, ''))
).sort();

const EXPORTED_NAMES = Object.keys(icons).sort();

describe('Index exports', () => {
  it.each(ICON_NAMES)('exports %s', (name) => {
    expect(EXPORTED_NAMES).toContain(name);
  });

  it('exports every icon exactly once', () => {
    expect(EXPORTED_NAMES).toEqual(ICON_NAMES);
  });

  it('exports every icon as a component', () => {
    expect(
      Object.values(icons).every((icon) => typeof icon === 'function')
    ).toBe(true);
  });
});
