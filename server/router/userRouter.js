const express = require('express');
const {
  UserFind,
  UserCreate,
  UserDataUpdate,
  UserImgUpdate,
  UserDelete,
  UserFindById,
} = require('../controller/userController');
const { multerErrorHandler, upload } = require('../middleware/multerHandler');
const checkLogin = require('../middleware/checkLogin');

const validationAuth = require('../middleware/validationAuth');
const { UserValidation } = require('../middleware/express_validation');

const router = express.Router();

router.get('/users_Data', UserFind);

router.get('/users_Data/:id', checkLogin, UserFindById);

router.post(
  '/users_Data',
  upload.single('img'),
  UserValidation,
  validationAuth,
  UserCreate,
); // upload single photo

// router.post('/users_Data', upload.single('keyName'), checkLogin, UserCreate); // upload single photo

router.put('/users_Data/:id', checkLogin, UserDataUpdate);

router.put('/users_Data/Img/:id', checkLogin, UserImgUpdate);

router.delete('/users_Data/:id', checkLogin, UserDelete);

router.use(multerErrorHandler);

module.exports = router;
