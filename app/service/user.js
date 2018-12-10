'use strict';
module.exports = app => {
    class UserService extends app.Service {
        * findBySteamId(steamId, callback) {
            let ret;
            try {
                ret = yield this.ctx.model.User.findOne({ steamid: steamId });
            } catch (err) {
                this.ctx.logger.error('UserService findBySteamId error', err);
                return new Error('findBySteamId Error');
            }
            return ret;
        }
    }
};