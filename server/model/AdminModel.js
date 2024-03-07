const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const AdminSchema = new Schema({
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
    required: [true, 'password must be given'],
  },

  photo: {
    type: String,

  },
}, { timestamps: true });

const AdminModel = new model('Admin', AdminSchema);

module.exports = AdminModel;
