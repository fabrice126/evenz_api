var router = require('express').Router();
var loginController = require('./login.controller');

// Login endpoint
router.get('/', loginController.get);
// Login endpoint
router.post('/', loginController.post);

module.exports = router;
