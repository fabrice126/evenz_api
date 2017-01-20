var User = require('../../models/User.model').User;

module.exports.get = (req, res, next) => {
    User.find({}).exec( (err, users) => {
        if (err) return res.status(404).send({message:"No user found"});
        return res.status(200).send(JSON.stringify(users));
    });
}

module.exports.post = (req, res, next) => {
    var newUser = new User({
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        description: req.body.description,
        image: req.body.image
    });
    newUser.save((err) => {
        if (err) return res.status(404).send({message:"Email or username already exist !"});
        return res.status(200).send({message:'User created!'});
    });
}

module.exports.getById = (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return res.status(404).send({message:"Cannot get " + req.params.id});
        return res.send(JSON.stringify(user));
    });
}

module.exports.putById = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return res.status(404).send({message:"Cannot find user: "+req.params.id});
        user.username = req.body.username;
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.password = req.body.password;
        user.description = req.body.description;
        user.image = req.body.image;
        user.save((err) => {
            if (err) return res.status(404).send({message:"Cannot updated user: "+req.params.id});
            return res.status(200).send({message:"User updated !"});
        });
    });
}

module.exports.deleteById = (req, res) => {
    User.remove({ _id: req.params.id }, (err) => {
        if (err) return res.status(404).send({message:"Cannot delete " + req.params.id});
        return res.status(200).send({message:"User : " + req.params.id + " deleted"});
    });
}