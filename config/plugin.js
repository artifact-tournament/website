'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
    enabled: true,
    package: 'egg-mongoose',
};

exports.ejs = {
    enabled: true,
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

exports.passportLocal = {
    enabled: true,
    package: 'egg-passport-local',
};
