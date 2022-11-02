import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: "https://www.google.com",
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
});
