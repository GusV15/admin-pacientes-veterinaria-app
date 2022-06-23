import Vue from "vue"
import App from "./App.vue"

import "bootstrap/dist/css/bootstrap.min.css"
import 'jquery'
import 'popper.js'
import 'bootstrap'


import './form'
import { router } from './router'
import './axios'
//import './globalFilters'
//import './globalMixins'
//import store from './store'

Vue.config.productionTip = false;



new Vue({
  router,
  //store,
  render: (h) => h(App),
}).$mount("#app");
