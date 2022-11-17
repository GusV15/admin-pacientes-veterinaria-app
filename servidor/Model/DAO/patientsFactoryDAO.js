import PatMemDAO from './patientsMem.js'
import PatMongoDAO from './patientsMongoDB.js'

class PatientsFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new PatMemDAO()

            case 'MONGO' :
                console.log(' ***** Persistiendo en MongoDB ***** ')
                return new PatMongoDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new PatMemDAO()
        }
    }
}

export default PatientsFactoryDAO