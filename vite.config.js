import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ecohut/", // <--- এই লাইনটি খুব গুরুত্বপূর্ণ! আপনার রিপোজিটরির নাম দিন
})