import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/lab-vue-wiki-countries/",
  plugins: [vue()],
});
