var express = require('express');
var router = express.Router();
var user = require('./user.js');
var game = require('./game.js');

router.get('/',function(req,res){
	res.send('index!');
})

router.use('/user',user);
router.use('/game',game);

module.exports = router;