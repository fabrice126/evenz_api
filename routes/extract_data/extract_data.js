const router = require('express').Router();
const fs = require('fs');
//==========================================================================================================================\\
//============================================WEBSERVICE REST POUR L'URL /user/=============================================\\
//==========================================================================================================================\\

/**
 * create test event
 */
router.get('/', (req, res, next) => {
    fs.readFile("./data/public_event.json",(err,data) => {
        if (err) {
            console.log(err);
            return res.status(404).send({message:'Cannot read file !'});
        }
        var obj = JSON.parse(data);
        console.log(obj.length);
        for(var i=0, l=obj.length; i<l; i++){
            console.log(obj[i].fields.title);
        }
        res.status(200).send({message:'Evenements enregistrés !'});
    })

});



module.exports = router;