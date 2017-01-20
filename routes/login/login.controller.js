var User = require('../../models/User.model').User;

module.exports.get = (req, res) => {
    console.log("Dans le login");
    return res.status(200).send();
}

module.exports.post = (req, res) => {
    var email = req.body.email;
    var password =  req.body.password;
    console.log(email+"<-->"+password);
    User.findOne({email:email, password:password}, function(err,user){
        if(err){console.log(err); return res.status(500).send();}
        if(!user){return res.status(500).send();}
        user.password = "";
        req.session.user = user;
        return res.status(200).send();
    });
}