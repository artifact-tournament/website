'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const CounterSchema = new mongoose.Schema({
        _id: { type: String, required: true },
        seq: { type: Number, default: 0 },
    }, { versionKey: false });

    return mongoose.model('Counter', CounterSchema);
};
