// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "notivue/nuxt", "unplugin-icons/nuxt"],
  image: {
    dir: "assets",
  },
  css: [
    "~/assets/main.css",
    "notivue/notification.css",
    "notivue/animations.css",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  notivue: {},
  icons: {
    compiler: "vue3",
    autoInstall: true,
  },
  runtimeConfig: {
    smtpHost: "",
    smtpPort: 587,
    smtpPass: "",
    smtpUser: "",
    clientEmail: "",
    public: {},
  },
});
