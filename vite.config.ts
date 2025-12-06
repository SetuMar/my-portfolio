import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',   // <- MUST be correct
  build: {
    outDir: 'docs',        // <- HERE is the line you're asking for
  }
})
