const jwt = require('jsonwebtoken');
const { ErrorResponse } = require('../service/responseHandler');

const { JWTtokenKEY } = process.env;

const checkLogin = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];

    const decode = jwt.verify(token, JWTtokenKEY);
    const { id, email } = decode;
    req.id = id;
    req.email = email;
    next();
  } catch (error) {
    ErrorResponse(res, 'Unauthorized User', 403);
  }
};

module.exports = checkLogin;
