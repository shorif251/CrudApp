const express = require('express');
const {
 UserFind, UserCreate, UserUpdate, UserDelete, UserFindById,
} = require('../controller/userController');
const { multerErrorHandler, upload } = require('../middleware/multerHandler');

const router = express.Router();

router.get('/users', UserFind);

router.get('/users/:id', UserFindById);

router.post('/users', upload.single('keyName'), UserCreate); // upload single photo

router.put('/users/', UserUpdate);

router.delete('/users/:id', UserDelete);

router.use(multerErrorHandler);

module.exports = router;
