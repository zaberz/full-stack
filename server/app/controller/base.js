const Controller = require('egg').Controller;

class BaseController extends Controller {
  apiSuccessReturn(data) {
    let {ctx} = this;
    ctx.body = {
      code: 0,
      message: 'success',
      data
    };
  }

  apiErrorReturn(code, message) {
    let {ctx} = this;
    ctx.body = {
      code,
      message,
      data: null
    };
  }

  async getUserInfo() {
    let {ctx, app} = this
    let userInfo = null;
    const token = ctx.header.authorization;
    if (token) {
      const tokenInfo = await app.jwt.verify(token.split(' ')[1], app.config.jwt.secret)
      const {id, exp} = tokenInfo
      if (exp * 1000 > +new Date) {
        userInfo = {
          id
        }
      }else{
        throw new Error('登陆过期')
      }
    }
    return userInfo
  }
}

module.exports = BaseController;
