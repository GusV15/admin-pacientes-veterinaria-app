class PatientsMemDAO {

    constructor() {
        this.patients = [
        {
            nombre: 'Pocho',
            especie: 'Perro',
            raza: 'Bulldog',
            edad: 4,
            sexo: 'hembra',
            nombre_duenio: 'Gustavo',
            direccion: 'Laguna 1000 CABA',
            email: 'gustavov0706@gmail.com',
            id: '3',
            especis: 'Perro',
        },
        {
            nombre: 'Alex',
            especie: 'Gato',
            raza: 'Siames',
            edad: 3,
            sexo: 'macho',
            nombre_duenio: 'Mario',
            direccion: 'Av Directorio 1112',
            email: 'mario@gmail.com',
            id: '5',
        },
        {
            nombre: 'Felix',
            especie: 'Gato',
            raza: 'Atigrado',
            edad: 5,
            sexo: 'macho',
            nombre_duenio: 'delmer',
            direccion: 'blanco encalada 5126 1 c',
            email: 'jindrg@gmail.com',
            id: '6',
        },
        {
            nombre: 'galo',
            especie: 'Perro',
            raza: 'Pitbull',
            edad: 5,
            sexo: 'macho',
            nombre_duenio: 'Maite',
            direccion: 'monroe 2258',
            email: 'maite@gmail.com',
            id: '7',
        },
        {
            nombre: 'Margarita',
            especie: 'Perro',
            raza: 'Bulldog',
            edad: 5,
            sexo: 'hembra',
            nombre_duenio: 'Flor',
            direccion: 'paexz 2585',
            email: 'flor@gmail.com',
            id: '8',
        },
        {
            nombre: 'Michifus',
            especie: 'Gato',
            raza: 'Siames',
            edad: 5,
            sexo: 'macho',
            nombre_duenio: 'Carlos',
            direccion: 'Laguna 1111',
            email: 'carlos@gmail.com',
            id: '9',
        },
        ];
        // completar
    }


    findPatient = async id => {
        return this.patients.find(patient => patient.id == id)    
    }

    findPatients = async ()  => {
        try {
            //await delay(2000)
            return this.patients
        }
        //catch(err) {
        catch {
            return []
        }
    }

    savePatient = async patient => {
        const id = parseInt(this.patients[this.patients.length-1].id) + 1
        patient.id = String(id)

        this.patients.push(patient)
        return patient    
    }

    updatePatient= async (patient,id) => {
        /* Actualización total */    
        patient.id = id
        const index = this.patients.findIndex(patient => patient.id == id)
        this.patients.splice(index, 1, patient)

        return patient    
    }

    deletePatient = async id => {
        const index = this.patients.findIndex(patient => patient.id == id)    

        //(2)
        const patient = this.patients.splice(index, 1)[0]
        
        return patient    
    }
}

export default PatientsMemDAO
