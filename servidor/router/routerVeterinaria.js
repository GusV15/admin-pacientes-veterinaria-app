// import ControllerVeterinaria from '../controller/controllerVeterinaria.js'
import express from 'express';

export class RouterVeterinaria {
  constructor() {
    this.router = new express.Router();
    // this.controlador = new ControllerVeterinaria();
  }

  init() {
    // GET
    this.router.get('/getAnimal/:id'),
      (req, res) => res.json({ messege: 'Responde con un animales por ID' });

    this.router.get('/getAnimales'),
      (req, res) => res.json({ messege: 'Responde con Todos los animales' });

    // POST
    this.router.post('/addAnimal', (req, res) =>
      res.json({ message: 'Deberia cargar animal' })
    );

    // PUT
    this.router.put('/modificarAnimal/:id', (req, res) =>
      res.json({ message: 'Deberia modificar los valores de un animal' })
    );

    // DELETE
    this.router.delete('/eliminarAnimal/:id', (req, res) =>
      res.json({ message: 'Deberia eliminar de un animal' })
    );

    return this.router;
  }
}
