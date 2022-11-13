import ApiAuth from '../api/apiAuth.js';

class ControllerAuth {
  constructor() {
    this.apiLogin = new ApiAuth();
  }

  getUsers = async (req, res) => {
    try {
      const users = await this.apiLogin.getUsers();
      res.json(users);
    } catch (error) {
      console.log('Error ControllerAuth getUser', error);
    }
  };

  saveUser = async (req, res) => {
    try {
      const user = req.body;
      await this.apiLogin.saveUser(user);
      res.json({ message: 'Se agrego usuario' });
    } catch (error) {
      console.log('Error ControllerAuth saveUser', error);
    }
  };
}

export default ControllerAuth;
