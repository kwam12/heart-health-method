import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hearthealthmethod.com',
  output: 'static',
  outDir: 'dist',
  build: {
    format: 'directory'
  }
});
