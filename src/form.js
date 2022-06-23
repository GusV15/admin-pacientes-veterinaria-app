import Vue from 'vue'
import vueForm from 'vue-form'

var options = {
    validators: {
        'no-espacios' : function(value) {
            return !value.includes(' ')
            //return /[^ ]+/.test(value)
        }
    }
}

Vue.use(vueForm, options)