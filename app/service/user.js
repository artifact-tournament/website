'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async findBySteamId(steamId) {
    try {
      const user = await this.ctx.model.User.findOne({ steamid: steamId });
      return user;
    } catch (err) {
      this.ctx.logger.error('UserService findBySteamId error', err);
      return new Error('findBySteamId Error');
    }
  }

  async create(user) {
    try {
      const user = await this.ctx.model.User.create(user);
      return user;
    } catch (err) {
      this.ctx.logger.error('UserService create error', err);
      return new Error('create Error');
    }
  }
}

module.exports = UserService;
