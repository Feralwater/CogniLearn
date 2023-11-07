import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Colada, { PiniaColadaPlugin } from "colada-plugin";
import App from "./App.vue";
import router from "./router";
import vuetify from "@/vuetify";


const app = createApp(App);

app.use(createPinia().use(PiniaColadaPlugin)).use(router).use(vuetify).use(Colada).mount("#app");
