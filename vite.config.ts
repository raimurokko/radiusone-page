import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";

// Standalone TanStack Start config — no Lovable wrapper.
// Plugin order matches TanStack Start's requirements: tailwind + path aliases
// first, then tanstackStart, then the nitro server build, then the React plugin.
export default defineConfig({
  // Base-Pfad für Unterordner-Deploys (GitHub-Pages-Projektseite). Wird im
  // CI-Workflow aus dem Repo-Namen gesetzt (z. B. "/radiusone-page/"); lokal "/".
  base: process.env.BASE_PATH || "/",
  server: { port: 4321 },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Guard: server-only modules must never reach the client bundle.
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      // Route TanStack Start's server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      // Statisches Prerendering für GitHub Pages: alle Routen als fertiges HTML
      // nach .output/public (keine Server-Laufzeit nötig).
      prerender: { enabled: true, crawlLinks: true },
      pages: [
        { path: "/" },
        { path: "/impressum" },
        { path: "/datenschutz" },
        { path: "/barrierefreiheit" },
      ],
    }),
    // nitro only runs at build time. No preset => portable node-server output
    // (Lovable forced cloudflare-module; we stay deploy-target agnostic).
    nitro(),
    viteReact(),
  ],
  resolve: {
    // Keep a single copy of React/Query across the SSR + client graphs.
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
});
