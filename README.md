# @raulmoracode/icons

Icon library for RaulMoraCode projects.

## Installation

```bash
npm install @raulmoracode/icons
```

## Usage

```tsx
import { Apple, Github, Linux, Windows } from "@raulmoracode/icons";
import { Star, Chain, Copy, CopyCheck, Globe, Mail, Website } from "@raulmoracode/icons";

function App() {
  return (
    <div>
      <Apple size={24} />
      <Github size={24} />
      <Linux size={24} />
      <Windows size={24} />
      <Star size={24} />
      <Chain size={24} />
      <Copy size={24} />
      <CopyCheck size={24} />
      <Globe size={24} />
      <Mail size={24} />
      <Website size={24} />
    </div>
  );
}
```

Each icon can also be imported individually to keep your bundle small:

```tsx
import { Mail } from "@raulmoracode/icons/Mail";
```

## Available Icons

### Enterprise

- `Apple` - Apple logo
- `Github` - GitHub logo

### SO

- `Linux` - Linux logo
- `Windows` - Windows logo

### Common

- `Chain` - Chain link
- `Copy` - Copy
- `CopyCheck` - Copy with check
- `Globe` - Globe
- `Mail` - Envelope
- `Star` - Star
- `Website` - Browser window

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
```
