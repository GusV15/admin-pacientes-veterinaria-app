import express from 'express';
import { ControllerMail } from '../controllers/controllerMail.js';

export class RouterMail {
  constructor() {
    this.router = new express.Router();
    this.controller = new ControllerMail();
  }

  init() {

    //POST
    this.router.post('/newUser', this.controller.insertUser);
    this.router.post('/newAppointment', this.controller.insertAppointment);
    this.router.post('/deleteAppointment', this.controller.deleteAppointment);
    this.router.post('/newPatient', this.controller.insertPatient);

    return this.router;
  }
}
