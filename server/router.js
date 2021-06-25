const Router = require('express').Router;

const userController = require('./controllers/user-controller');
const groupController = require('./controllers/group-controller');
const testController = require('./controllers/test-controller');

const router = new Router();

// User interaction requests
router.get('/user-session', userController.session);
router.post('/user-registration', userController.register);
router.post('/user-login', userController.login);
router.get('/user-logout', userController.logout);
router.post('/user-set-status', userController.setStatus);
router.post('/user-getinfo', userController.getInfo);
router.post('/user-get-groups', userController.getGroups);
router.post('/user-join-group', userController.joinGroup);

// Groups interaction
router.post('/group-create', groupController.create);
router.post('/group-privacy', groupController.getPrivacy);
router.post('/group-users', groupController.getUsers);

// Tests interaction
router.post('/test-create', testController.create);
router.post('/test-add-result', testController.addUserResult);
router.post('/test-get-result', testController.getUserResult);

module.exports = router;