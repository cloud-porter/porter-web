import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["pc"],
    },

    plugins: [tailwindcss()],
  },
});