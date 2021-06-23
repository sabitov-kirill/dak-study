const Router = require('express').Router;

const userController = require('./controllers/user-controller');
const groupController = require('./controllers/group-controller');
const testController = require('./controllers/test-controller');

const router = new Router();

// User interaction requests
router.post('/user-registration', userController.register);
router.post('/user-login', userController.login);
router.post('/user-logout', userController.logout);
router.post('/user-getinfo', userController.getInfo);
router.post('/user-join-group', userController.joinGroup);

// Groups interaction
router.post('/group-create', groupController.create);

// Tests interaction
router.post('/test-create', testController.create);
router.post('/test-add-result', testController.addUserResult);
router.post('/test-get-result', testController.getUserResult);

module.exports = router;