import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    // The official Tailwind CSS plugin for Vite (v4.0+)
    tailwindcss(),
  ],
})
