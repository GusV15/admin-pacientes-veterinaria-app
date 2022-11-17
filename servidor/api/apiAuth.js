import config from '../config.js'
import AuthFactoryDAO from '../model/DAO/authFactoryDAO.js'

class ApiAuth {
  constructor() {
    console.log('users')
     this.AuthDAO = AuthFactoryDAO.get(config.MODO_PERSISTENCIA)
  }

  getUsers = async id => {
    return id? await this.AuthDAO.findUser(id) : await this.AuthDAO.findUsers()
  };

  saveUser = async (user) => {
    // const id = parseInt(this.users[this.users.length - 1].id) + 1;
    // user.id = String(id);
    // await this.users.push(user);
    return await this.AuthDAO.saveUser(user)
  };
}

export default ApiAuth;
