'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async render() {
    const ctx = this.ctx;
    await ctx.render('home.ejs');
  }
}

module.exports = HomeController;
