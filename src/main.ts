import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createAuth0 } from "@auth0/auth0-vue";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(
  createAuth0({
    domain: "hawxy.au.auth0.com",
    client_id: "PdXlvzOvMXpV5gaSlcfKatCDmJFhAJal",
    redirect_uri: "http://127.0.0.1:5173/",
  })
);

app.mount("#app");
