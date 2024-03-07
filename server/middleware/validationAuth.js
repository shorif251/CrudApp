/* eslint-disable consistent-return */
const { validationResult } = require('express-validator');

const validationAuthincation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};

module.exports = validationAuthincation;
