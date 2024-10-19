import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        // target: 'https://localhost:7000',
        target: 'https://stock-market-portfolio-v6p1.onrender.com',
        changeOrigin: true,
      },
    },
  }
})
