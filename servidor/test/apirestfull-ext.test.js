import supertest from 'supertest';
const request = supertest('http://localhost:3000')

import {expect} from 'chai'

const cliente = {
    name: 'juanm',
    password: '12345678',
    mail: "juan@gmail.com"
}

const mascota = {
    nombre: 'Milu',
    especie: 'Perro',
    raza: 'Maltez',
    edad: 10,
    sexo: 'macho',
    nombre_duenio: 'Jose',
    direccion: 'Diagonal 1111',
    email: 'Jose@gmail.com',
    id: '10',
}

describe('Test registro', () => {
    describe('POST Usuario', () => {
        it('Debería ingresar un usuario', async () => {

            let response = await request.post('/api/v1/addUser').send(cliente)
            expect(response.status).to.eql(200)
            const user =  await response.body
        })

    })
    describe('GET Usuarios', () => {
        it('Deberia devolver todos los usuarios', async () => {
            let response = await request.get('/api/v1/users')
            expect(response.body).to.be.an('array')
            expect(response.status).to.eql(200)
        })
        it("Deberia incluir el usuario agregado", async () => {
            let response = await request.get('/api/v1/users')
            //expect(response.body).to.deep.includes(cliente)
            //expect(cliente).to.be.oneOf(response.body);
            expect(response.body).to.be.an('array')
            expect(response.body.map(e=>(e.name))).to.include(cliente.name);

        })
    })
    describe('POST Patient', () => {
        it('Deberia ingresar un paciente', async () =>{
            let response = await request.post('/api/v1/patients').send(mascota)
            expect(response.status).to.eql(200)
            

        })

    })
    describe('GET Patient',  () =>{
        it('Deberia devolver todos los pacientes', async () =>{

            let response = await request.get('/api/v1/patients')
            expect(response.status).to.eql(200)

        })
        it('Deberia incluir el paciente agregado', async () =>{

            let response = await request.get('/api/v1/patients')
            expect(response.body.map(e=>(e.nombre))).to.include(mascota.nombre);
            expect(response.body.map(e=>(e.nombre_duenio))).to.include(mascota.nombre_duenio);
        })
        
    })
})
