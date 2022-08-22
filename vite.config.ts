import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './src/assets'),
      '@c': resolve(__dirname, './src/components'),
      '@lib': resolve(__dirname, './src/lib'),
      '@src': resolve(__dirname, './src'),
      '@store': resolve(__dirname, './src/store'),
    },
  }
});
