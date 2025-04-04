import { defineConfig } from '@farmfe/core';
import path from 'path';

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  compilation: {
    resolve: {
      alias: {
        '@': path.join(process.cwd(), '/src'),
        '@components': path.join(process.cwd(), '/src/components'),
        '@styles': path.join(process.cwd(), '/src/styles')
      }
    }
  }
});
