var User = require('../../models/User.model').User;

module.exports.checkSessionValidity = (req, res, next) => {
    console.log("__________ DANS LE MIDDLEWARE __________");
    if (req.session && req.session.user) {
        User.findOne({ email: req.session.user.email}, function(err, user) {
            if (user) {
                user.password = "";// delete the password from the session
                req.session.user = user;  //refresh the session value
                console.log(req.session)
                next();
            }else{
                return res.status(401).send("Ce compte n'éxiste pas");
            }
        });
    }
    else{
        return res.status(401).send("Vous devez vous connecter");
    }
}

module.exports.dashboard = (req, res, next) => {
    return res.status(200).send("Welcome to super secret api");
}