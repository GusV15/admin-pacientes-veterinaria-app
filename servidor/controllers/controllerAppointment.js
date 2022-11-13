import ApiAppointments from '../api/apiAppointments.js';

class ControllerAppointment {
  constructor() {
    this.apiAppointments = new ApiAppointments();
  }

  getAppointments = async (req, res) => {
    try {
      const appointments = await this.apiAppointments.getAppointments();
      res.json(appointments);
    } catch (error) {
      console.log('Error ControllerAppointment getAppointments', error);
    }
  };

  saveAppointment = async (req, res) => {
    try {
      const appointment = req.body;
      await this.apiAppointments.saveAppointment(appointment);
      res.json({ message: 'Se agrego cita' });
    } catch (error) {
      console.log('Error ControllerAppointment saveAppointment', error);
    }
  };

  editAppointment = async (req, res) => {
    try {
      const { id } = req.params;
      const appointment = req.body;
      await this.apiAppointments.editAppointment(id, appointment);
      res.json({ message: 'Se modificó cita' });
    } catch (error) {
      console.log('Error ControllerAppointment editAppointment', error);
    }
  };

  removeAppointment = async (req, res) => {
    try {
      const { id } = req.params;
      await this.apiAppointments.removeAppointment(id);
      res.json({ message: 'Se eliminó cita' });
    } catch (error) {
      console.log('Error ControllerAppointment removeAppointment', error);
    }
  };
}

export default ControllerAppointment;
