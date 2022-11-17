import express from 'express';
import { ControllerMail } from '../controllers/controllerMail.js';

export class RouterMail {
  constructor() {
    this.router = new express.Router();
    this.controller = new ControllerMail();
  }

  init() {
    // GET
    
    this.router.get('/sendEmail', this.controller.getMail);

    //POST

    //PUT

    //DELETE

    return this.router;
  }
}
