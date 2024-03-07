const { ErrorResponse } = require('../service/responseHandler');

const wildCardHandler = (req, res, next) => {
  ErrorResponse(res, 'Invalid Route', 401);
  next();
};

const serverErrorHandler = (req, res, next) => {
  ErrorResponse(res, 'Server fails to response');
  next();
};

module.exports = {
  wildCardHandler,
  serverErrorHandler,
};
