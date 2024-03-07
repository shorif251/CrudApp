const SuccessResGet = async (res, items = '', payload = {}, statusCode = 200) => {
  res.status(statusCode).json({
    data: items,
    pagination: await payload,
    statusCode,
    success: true,
  });
};

const SuccessResponseAll = (res, message = 'Success', statusCode = 201) => {
  res.status(statusCode).json({
    message,
    success: true,
  });
};

const ErrorResponse = (res, message = 'Error', statusCode = 500) => {
  res.status(statusCode).json({
    error: message,
    success: false,
  });
};

module.exports = {
  SuccessResGet,
  SuccessResponseAll,
  ErrorResponse,
};
