const Router = require('express').Router;
const userController = require('./controllers/user-controller');

const router = new Router();

// User interaction requests
router.post('/user-registration', userController.register);
router.post('/user-login', userController.login);
router.post('/user-logout', userController.logout);
router.post('/user-getinfo', userController.getInfo);

module.exports = router;