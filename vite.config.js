import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  basa:"/site-mrs-capuche/", 
  base:"/", 
  publicDir:"/public/",
})
