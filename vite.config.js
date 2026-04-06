import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.7, 0.85], speed: 4 },
      svgo: { plugins: [{ name: 'removeViewBox', active: false }] },
      mozjpeg: { quality: 80 },
    }),
  ],
});
