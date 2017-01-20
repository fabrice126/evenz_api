var router = require('express').Router();
var userController = require('./user.controller');
router.use('/username', require('./username/username'));
//==========================================================================================================================\\
//============================================WEBSERVICE REST POUR L'URL /user/=============================================\\
//==========================================================================================================================\\
/**
 * GET all users 
 */
router.get('/', userController.get);
/**
 * POST user
 */
router.post('/', userController.post);
//==========================================================================================================================\\
//===========================================WEBSERVICE REST POUR L'URL /users/:id==========================================\\
//==========================================================================================================================\\
/**
 * GET user by id
 */
router.get('/:id', userController.getById);
/**
 * PUT user by id
 */
router.put('/:id', userController.putById);
/**
 * DELETE user by id
 */
router.delete('/:id', userController.deleteById);


module.exports = router;