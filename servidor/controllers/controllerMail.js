import { ApiMail } from '../api/apiMail.js';

export class ControllerMail {
  constructor() {
    this.apiMail = new ApiMail();
  }

  insertUser = async (req, res) => {
    const data = req.body;
  
    try {
        res.json( await this.apiMail.mailAltaUsuario(data));
    } catch (error) {
        res.json('Error Controller getUser', error);
    }
  };

  insertAppointment = async (req, res) => {
    const data = req.body;

    try {
        res.json( await this.apiMail.mailAltaCita(data));
    } catch (error) {
        res.json('Error Controller getUser', error);
    }
  };

  
  deleteAppointment = async (req, res) => {
    const data = req.body;
    console.dir(data,{ depth: null } )
    try {
        res.json( await this.apiMail.mailBajaCita(data));
    } catch (error) {
        res.json('Error Controller getUser', error);
    }
  };

  insertPatient = async (req, res) => {
    const data = req.body;

    try {
        res.json( await this.apiMail.mailAltaPaciente(data));
    } catch (error) {
        res.json('Error Controller getUser', error);
    }
  };


}