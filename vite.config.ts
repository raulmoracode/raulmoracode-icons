import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'demo',
  publicDir: '../public',
  build: {
    outDir: '../dist-demo',
    emptyOutDir: true,
  },
});