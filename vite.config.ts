import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "./",
    clearScreen: false,
    server: {
        port: 1420,
        strictPort: true,
        warmup: {
            clientFiles: ["./index.html", "./src/main.tsx"],
        },
        watch: {
            ignored: ["**/src-xiao/**"],
        },
    },
});
