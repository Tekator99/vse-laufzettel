import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tekator99.github.io/vse-laufzettel/",
  plugins: [react()],
})
