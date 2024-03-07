const bcrypt = require('bcrypt');
const fs = require('fs');
const {
  ErrorResponse,
  SuccessResponseAll,
  SuccessResGet,
} = require('../service/responseHandler');
const UserModel = require('../model/UserModel');

const { SaltRound } = process.env;
const bcryptSaltRound = Number(SaltRound);
console.log(typeof SaltRound);
const UserFind = async (req, res) => {
  try {
    const user = await UserModel.find().populate('posts');
    res.status(200).json({
      users: user,
      success: true,
    });
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const UserFindById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne({ _id: id });

    SuccessResGet(res, user);
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const UserCreate = async (req, res) => {
  try {
    const { firstName, surname, email, password, sex } = req.body;
    const img = req.file.filename;

    const isExisted = await UserModel.findOne({ email });

    if (!isExisted) {
      console.log('unique user');

      bcrypt.hash(password, bcryptSaltRound, async (err, hash) => {
        if (!err) {
          const userTemplete = {
            firstName,
            surname,
            email,
            password: hash,
            sex,
            photo: `http://localhost:5005/UploadServerFile/${img}`,
          };
          const newPost = new UserModel(userTemplete);
          await newPost.save();
          SuccessResponseAll(res, 'User was added!');
        } else {
          ErrorResponse(res, err.message, 502);
        }
      });
    } else {
      fs.unlink(`${__dirname}/../UploadServerFile/${img}`, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${img} file is removed`);
        }
      });
      ErrorResponse(res, 'Email is existed already', 403);
    }
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const UserDataUpdate = (req, res) => {
  try {
    SuccessResponseAll(res, 'User was updated!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const UserImgUpdate = (req, res) => {
  try {
    SuccessResponseAll(res, 'User was updated!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const AllUsersDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await UserModel.deleteMany();
    SuccessResponseAll(res, 'User was deleted!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const UserDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById({ _id: id });
    if (user) {
      const userImg = user.photo.split('/')[4];
      fs.unlink(`${__dirname}/../UploadServerFile/${userImg}`, (err) => {
        if (err) {
          console.log(`${userImg} wasn't delete`);
        } else {
          console.log(`${userImg} was delete`);
        }
      });
    } else {
      console.log("User was't found");
    }

    await UserModel.findByIdAndDelete({ _id: id });
    SuccessResponseAll(res, 'User was deleted!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

module.exports = {
  UserFind,
  UserFindById,
  UserCreate,
  UserDataUpdate,
  UserImgUpdate,
  UserDelete,
};
