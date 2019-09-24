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

  getUserInfo() {
    return {id: 1, name: 'test'}
  }
}

module.exports = BaseController;
