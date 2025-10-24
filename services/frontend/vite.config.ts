import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    host: false,
    // https: {
    //   key: fs.readFileSync('./certs/key.pem'),
    //   cert: fs.readFileSync('./certs/cert.pem'),
    // },
  },
});
