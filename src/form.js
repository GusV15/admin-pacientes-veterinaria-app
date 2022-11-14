import Vue from 'vue';
import vueForm from 'vue-form';

import axios from 'axios';
import { PACIENTES } from './endpoints';

var options = {
  validators: {
    'no-espacios': function (value) {
      return !value.includes(' ');
      //return /[^ ]+/.test(value)
    },
    'no-existe': async function (value) {
      let result = false;
      try {
        let { data: pacientes } = await axios(PACIENTES);
        let pacienteBuscado =
          pacientes.length > 0
            ? pacientes.find((paciente) => paciente.nombre == value)
            : {};
        result = pacienteBuscado ? true : false;
      } catch (error) {
        console.error(error);
      }
      return result;
    },
  },
};

Vue.use(vueForm, options);
