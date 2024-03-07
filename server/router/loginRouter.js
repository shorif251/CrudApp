const router = require('express').Router();
const { userLogin, adminLogin } = require('../controller/loginController');
const { UserLoginValidation } = require('../middleware/express_validation');
const validationAuthincation = require('../middleware/validationAuth');

router.post('/userLogin', UserLoginValidation, validationAuthincation, userLogin);

router.post('/adminLogin', UserLoginValidation, validationAuthincation, adminLogin);

module.exports = router;
