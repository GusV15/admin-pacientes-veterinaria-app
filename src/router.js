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
import store from './store';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    { path: '/addappointment', component: AddAppointment },
    { path: '/appointments', component: Appointments },
    { path: '/historyappoiment', component: HistoryAppoiment },
    { path: '/addpacients', component: AddPacients },
    { path: '/patientlist', component: PatientList },
    { path: '/editpatient', component: EditPatient },
    {
      path: '/editpatient/:id',
      name: 'editPatient',
      component: EditPatient,
      props: true,
    },
    { path: '/login', name: 'Login', component: Login },
    { path: '/*', redirect: '/home' },
    { path: '/', redirect: '/home' },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.auth) next({ name: 'Login' });
  else next();
});
