import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // optional
  },
  // This is the RIGHT way to make React Router work in Vite
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
