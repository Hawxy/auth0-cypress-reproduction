import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: "http://127.0.0.1:5173/",
  },
});
