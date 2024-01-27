// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "build",

    assetsInclude: "src/assets/**",
    rollupOptions: {
      external: ["/portfolio web/src/assets/blog.jpg"],
    },
  },
});
