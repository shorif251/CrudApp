const { ErrorResponse, SuccessResponseAll } = require('../service/responseHandler');

const AdminFind = (req, res) => {
  try {
    res.status(200).json({
      Admin: 'Admin will be shown',
      success: true,
    });
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const AdminFindById = (req, res) => {
  try {
    res.status(200).json({
      Admin: 'Admin will be shown',
      success: true,
    });
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const AdminCreate = (req, res) => {
  try {
    SuccessResponseAll(res, 'Admin was added!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const AdminUpdate = (req, res) => {
  try {
    SuccessResponseAll(res, 'Admin was updated!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

const AdminDelete = (req, res) => {
  try {
    SuccessResponseAll(res, 'Admin was deleted!');
  } catch (error) {
    ErrorResponse(res, error.message);
  }
};

module.exports = {
  AdminFind,
  AdminFindById,
  AdminCreate,
  AdminUpdate,
  AdminDelete,
};
