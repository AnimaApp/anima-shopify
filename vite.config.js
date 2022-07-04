import { defineConfig } from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
// import react from '@vitejs/plugin-react';
import netlifyPlugin from '@netlify/hydrogen-platform/plugin';

export default defineConfig({
  plugins: [
    // react(),
    hydrogen({
      babel: {
        plugins: [
          '@babel/plugin-transform-react-jsx',
          { runtime: 'automatic' },
        ],
      },
    }),
    netlifyPlugin(),
  ],
});
