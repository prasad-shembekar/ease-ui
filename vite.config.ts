import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const libraryBuild = mode === "library";

  return {
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: libraryBuild
    ? {
        lib: {
          entry: path.resolve(__dirname, "src/index.ts"),
          name: "EaseUI",
          fileName: (format) => `easeui.${format}.js`,
        },
        cssCodeSplit: true,
        rollupOptions: {
          external: /^react(\/.*)?$/,
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      }
    : {},
  };
});
