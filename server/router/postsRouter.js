const router = require('express').Router();
const {
  PostsFind,
  PostsDelete,
  PostsUpdate,
  PostsCreate,
  PostsFindById,
} = require('../controller/postsController');
const checkLogin = require('../middleware/checkLogin');
const { postValidation } = require('../middleware/express_validation');
const { multerErrorHandler, upload } = require('../middleware/multerHandler');
const validationAuth = require('../middleware/validationAuth');

router.get('/user_posts', PostsFind);

router.get('/user_posts/:id', checkLogin, PostsFindById);

router.post(
  '/user_posts',
  upload.single('img'),
  postValidation,
  validationAuth,
  checkLogin,
  PostsCreate,
);

router.put('/user_posts', checkLogin, PostsUpdate);

router.delete('/user_posts', checkLogin, PostsDelete);

router.use(multerErrorHandler);

module.exports = router;
