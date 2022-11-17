class AppointmentsMemDAO {

    constructor() {
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
        // completar
    }


    findAppointment = async id => {
        return this.appointments.find(appointment => appointment.id == id)    
    }

    findAppointments = async ()  => {
        try {
            //await delay(2000)
            return this.appointments
        }
        //catch(err) {
        catch {
            return []
        }
    }

    saveAppointment = async appointment => {
        const id = parseInt(this.appointments[this.appointments.length-1].id) + 1
        appointment.id = String(id)

        this.appointments.push(appointment)

        return appointment    
    }

    updateAppointment= async (appointment,id) => {
        /* Actualización total */    
        appointment.id = id
        const index = this.appointments.findIndex(appointment => appointment.id == id)
        this.appointments.splice(index, 1, appointment)

        return appointment    
    }

    deleteAppointment = async id => {
        const index = this.appointments.findIndex(appointment => appointment.id == id)    

        //(2)
        const appointment = this.appointments.splice(index, 1)[0]
        
        return appointment    
    }
}

export default AppointmentsMemDAO
