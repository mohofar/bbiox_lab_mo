import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [react()],
  base: '/YOUR-REPO-NAME/', // <-- Replace with your repo name
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}); 