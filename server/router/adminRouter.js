const express = require('express');
const {
  UserFind, UserCreate, UserDataUpdate, UserImgUpdate, UserDelete, UserFindById,
} = require('../controller/userController');
const { multerErrorHandler, upload } = require('../middleware/multerHandler');
const checkLogin = require('../middleware/checkLogin');

const router = express.Router();

router.get('/admin_Data', checkLogin, UserFind);

router.get('/admin_Data/:id', checkLogin, UserFindById);

router.post('/admin_Data', upload.single('keyName'), checkLogin, UserCreate); // upload single photo

// router.post('/admin_Data', upload.single('keyName'), checkLogin, UserCreate); // upload single photo

router.put('/admin_Data/:id', checkLogin, UserDataUpdate);

router.put('/admin_Data/Img/:id', checkLogin, UserImgUpdate);

router.delete('/admin_Data/:id', checkLogin, UserDelete);

router.use(multerErrorHandler);

module.exports = router;
