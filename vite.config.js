import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.js',
      refresh: true,
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
        compilerOptions: {
          // Treat `iconify-icon` as a custom element
          isCustomElement: (tag) => tag === 'iconify-icon',
        },
      },
    }),
  ],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
    },
  },
  server: {
    watch: {
      ignored: ['**/node_modules/**', '**/vendor/**'], // Exclude large directories
      usePolling: true, // Use polling instead of native watchers
    },
  },
});
