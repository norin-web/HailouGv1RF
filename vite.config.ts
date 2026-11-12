import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet: GitHub Pages serves the site at norin-web.github.io/HailouGv1RF/.
  // When a domain is attached in Pages settings, switch to "/" AND add public/CNAME
  // in the same commit — otherwise every asset 404s and the page goes blank.
  base: "/HailouGv1RF/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
