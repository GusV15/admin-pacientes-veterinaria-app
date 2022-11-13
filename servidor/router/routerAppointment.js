// import ControllerVeterinaria from '../controller/controllerVeterinaria.js'
import express from 'express';
import ControllerAppointment from '../controllers/controllerAppointment.js';

export class RouterAppointment {
  constructor() {
    this.router = new express.Router();
    this.controllerAppointment = new ControllerAppointment();
  }

  init() {
    // GET
    this.router.get(
      '/appointments',
      this.controllerAppointment.getAppointments
    );

    // POST
    this.router.post(
      '/appointments',
      this.controllerAppointment.saveAppointment
    );

    // PUT
    this.router.put(
      '/appointments/:id',
      this.controllerAppointment.editAppointment
    );

    // DELETE
    this.router.delete(
      '/appointments/:id',
      this.controllerAppointment.removeAppointment
    );

    return this.router;
  }
}
