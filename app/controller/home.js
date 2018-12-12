'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async render() {
    const ctx = this.ctx;
    await ctx.render('home.ejs');
  }

  async createDeck() {
    try {
      const user = await this.ctx.service.user.createDeck();
      return user;
    } catch (err) {
      this.ctx.logger.error('UserService create error', err);
      return new Error('create Error');
    }
  }

  async admin() {
    const ctx = this;
    if (ctx.isAuthenticated()) {
      // node js
    } else {
      ctx.session.returnTo = ctx.path;
      await ctx.render('login.ejs');
    }
  }
}

module.exports = HomeController;
