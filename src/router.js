import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    /* { path: '/', redirect: '/form' },
        { path: '/form', component: Form },
        { path: '/requests', component: Requests }, */
  ],
});
