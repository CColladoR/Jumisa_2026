import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Define la base como relativa para que funcione en subdirectorios de GitHub Pages
  build: {
    outDir: 'dist',
  }
});