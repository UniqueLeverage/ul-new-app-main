import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    preview: {
        port: process.env.PORT ? Number(process.env.PORT) : 4173, // 👈 Support Render's dynamic port
        host: true // 👈 Allow external access (important for Render)
    }
})
