import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  server: {
    host: true,
    port: 5175,
    allowedHosts: ['code.luishomeserver.com', "alba.luishomeserver.com"], // Add the allowed host here
  },
  build: {
    outDir: 'dist',
  }
});