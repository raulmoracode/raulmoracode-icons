# @raulmoracode/icons

Icon library for RaulMoraCode projects.

## Installation

```bash
npm install @raulmoracode/icons
```

## Usage

```tsx
import { Apple, Github, Linux, Windows, Star } from "@raulmoracode/icons";

function App() {
  return (
    <div>
      <Apple size={24} />
      <Github size={24} />
      <Linux size={24} />
      <Windows size={24} />
      <Star size={24} />
      <Copy size={24} />
      <CopyCheck size={24} />
      <Globe size={24} />
    </div>
  );
}
```

## Available Icons

### Brands

- `Apple` - Apple logo
- `Github` - GitHub logo
- `Linux` - Linux logo
- `Windows` - Windows logo

### Common

- `Star` - Star icon

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
npm install

# Build
npm run build

# Check formatting
npm run check

# Format code
npm run format

# Run tests
npm test
```
