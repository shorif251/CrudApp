const {
  ErrorResponse,
  SuccessResponseAll,
  SuccessResGet,
} = require('../service/responseHandler');
const PostModel = require('../model/PostModel');
const UserModel = require('../model/UserModel');

const PostsFind = async (req, res) => {
  try {
    const posts = await PostModel.find().populate('user');
    SuccessResGet(res, posts);
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const PostsFindById = (req, res) => {
  try {
    res.status(200).json({
      Posts: 'Posts will be shown',
      success: true,
    });
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const PostsCreate = async (req, res) => {
  try {
    const { id } = req;
    const { body } = req.body;

    const makePost = {
      body,
      photo: !req.file
        ? ''
        : `http://localhost:5005/UploadServerFile/${req.file.filename}`,
      user: id,
    };

    const newPost = new PostModel(makePost);
    const post = await newPost.save();

    await UserModel.updateOne(
      { _id: id },
      {
        $push: {
          posts: post._id,
        },
      },
    );
    SuccessResponseAll(res, 'Posts was added!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const PostsUpdate = (req, res) => {
  try {
    SuccessResponseAll(res, 'Posts was updated!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const PostsDelete = (req, res) => {
  try {
    SuccessResponseAll(res, 'Posts was deleted!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

module.exports = {
  PostsFind,
  PostsFindById,
  PostsCreate,
  PostsUpdate,
  PostsDelete,
};
