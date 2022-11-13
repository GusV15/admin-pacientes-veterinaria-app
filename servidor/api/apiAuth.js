class ApiAuth {
  constructor() {
    // @todo Reemplazar por datos de base de datos o memoria.
    this.users = [
      {
        name: 'gustavo123',
        password: '12345678',
        id: '1',
      },
      {
        name: 'bruno123',
        password: '12345678',
        id: '2',
      },
      {
        name: 'santi123',
        password: '12345678',
        id: '3',
      },
    ];
    // this.AuthDAO = AuthFactoryDAO.get(config.PERSISTENCIA)
  }

  getUsers = async () => {
    return this.users;
  };

  saveUser = async (user) => {
    const id = parseInt(this.users[this.users.length - 1].id) + 1;
    user.id = String(id);
    await this.users.push(user);
  };
}

export default ApiAuth;
