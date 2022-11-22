import express from 'express';
import config from './config.js';
import cors from 'cors';
import { RouterPatient } from './router/routerPatient.js';
import { RouterAuth } from './router/routerAuth.js';
import { RouterAppointment } from './router/routerAppointment.js';
import { RouterMail } from './router/routerMail.js';
import CnxMongoDB from './model/DB.js';
import { RouterAnimalGifs } from './router/routerAnimalGifs.js';

// INICIALIZAR APP
const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CONFIGURACION DE LOS CORS
const option = {
  origin: ['http://localhost:8080'],
};
app.use(cors(option));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// ROUTER
app.get('/', (req, res) =>
  res.send('================ EL SERVIDOR A SIDO INICIADO ================')
);
app.use(config.BASE_ROUTER, new RouterPatient().init());
app.use(config.BASE_ROUTER, new RouterAuth().init());
app.use(config.BASE_ROUTER, new RouterAnimalGifs().init());
app.use(config.BASE_ROUTER, new RouterAppointment().init());
app.use(config.BASE_ROUTER, new RouterMail().init());

// SERVIDOR
const server = app.listen(config.PORT, () => {
  console.log(`Servidor levantado en  http://localhost:${config.PORT}`);
});

server.on('error', (e) =>
  console.log(`Ocurrio un error en el servidor ${e.message}`)
);

// INICIO DE BASE DE DATOS
if (config.MODO_PERSISTENCIA === 'MONGO') await CnxMongoDB.conectar();
