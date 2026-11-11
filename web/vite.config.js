import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

/** Static hosts such as `python -m http.server` need a real index for each app route. */
function spaFallback() {
  return {
    name: 'mates-spa-fallback',
    closeBundle() {
      const dist = path.resolve('dist');
      const index = path.join(dist, 'index.html');
      if (!fs.existsSync(index)) return;

      for (const route of ['conjuntos', 'programa']) {
        const dir = path.join(dist, route);
        fs.mkdirSync(dir, { recursive: true });
        fs.copyFileSync(index, path.join(dir, 'index.html'));
      }
      fs.copyFileSync(index, path.join(dist, '404.html'));
    }
  };
}

export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/mates/' : '/',
  plugins: [react(), spaFallback()],
  server: {
    host: '127.0.0.1',
    port: 8765
  },
  preview: {
    host: '127.0.0.1',
    port: 8765
  }
});
