import Vue from "vue";
import VueRouter from "vue-router";

import AddAppointment from './components/AddAppointment.vue'
import HistoryAppoiment from './components/HistoryAppoiment.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/addappointment', component: AddAppointment },
    { path: '/historyappoiment', component: HistoryAppoiment },
    
  ],
});
