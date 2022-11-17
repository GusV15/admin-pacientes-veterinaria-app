import AppointmentsMemDAO from './appointmentsMem.js'
import AppointmentsMongoDAO from './appointmentsMongoDB.js'

class AppointmentsFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new AppointmentsMemDAO()

            case 'MONGO' :
                console.log(' ***** Persistiendo en MongoDB ***** ')
                return new AppointmentsMongoDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new AppointmentsMemDAO()
        }
    }
}

export default AppointmentsFactoryDAO