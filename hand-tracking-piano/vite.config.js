import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/made-with-ai/hand-tracking-piano/dist/',
  build: {
    outDir: 'dist',
  },
}));
