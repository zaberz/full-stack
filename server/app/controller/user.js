'use strict';

const BaseControll = require('./base');
const MD5 = require('md5');

class UserController extends BaseControll {
  async login() {
    let {ctx, service, app} = this;
    const {account, password} = ctx.request.body;
    if (account && password) {
      let user = await service.user.getByAccount(account);
      if (user && user.password === MD5(password)) {
        const userToken = {
          id: user.id
        };
        const expireTime = 86400;
        const token = app.jwt.sign(userToken, app.config.jwt.secret, {expiresIn: expireTime});
        this.apiSuccessReturn({token, expireAt: +new Date() + expireTime * 1000});
      } else {
        this.apiErrorReturn(1, '用户或密码错误');
      }
    } else {
      this.apiErrorReturn(1, '参数验证错误');
    }
  }

  async register() {

  }

  async index() {
  }

}

module.exports = UserController;
