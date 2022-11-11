// import ControllerLogin from '../controller/controllerLogin.js'
import express from 'express';

export class RouterLogin {
    constructor(){
        this.router = new express.Router();
        // this.controlador = new ControllerLogin();
    }

    init(){

        // GET
        this.router.get('/login/:user', (req, res) => res.json({"message": "Logeado Okey"}));

        //POST
        this.router.post('/addUser', (req, res) => res.json({ "message": "Se agrego usuario"}));

        //PUT

        //DELETE 
        

        return this.router;
    }
}