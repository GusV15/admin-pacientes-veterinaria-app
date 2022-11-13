import express from 'express';
import ControllerAuth from '../controllers/controllerAuth.js';

export class RouterAuth {
  constructor() {
    this.router = new express.Router();
    this.controller = new ControllerAuth();
  }

  init() {
    // GET
    this.router.get('/users', this.controller.getUsers);

    //POST
    this.router.post('/addUser', this.controller.saveUser);

    //PUT

    //DELETE

    return this.router;
  }
}
