import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import VueAxios from "vue-axios";
import vueForm from "vue-form";
import { router } from "../src/router";

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(vueForm);

Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
