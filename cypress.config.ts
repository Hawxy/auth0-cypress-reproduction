import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: "https://manage.auth0lab.com",
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
});
