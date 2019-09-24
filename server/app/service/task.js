const Service = require('egg').Service;
const moment = require('moment');
const tableName = 'tasks';

class TaskService extends Service {
  async find(uid) {
    const tasks = await this.app.mysql.select('test');
    return tasks;
  }

  async create(uid, content) {
    const data = {
      uid,
      content,
      createTime: this.nowDateString(),
      updateTime: this.nowDateString(),
      isValid: 1
    };
    let res = await this.app.mysql.insert(tableName, data);
    let id = res.insertId;
    data.id = id;
    return data;
  }

  nowDateString() {
    return moment().format('YYYY-MM-DD H:mm:ss');
  }

  async finish(id) {
    let res = await this.app.mysql.update(tableName, {isValid: 0}, {id});
    return res.affectedRows === 1;
  }

  async selectByUid(uid) {
    let res = await this.app.mysql.select(tableName, {uid});
    return res;
  }
}

module.exports = TaskService;
