var User = require('../../../models/User.model').User;

module.exports.getByUsername = (req, res, next) => {
    User.find({username: req.params.username}, (err, user) => {
        if (err) return res.status(404).send({message:"Cannot get " + req.params.username});
        return res.status(200).send(JSON.stringify(user));
    });
}
module.exports.deleteByUsername = (req, res) => {
    User.remove({ username: req.params.username }, (err) => {
        if (err) return res.status(404).send({message:"Cannot delete " + req.params.username});
        return res.status(200).send({message:"User "+req.params.username+" deleted"});
    });
}