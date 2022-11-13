import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import AddAppointment from './components/AddAppointment.vue';
import Appointments from './components/Appointments.vue';
import HistoryAppoiment from './components/HistoryAppoiment.vue';
import AddPacients from './components/AddPacients/IndexAddPacients.vue';
import PatientList from './components/PatientList';
import EditPatient from './components/EditPatient';
import Login from './components/Login.vue';
import CreateAccount from './components/CreateAcount.vue';
import store from './store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      meta: {
        requiresAuth: true,
      },
      component: Home,
    },
    {
      path: '/addappointment',
      name: 'addappointment',
      meta: {
        requiresAuth: true,
      },
      component: AddAppointment,
      props: true,
    },
    {
      path: '/appointments',
      name: 'appointments',
      meta: {
        requiresAuth: true,
      },
      component: Appointments,
    },
    {
      path: '/historyappoiment',
      meta: {
        requiresAuth: true,
      },
      component: HistoryAppoiment,
    },
    {
      path: '/addpacients',
      meta: {
        requiresAuth: true,
      },
      component: AddPacients,
      props: true,
    },
    {
      path: '/addpacients/:id',
      name: 'addpacients',
      component: AddPacients,
      meta: {
        requiresAuth: true,
      },
      props: true,
    },
    {
      path: '/patientlist',
      meta: {
        requiresAuth: true,
      },
      component: PatientList,
    },
    {
      path: '/editpatient',
      meta: {
        requiresAuth: true,
      },
      component: EditPatient,
    },
    {
      path: '/editpatient/:id',
      name: 'editPatient',
      component: EditPatient,
      meta: {
        requiresAuth: true,
      },
      props: true,
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/createAccount', name: 'CreateAccount', component: CreateAccount },
    { path: '/*', redirect: '/home' },
    { path: '/', redirect: '/home' },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.auth) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});
