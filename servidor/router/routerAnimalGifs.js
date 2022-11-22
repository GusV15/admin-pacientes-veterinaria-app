import express from 'express';
import ControllerAnimalGifs from '../controllers/controllerAnimalGifs.js';

export class RouterAnimalGifs {
  constructor() {
    this.router = new express.Router();
    this.controllerAppointment = new ControllerAnimalGifs();
  }

  init() {
    // GET
    this.router.get('/animalGifs', this.controllerAppointment.getAnimalGifs);

    return this.router;
  }
}
