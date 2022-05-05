import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { router } from "./router";

const app = createApp(App);
app.use(router);

app.mount("#app");

console.time("font");
window.addEventListener("load", () => {
    console.timeEnd("font");
});
