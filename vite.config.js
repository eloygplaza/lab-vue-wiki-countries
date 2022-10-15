import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/eloygplaza/lab-vue-wiki-countries/",
  plugins: [vue()],
});
