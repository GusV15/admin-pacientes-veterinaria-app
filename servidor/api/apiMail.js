import nodemailer from 'nodemailer';
import config from '../config.js';

export class ApiMail {
    constructor(){
        this.mail = nodemailer.createTransport( JSON.parse(config.CONFIG_MAILER) );
    }

    // HACER PARA USUARIO DADO DE ALTA --> NOMBRE DE USUARIO - MAIL DADO DE ALTA
    // CITA DADA DE ALTA  --> OBJETO CON TODA LA DATA DE LA CITA ()
    // PACIENTE DADO DE ALTA  --> OBJETO CON TODA LA DATA DE LA PACIENTE ()
    // CITA DADA DE BAJA --> 

    async mailAltaUsuario() {  
      
      try{
            // ETEREAL 
            // CREAR MAIL PARA ENVIAR MAIL 
            // Enviamos email al usuario recien creado.
            await this.mail.sendMail({
              from: 'PEPE', 
              to: "brunobonino1995@gmail.com", 
              subject: `Usuario dado de alta`,
              text: ` Se creo mail con exito `, 
            });
    
            return "EL MAIL FUE CREADO CON EXITO"
          }catch(e){
            return "ERROR \n"+e
          }
    }

    async mailAltaCita() {  
      try{
            // ETEREAL 
            // CREAR MAIL PARA ENVIAR MAIL 
            // Enviamos email al usuario recien creado.
            await this.mail.sendMail({
              from: 'PEPE', 
              to: "brunobonino1995@gmail.com", 
              subject: `Usuario dado de alta`,
              text: ` Se creo mail con exito `, 
            });
    
            return "EL MAIL FUE CREADO CON EXITO"
          }catch(e){
            return "ERROR \n"+e
          }
    }

    async mailBajaCita() {  
      try{
            // ETEREAL 
            // CREAR MAIL PARA ENVIAR MAIL 
            // Enviamos email al usuario recien creado.
            await this.mail.sendMail({
              from: 'PEPE', 
              to: "brunobonino1995@gmail.com", 
              subject: `Usuario dado de alta`,
              text: ` Se creo mail con exito `, 
            });
    
            return "EL MAIL FUE CREADO CON EXITO"
          }catch(e){
            return "ERROR \n"+e
          }
    }

    async mailAltaPaciente() {  
      try{
            // ETEREAL 
            // CREAR MAIL PARA ENVIAR MAIL 
            // Enviamos email al usuario recien creado.
            await this.mail.sendMail({
              from: 'PEPE', 
              to: "brunobonino1995@gmail.com", 
              subject: `Usuario dado de alta`,
              text: ` Se creo mail con exito `, 
            });
    
            return "EL MAIL FUE CREADO CON EXITO"
          }catch(e){
            return "ERROR \n"+e
          }
    }


    


}