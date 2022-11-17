import { ApiMail } from '../api/apiMail.js';

export class ControllerMail {
  constructor() {
    this.apiMail = new ApiMail();
  }

  getMail = async (req, res) => {
    
    try {
        res.json( await this.apiMail.sendMail());
    } catch (error) {
        res.json('Error Controller getUser', error);
    }

  };
}