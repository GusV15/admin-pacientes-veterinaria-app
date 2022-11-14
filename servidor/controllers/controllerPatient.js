import ApiPatients from '../api/apiPatients.js';

export default class ControllerPatient {
  constructor() {
    this.apiPatients = new ApiPatients();
  }

  getPatients = async (req, res) => {
    try {
      const patients = await this.apiPatients.getPatients();
      res.json(patients);
    } catch (error) {
      console.log('Error ControllerPatient getPatients', error);
    }
  };

  savePatient = async (req, res) => {
    try {
      const patient = req.body;
      await this.apiPatients.savePatient(patient);
      res.json({ message: 'Se agrego paciente' });
    } catch (error) {
      console.log('Error ControllerPatient savePatient', error);
    }
  };

  editPatient = async (req, res) => {
    try {
      const { id } = req.params;
      const patient = req.body;
      await this.apiPatients.editPatient(id, patient);
      res.json({ message: 'Se modificó paciente' });
    } catch (error) {
      console.log('Error ControllerPatient editPatient', error);
    }
  };

  removePatient = async (req, res) => {
    try {
      const { id } = req.params;
      await this.apiPatients.removePatient(id);
      res.json({ message: 'Se eliminó paciente' });
    } catch (error) {
      console.log('Error ControllerPatient removePatient', error);
    }
  };
}
