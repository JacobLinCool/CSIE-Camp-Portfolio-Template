import path from "node:path";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), Icons({ autoInstall: true, compiler: "vue3" })],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "./src") },
            { find: "@views", replacement: path.resolve(__dirname, "./src/views") },
            { find: "@components", replacement: path.resolve(__dirname, "./src/components") },
        ],
    },
});
