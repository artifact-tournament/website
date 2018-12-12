'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.render);
  app.passport.mount('steam');

  router.get('/home/createDeck', controller.home.createDeck);
  router.post('/passport/local', app.passport.authenticate('local'));
};
