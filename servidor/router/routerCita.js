// import ControllerVeterinaria from '../controller/controllerVeterinaria.js'
import express from 'express';

export class RouterCita {
    constructor(){
        this.router = new express.Router();
        // this.controlador = new ControllerVeterinaria();
    }

    init(){

        // GET 
        this.router.get('/getCitas'), (req, res) => res.json( { "messege": "Deberia devolver todas las citas"}); 
        
        // POST
        this.router.post('/addCita', (req, res) => res.json( {"message": "Deberia cargar nueva citas"}));

        // PUT 
        this.router.put('/modificarCita/:id', (req, res) => res.json( {"message": "Deberia modificar los valores de las citas"}));
        
        // DELETE
        this.router.delete('/eliminarCita/:id', (req, res) => res.json( {"message": "Deberia eliminar la cita"}));
        
        return this.router;
    }
}