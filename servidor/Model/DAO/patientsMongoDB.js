import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class AuthMongoDAO {

    findPatient= async id => {
        if(!CnxMongoDB.connection) return {}
        let patient = await CnxMongoDB.db.collection('pacientes').findOne({_id: ObjectId(id)})
        return patient    
    }

    findPatients = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let patients = await CnxMongoDB.db.collection('pacientes').find({}).toArray()
            return patients
        }
        //catch(err) {
        catch {
            return []
        }
    }

    savePatient = async patient => {
        if(!CnxMongoDB.connection) return {}

        patient.edad = parseInt(patient.edad)
        await CnxMongoDB.db.collection('pacientes').insertOne(patient)
        return patient    
    }

    updatePatient = async (patient,id) => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('pacientes').updateOne(
            {_id: ObjectId(id)},
            {$set: patient}
        )
        let patientActualizado = await this.findPatient(id)
        return patientActualizado    
    }

    deletePatient= async id => {
        if(!CnxMongoDB.connection) return {}

        let patientEliminado = await this.findPatient(id)
        await CnxMongoDB.db.collection('pacientes').deleteOne({_id: ObjectId(id)})
        
        return patientEliminado    
    }
}

export default AuthMongoDAO
