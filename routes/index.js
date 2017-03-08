var express = require('express');
var router = express.Router();
var user = require('./user.js');

router.get('/',function(req,res){
	res.send('hh!');
})

router.use('/user',user);

module.exports = router;