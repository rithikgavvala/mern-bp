var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('index')
});


//endpoint template

router.route('/testPost').post((res,req) => {
    //model.save((err) => {
    //  res.send('success');
    // })
});

module.exports = router;
