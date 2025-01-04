import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Opcional: Abre o navegador automaticamente
  },
  build: {
    outDir: 'dist', // Certifique-se de onde os arquivos estáticos são gerados
  },

})
