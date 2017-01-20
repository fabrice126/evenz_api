var router = require('express').Router();
var usernameController = require('./username.controller');


//==========================================================================================================================\\
//========================================WEBSERVICE REST POUR L'URL /user/username========================================\\
//==========================================================================================================================\\

/**
 * GET user by username
 */
router.get('/:username', usernameController.getByUsername);
/**
 * DELETE user by username
 */
router.delete('/:username', usernameController.deleteByUsername);

module.exports = router;