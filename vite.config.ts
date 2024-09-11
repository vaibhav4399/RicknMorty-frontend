import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { ngrok } from 'vite-plugin-ngrok'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), ngrok('bPJFaVo1tButFrSVcLvU_NFxyJ5UXjiV5Bh32DYX8')]
})
