import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      // '/api': 'http://localhost:3000', // Proxy API requests to your local server
      // '/api': 'https://duke-game-backend-iff3.vercel.app',
      // // '/socket.io/':'http://localhost:3000'
      //  {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   ws: true,
      //   rewrite: (path) => path.replace(/^\/socket.io/, ''),
      // },
    },
  },
  plugins: [react()],
});