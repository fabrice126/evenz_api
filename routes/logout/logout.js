var express = require('express');
var router = express.Router();
// Logout endpoint
router.get('/', function (req, res) {
    req.session.destroy();
    res.send({message:"logout success!"});
});

module.exports = router;
