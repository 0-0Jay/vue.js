import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    // 프록시 설정
    proxy: {
      // '/api' 프록시 요청으로 변경
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true, // 대상 서버의 출처 변경
      },
    },
  },
});
