/// <reference types="vite/client" />

interface ImportMeta {
  glob<T>(pattern: string, options: { eager?: boolean; import?: string }): Record<string, T>;
}