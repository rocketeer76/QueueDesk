import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import solid from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [solid()],
  vite: { plugins: [tailwindcss()] },
});
