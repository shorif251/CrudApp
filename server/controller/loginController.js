const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../model/UserModel');
const AdminModel = require('../model/AdminModel');
const { SuccessResponseAll, ErrorResponse } = require('../service/responseHandler');
const { tokenGenerator, cookieGenerator } = require('../service/service');

const { JWTtokenKEY } = process.env;

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          const token = tokenGenerator(res, user._id, user.email, JWTtokenKEY);

          cookieGenerator(res, 'userJWTtoken', token);

          SuccessResponseAll(res, { id: user._id, message: 'Login, Successfully' }, 200);
        } else {
          ErrorResponse(res, 'Authintication failed!', 403);
        }
      });
    } else {
      ErrorResponse(res, 'Authintication failed!', 403);
    }
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await AdminModel.findOne({ email });
    if (admin) {
      bcrypt.compare(password, admin.password, (err, result) => {
        if (result === true) {
          const token = tokenGenerator(res, admin._id, admin.email, JWTtokenKEY);

          cookieGenerator(res, 'adminJWTtoken', token);

          SuccessResponseAll(res, 'Login, Successfully', 200);
        } else {
          ErrorResponse(res, 'Authintication failed!', 403);
        }
      });
    } else {
      ErrorResponse(res, 'Authintication failed!', 403);
    }
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

module.exports = {
  adminLogin,
  userLogin,
};
