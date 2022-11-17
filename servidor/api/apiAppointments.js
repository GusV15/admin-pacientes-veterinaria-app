import config from '../config.js'
import AppointmentsFactoryDAO from '../model/DAO/appointmentsFactoryDAO.js'

class apiAppointments {
  constructor() {
    // @todo Reemplazar por datos de base de datos o memoria.
    console.log('citas')
    this.AppointmentsDAO = AppointmentsFactoryDAO.get(config.MODO_PERSISTENCIA)
  }

  getAppointments = async id => {
    return id? await this.AppointmentsDAO.findAppointment(id) : await this.AppointmentsDAO.findAppointments()
  };

  saveAppointment = async (appointment) => {
    return await this.AppointmentsDAO.saveAppointment(appointment)
  };

  editAppointment = async (id, appointment) => {
    return await this.AppointmentsDAO.updateAppointment(appointment,id)
  };

  removeAppointment = async (id) => {
    return await this.AppointmentsDAO.deleteAppointment(id)
  };
}

export default apiAppointments;
