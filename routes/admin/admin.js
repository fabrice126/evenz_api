var router = require('express').Router();
var adminController = require('./admin.controller');

router.use(adminController.checkSessionValidity);
//Admin api
router.get('/dashboard',adminController.dashboard);

module.exports = router;
