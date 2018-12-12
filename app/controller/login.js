'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

  async render() {
    const ctx = this.ctx;
    await ctx.render('login.ejs');
  }
}

module.exports = LoginController;