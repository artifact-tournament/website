'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    steamid: { type: String, unique: true, required: true },
    nickname: String,
    profileurl: String,
    avatar: String,
    uid: String,
    seq: { type: Number, unique: true },
  }, { versionKey: false });

  return mongoose.model('User', UserSchema);
}
