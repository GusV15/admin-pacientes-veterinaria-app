import express from "express";
import config from "./config.js";
// import { RouterPalabras } from './router/routerPalabras.js';
// import { CnxMongoDB } from './model/mongoConnect.js'

// 
const app = new express();
app.use(express.json());

// 
// app.use('/api/v1', new RouterPalabras().routerInit() );

app.get('/', (req, res ) => res.send("HOLA"));

const server = app.listen(config.PORT , () => {
   console.log(`Servidor levantado en  http://localhost:${config.PORT}`)
}) 

server.on("error", (e) => console.log(`Ocurrio un error en el servidor ${e.message}`))

// 
// if(config.MODO_PERSISTENCIA === 'MONGO' ) await CnxMongoDB.conectar();