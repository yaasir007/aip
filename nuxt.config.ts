// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/")
  },

  css: ["~/assets/scss/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-viewport"],
  publicRuntimeConfig: {
    supabaseKey: process.env.VITE_SUPABASE_KEY,
    supabaseUrl: process.env.VITE_SUPABASE_URL
  },
  privateRuntimeConfig: {
    supabaseKey: process.env.VITE_SUPABASE_KEY,
    supabaseUrl: process.env.VITE_SUPABASE_URL
  }
})