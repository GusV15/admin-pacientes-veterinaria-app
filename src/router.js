import Vue from "vue";
import VueRouter from "vue-router";

import AddAppointment from "./components/AddAppointment.vue";
import Appointments from "./components/Appointments.vue";
import HistoryAppoiment from "./components/HistoryAppoiment.vue";
import Login from "./components/Login.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/addappointment", component: AddAppointment },
    { path: "/appointments", component: Appointments },
    { path: "/historyappoiment", component: HistoryAppoiment },
    { path: "/login", component: Login },
  ],
});
