import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPlugin from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router/routes.js";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPlugin);
app.use(pinia);
app.use(router);

app.mount("#app");
