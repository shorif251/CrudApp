const wildCardHandler = (req, res, next) => {
    res.status(401).json({
      error: 'Invalid-Route',
      success: false,
    });
    next();
  };

  const serverErrorHandler = (req, res, next) => {
    res.status(500).json({
      error: 'Server fails to response',
      success: false,
    });
  };

  module.exports = {
    wildCardHandler,
    serverErrorHandler,
  };
