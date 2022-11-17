import config from '../config.js'
import PatientsFactoryDAO from '../model/DAO/patientsFactoryDAO.js'

export default class ApiPatients {
  constructor() {
    console.log('pacientes')
    this.PatientDAO = PatientsFactoryDAO.get(config.MODO_PERSISTENCIA)
  }

  getPatients = async id  => {
    return id? await this.PatientDAO.findPatient(id) : await this.PatientDAO.findPatients()
  };

  savePatient = async (patient) => {
    return await this.PatientDAO.savePatient(patient)
  };

  editPatient = async (id, patient) => {
    return await this.PatientDAO.updatePatient(patient,id)
  };

  removePatient = async (id) => {
    return await this.PatientDAO.deletePatient(id)
  };
}
