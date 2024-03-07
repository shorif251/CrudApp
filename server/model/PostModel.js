const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

const PostSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  photo: {
    type: String,

  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: [true, 'User was not authenticated'],
  },

}, { timestamps: true });

const PostModel = new model('Post', PostSchema);

module.exports = PostModel;
