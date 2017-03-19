var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('react');
});

router.get('/reactES5',function(req,res){
    res.render('reactES5');
});

module.exports = router;