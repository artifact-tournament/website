'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
    enabled: true,
    package: 'egg-mongoose',
};

exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
};

exports.passport = {
    enabled: true,
    package: 'egg-passport',
};

exports.passportSteam = {
    enabled: true,
    package: 'egg-passport-steam',
};

