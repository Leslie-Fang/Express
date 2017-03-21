var express = require('express');
var router = express.Router();
var user = require('./user.js');
var react = require('./react.js');

router.get('/',function(req,res){
	console.log('request success!');
	res.send('hh!');
})

router.use('/user',user);
router.use('/react',react);

module.exports = router;