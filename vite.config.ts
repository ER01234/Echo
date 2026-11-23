import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Relative base so the build works from any static host sub-path (GitHub Pages).
  base: './',
  server: {
    port: 5173,
    host: '127.0.0.1',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2022',
  },
  test: {
    environment: 'node',
    include: ['tests/unit/**/*.test.ts'],
    passWithNoTests: false,
  },
});
