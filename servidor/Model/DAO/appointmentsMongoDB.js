import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class AppointmentsMongoDAO {

    findAppointment = async id => {
        if(!CnxMongoDB.connection) return {}
        let appointment = await CnxMongoDB.db.collection('citas').findOne({_id: ObjectId(id)})
        return appointment    
    }

    findAppointments = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let appointments = await CnxMongoDB.db.collection('citas').find({}).toArray()
            return appointments
        }
        //catch(err) {
        catch {
            return []
        }
    }

    saveAppointment = async appointment => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('citas').insertOne(appointment)
        return appointment    
    }

    updateAppointment = async (appointment,id) => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('citas').updateOne(
            {_id: ObjectId(id)},
            {$set: appointment}
        )
        let appointmentActualizado = await this.findAppointment(id)
        return appointmentActualizado    
    }

    deleteAppointment= async id => {
        if(!CnxMongoDB.connection) return {}

        let appointmentEliminado = await this.findAppointment(id)
        await CnxMongoDB.db.collection('citas').deleteOne({_id: ObjectId(id)})
        
        return appointmentEliminado    
    }
}

export default AppointmentsMongoDAO
