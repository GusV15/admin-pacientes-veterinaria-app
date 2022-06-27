import Vue from "vue";
import vueForm from "vue-form";

import axios from "axios";

var options = {
  validators: {
    "no-espacios": function (value) {
      return !value.includes(" ");
      //return /[^ ]+/.test(value)
    },
    "no-existe": async function (value) {
      let result = false;
      try {
        let { data: pacientes } = await axios(
          "https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/pacientes"
        );
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
