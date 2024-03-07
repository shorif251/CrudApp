const mongoose = require('mongoose');
const UserModel = require('../model/UserModel');
const AdminModel = require('../model/AdminModel');
const { SuccessResponseAll, ErrorResponse } = require('../service/responseHandler');

const userLogout = async (req, res) => {
  try {
    const { id } = req;
    const user = await UserModel.findOne({ _id: id });
    if (user) {
      res.clearCookie('userJWTtoken');
      SuccessResponseAll(res, 'Logout, Successfully', 200);
    }
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const adminLogout = async (req, res) => {
  try {
    const { id } = req;
    const user = await AdminModel.findOne({ _id: id });
    if (user) {
      res.clearCookie('adminJWTtoken');
      SuccessResponseAll(res, 'Login, Successfully', 200);
    }
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

module.exports = {
  adminLogout,
  userLogout,
};
