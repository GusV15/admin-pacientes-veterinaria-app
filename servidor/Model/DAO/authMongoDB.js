import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class AuthMongoDAO {

    findUser = async id => {
        if(!CnxMongoDB.connection) return {}
        let user = await CnxMongoDB.db.collection('usuarios').findOne({_id: ObjectId(id)})
        return user    
    }

    findUsers = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let users = await CnxMongoDB.db.collection('usuarios').find({}).toArray()
            return users
        }
        //catch(err) {
        catch {
            return []
        }
    }

    saveUser = async user => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('usuarios').insertOne(user)
        return user    
    }

    updateUser = async (user,id) => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('usuarios').updateOne(
            {_id: ObjectId(id)},
            {$set: user}
        )
        let userActualizado = await this.findUser(id)
        return userActualizado    
    }

    deleteUser= async id => {
        if(!CnxMongoDB.connection) return {}

        let userEliminado = await this.findUser(id)
        await CnxMongoDB.db.collection('usuarios').deleteOne({_id: ObjectId(id)})
        
        return userEliminado    
    }
}

export default AuthMongoDAO
