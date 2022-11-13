class apiAppointments {
  constructor() {
    // @todo Reemplazar por datos de base de datos o memoria.
    this.appointments = [
      {
        nombre: 'Pocho',
        nombre_duenio: 'Gustavo',
        fecha_hora_atencion: '2022-06-27',
        email: 'gustavov0706@gmail.com',
        sintomas: 'dsdsdsdsds',
        atendido: true,
        id: '7',
      },
      {
        nombre: 'Elsa',
        nombre_duenio: 'Mario',
        fecha_hora_atencion: '2022-06-29',
        email: 'mario@hot.com',
        sintomas: 'control',
        atendido: true,
        id: '8',
      },
      {
        nombre: 'Pocho',
        nombre_duenio: 'Gustavo',
        fecha_hora_atencion: '2022-06-28',
        email: 'gustavov0706@gmail.com',
        sintomas: 'Vomitos',
        atendido: true,
        id: '10',
      },
    ];
    // this.AuthDAO = AuthFactoryDAO.get(config.PERSISTENCIA)
  }

  getAppointments = async () => {
    return this.appointments;
  };

  saveAppointment = async (appointment) => {
    const id = parseInt(this.appointments[this.appointments.length - 1].id) + 1;
    appointment.id = String(id);
    this.appointments.push(appointment);
  };

  editAppointment = async (id, appointment) => {
    appointment.id = id;
    const index = this.appointments.findIndex(
      (appointment) => appointment.id == id
    );
    this.appointments.splice(index, 1, appointment);
    return this.appointments;
  };

  removeAppointment = async (id) => {
    const index = this.appointments.findIndex(
      (appointment) => appointment.id == id
    );
    this.appointments.splice(index, 1);
  };
}

export default apiAppointments;
