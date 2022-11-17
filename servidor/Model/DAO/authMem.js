class AuthMemDAO {

    constructor() {
    // @todo Reemplazar por datos de base de datos o memoria.
        this.users = [
        {
            name: 'gustavo123',
            password: '12345678',
            id: '1',
            mail: "gustavo@gmail.com"
        },
        {
            name: 'bruno123',
            password: '12345678',
            id: '2',
            mail: "bruno@gmail.com"
        },
        {
            name: 'santi123',
            password: '12345678',
            id: '3',
            mail: "santiago@gmail.com"
        },
        ];
        // completar
    }


    findUser = async id => {
        console.log('HOLA', id)
        return this.users.find(user => user.id == id)    
    }

    findUsers = async ()  => {
        try {
            //await delay(2000)
            return this.users
        }
        //catch(err) {
        catch {
            return []
        }
    }

    saveUser = async user => {
        
        const id = parseInt(this.users[this.users.length-1].id) + 1
        user.id = String(id)

        this.users.push(user)
        console.log(this.users)
        return user    
    }

    updateUser= async (user,id) => {
        /* Actualización total */    
        user.id = id
        const index = this.users.findIndex(user => user.id == id)
        this.users.splice(index, 1, user)

        return user    
    }

    deleteUser = async id => {
        const index = this.users.findIndex(user => user.id == id)    

        //(2)
        const user = this.users.splice(index, 1)[0]
        
        return user    
    }
}

export default AuthMemDAO
