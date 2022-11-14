import express from 'express';
import ControllerPatient from '../controllers/controllerPatient.js';

export class RouterPatient {
  constructor() {
    this.router = new express.Router();
    this.controllerPatient = new ControllerPatient();
  }

  init() {
    // GET
    this.router.get('/patients', this.controllerPatient.getPatients);

    // POST
    this.router.post('/patients', this.controllerPatient.savePatient);

    // PUT
    this.router.put('/patients/:id', this.controllerPatient.editPatient);

    // DELETE
    this.router.delete('/patients/:id', this.controllerPatient.removePatient);

    return this.router;
  }
}
