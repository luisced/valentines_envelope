import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: {
    host: true,
    port: 5175,
  },
  build: {
    outDir: 'dist',
  }
});
