const router = require('express').Router();
const { userLogout, adminLogout } = require('../controller/logoutController');
const checkLogin = require('../middleware/checkLogin');

router.get('/userLogout', checkLogin, userLogout);

router.get('/adminLogout', checkLogin, adminLogout);

module.exports = router;
