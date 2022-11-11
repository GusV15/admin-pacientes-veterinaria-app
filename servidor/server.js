import express from "express";
import config from "./config.js";
import cors from "cors";
import { RouterVeterinaria } from './router/routerVeterinaria.js';
import { RouterLogin } from './router/routerLogin.js';
import { RouterCita } from './router/routerCita.js';
// import { CnxMongoDB } from './model/mongoConnect.js'

// INICIALIZAR APP
const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURACION DE LOS CORS
const option = {
   origin: ['http://localhost:8080',],
}
app.use(cors(option));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// ROUTER
app.get('/', (req, res) => res.send("================ EL SERVIDOR A SIDO INICIADO ================"))
app.use(config.BASE_ROUTER, new RouterVeterinaria().init() );
app.use(config.BASE_ROUTER, new RouterLogin().init() );
app.use(config.BASE_ROUTER, new RouterCita().init() );


// SERVIDOR 
const server = app.listen(config.PORT , () => {
   console.log(`Servidor levantado en  http://localhost:${config.PORT}`)
}) 

server.on("error", (e) => console.log(`Ocurrio un error en el servidor ${e.message}`))

// INICIO DE BASE DE DATOS

// if(config.MODO_PERSISTENCIA === 'MONGO' ) await CnxMongoDB.conectar();


