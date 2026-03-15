'use strict';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // Specify the development server port
    open: true, // Automatically opens the browser when the server starts
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
    minify: 'terser', // Minification type
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});