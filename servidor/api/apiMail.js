import nodemailer from 'nodemailer';
import config from '../config.js';

export class ApiMail {
    constructor(){
        this.mail = nodemailer.createTransport( JSON.parse(config.CONFIG_MAILER) );
        this.fromMail = 'brunobonino1995@gmail.com'
    }

    // ETEREAL --> OPCION ALTERNATIVA A NODEMAILER 


    // HACER PARA USUARIO DADO DE ALTA --> NOMBRE DE USUARIO - MAIL DADO DE ALTA
    async mailAltaUsuario(user) {  
      const { name , email } = user;

      try{
            await this.mail.sendMail({
              from: this.fromMail, 
              to: email, 
              subject: `Usuario dado de alta`,
              text: `Se dio de alta con exito el usuario  --> ${name} `, 
            });
            return "EL USUARIO FUE DADO DE ALTA CON EXITOS"
          }catch(e){
            return "ERROR \n"+e
          }
    }

    // CITA DADA DE ALTA  
    async mailAltaCita( cita ) { 
      const { email, fechaAtencion , horaAtencion, nombreDuenio, nombreMascota, sintomas } = cita;
      try{
            await this.mail.sendMail({
              from: this.fromMail, 
              to: email, 
              subject: `Se registra nueva cita ${fechaAtencion} ${horaAtencion}`,
              text: `
              Se agendo con exitos una cita
              -----------------------------
              Nombre del Duenio: ${nombreDuenio}
              Nombre de la mascota: ${nombreMascota}
              Mail de contacto: ${email}
              Sintomas descriptos: ${sintomas}
              `, 
            });
    
            return "CITA DADA DE ALTA CON EXITO"
          }catch(e){
            return "ERROR \n"+e
          }
    }

    // CITA DADA DE BAJA --> OBJETO CON TODA LA DATA DE LA CITA () 
    async mailBajaCita(cita) {  

      const { email, fecha_hora_atencion, nombre_duenio, nombre, sintomas } = cita;
      
      try{
        await this.mail.sendMail({
          from: this.fromMail, 
          to: email, 
          subject: `Se da de baja la cita del ${fecha_hora_atencion}`,
          text: `
          Datos de la cita 
          ----------------
          Nombre del Duenio: ${nombre_duenio}
          Nombre de la mascota: ${nombre}
          Mail de contacto: ${email}
          Motivo de la baja: ${sintomas}
          `, 
        });
    
            return "CITA FUE BORRADA CON EXITO"
          }catch(e){
            return "ERROR \n"+e
          }
    }

          
    // PACIENTE DADO DE ALTA  --> OBJETO CON TODA LA DATA DE LA PACIENTE ()
    async mailAltaPaciente(paciente) { 

      const { direccion, edad, email, especie, nombre, nombre_duenio, raza, sexo } = paciente;

      try{
        await this.mail.sendMail({
          from: this.fromMail, 
          to: email, 
          subject: `Se registra nuevo paciente ${nombre}`,
          text: `
          Se registra un nuevo paciente
          -----------------------------
          Nombre de la mascota: ${nombre}
          Especie: ${especie}
          Edad: ${edad}
          Sexo: ${sexo}
          Nombre del dueño: ${nombre_duenio}
          Mail de contacto: ${email}
          Direccion: ${direccion}
          Tipo de mascota: ${raza}
          `, 
        });

        return "SE REGISTRO UN NUEVO PACIENTE CON EXITO"
      }catch(e){
        return "ERROR \n"+e
      }
    }
}