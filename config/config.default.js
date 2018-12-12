'use strict';

const path = require('path');

module.exports = app => ({
  // 
  keys: app.name + '_1544167901901_6990',
  
  // middleware
  middleware: [],

  // passport
  passportSteam: {
    // ENTER YOUR STEAM KEY
    key: '',
    realm: 'http://localhost:7002/',
    returnURL: 'http://localhost:7002/passport/steam/callback',
    stateless: true,
  },
  
  // mongoose
  mongoose: {
    url: 'mongodb://127.0.0.1:27017/user',
    options: {},
  },
  
  // template
  view: {
    root: path.join(app.baseDir, 'app/view'),
    mapping: {
        '.ejs': 'ejs',
    },
  },    
});
