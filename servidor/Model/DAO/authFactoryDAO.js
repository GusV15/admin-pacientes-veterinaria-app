import AuthMemDAO from './authMem.js'
import AuthMongoDAO from './authMongoDB.js'

class AuthFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new AuthMemDAO()

            case 'MONGO' :
                console.log(' ***** Persistiendo en MongoDB ***** ')
                return new AuthMongoDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new AuthMemDAO()
        }
    }
}

export default AuthFactoryDAO