# @raulmoracode/icons

Icon library for RaulMoraCode projects.

## Installation

```bash
npm install @raulmoracode/icons
```

## Usage

<!-- usage:start -->
```tsx
import { Apple, Github } from "@raulmoracode/icons";
import { Linux, Windows } from "@raulmoracode/icons";
import { Chain, Copy, CopyCheck, Globe, Mail, Star, Website } from "@raulmoracode/icons";

function App() {
  return (
    <div>
      <Apple size={24} />
      <Github size={24} />
      <Linux size={24} />
      <Windows size={24} />
      <Chain size={24} />
      <Copy size={24} />
      <CopyCheck size={24} />
      <Globe size={24} />
      <Mail size={24} />
      <Star size={24} />
      <Website size={24} />
    </div>
  );
}
```
<!-- usage:end -->

Each icon can also be imported individually to keep your bundle small:

```tsx
import { Mail } from "@raulmoracode/icons/Mail";
```

## Available Icons

The icon lists and the usage example above are generated from `src/icons` by
`pnpm run generate`. Add the icon file and run the command, do not edit those blocks by hand.

### Enterprise

<!-- icons-enterprise:start -->
- `Apple` - Apple logo
- `Github` - GitHub logo
<!-- icons-enterprise:end -->

### SO

<!-- icons-so:start -->
- `Linux` - Linux logo
- `Windows` - Windows logo
<!-- icons-so:end -->

### Common

<!-- icons-common:start -->
- `Chain` - Chain link
- `Copy`
- `CopyCheck` - Copy with check
- `Globe`
- `Mail` - Envelope
- `Star`
- `Website` - Browser window
<!-- icons-common:end -->

## Props

All icons accept the following props:

```ts
interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm run build

# Check formatting
pnpm run check

# Format code
pnpm run format

# Run tests
pnpm test

# Regenerate the icon registry (src/index.ts, package.json exports, README)
pnpm run generate

# Verify the registry is up to date (runs on CI)
pnpm run generate:check
```

### Adding a new icon

1. Create `src/icons/<group>/<Name>.tsx`, the component must be named exactly like the file.
2. Add `src/icons/<group>/<Name>.test.tsx` next to it, following an existing icon test.
3. Add a single line `/** Description */` JSDoc if the name is not self explanatory, it feeds the
   icon list above.
4. Run `pnpm run generate` and commit the regenerated files.

Never edit `src/index.ts`, the `exports` map in `package.json` or the generated README blocks by
hand, `pnpm run generate:check` runs on CI and fails when they are out of date. Keeping them
generated means an icon PR only adds `Icon.tsx` and `Icon.test.tsx`, so two icons can be added in
parallel without conflicting.
