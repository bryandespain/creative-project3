import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock-data.js";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;
let data = {
  players: mock,
};

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
