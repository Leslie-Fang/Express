var express = require('express');
var router = express.Router();
var user = require('./user.js');

router.get('/',function(req,res){
	res.render("main");
});
router.get('/count',function(req,res){
    res.render("count");
});
router.get('/animateMotion',function(req,res){
    res.render("animateMotion");
});
router.get('/splashScreen',function(req,res){
    res.render("splashScreen");
});
router.use('/user',user);

module.exports = router;