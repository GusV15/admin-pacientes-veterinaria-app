import Vue from "vue";
import VueRouter from "vue-router";

import Main from './components/main.vue'
/* import AddAppointment from './components/addappointment.vue'
import HistoryAppoiment from './components/historyappoiment.vue' */
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
   console.log(Main),
   /*  { path: '/', redirect: '/main' }, */
         { path: '/form', component: Main },
        /*{ path: '/requests', component: HistoryAppoiment }, */
  ],
});
