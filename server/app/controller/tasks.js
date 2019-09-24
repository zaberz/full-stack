'use strict';

const BaseControll = require('./base');

class TasksController extends BaseControll {
  async index() {
    const {ctx, service} = this;
    let {id} = this.getUserInfo();
    let tasks = await service.task.selectByUid(id);
    this.apiSuccessReturn(tasks);
  }

  async create() {
    let {ctx, service} = this;
    let content = ctx.request.body.content;
    const userInfo = this.getUserInfo();
    const userId = userInfo.id;
    const res = await service.task.create(userId, content);
    this.apiSuccessReturn(res);
  }

  async destory() {
    let {ctx, service} = this;
    const id = ctx.request.body.id;
    const res = await service.task.finish(id);
    this.apiSuccessReturn(res);
  }
}

module.exports = TasksController;
