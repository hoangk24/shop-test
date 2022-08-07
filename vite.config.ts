import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteConfigPath from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), viteConfigPath()],
});
