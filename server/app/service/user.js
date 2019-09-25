const Service = require('egg').Service;
const tableName = 'users';

class UserService extends Service {

  async getByAccount(account) {
    const user = await this.app.mysql.get(tableName, {account})
    return user
  }
}

module.exports = UserService;
