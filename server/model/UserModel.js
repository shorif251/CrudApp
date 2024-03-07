const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is missing'],
  },

  surname: {
    type: String,
    required: [true, 'Surname is missing'],
  },

  email: {
    type: String,
    required: [true, 'Email must be given'],
  },

  password: {
    type: String,
    required: [true, 'Password must be given'],
  },

  sex: {
    type: String,
    enum: ['Male', 'Female', 'Others'],
    required: [true, 'Unknown sex type'],
  },

  photo: {
    type: String,
    required: [true, 'Profile pricture must be given'],
  },

  posts: [
    {
      type: Types.ObjectId,
      ref: 'Post',
    },
  ],
}, { timestamps: true });

const UserModel = model('User', UserSchema);

module.exports = UserModel;
