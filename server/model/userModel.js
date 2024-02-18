const mongoose = require('mongoose');

// the user Schema will be created here,
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    // write mongoose Schema here
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
