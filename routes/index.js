var express = require('express');
var router = express.Router();
var user = require('./user.js');
var game = require('./game.js');
var react = require('./reactroute.js')
var bootstrip = require('./bootstrip.js')

router.get('/',function(req,res){
	res.send('index!');
})

router.use('/user',user);
router.use('/game',game);
router.use('/react',react);
router.use('/bootstrip',bootstrip);

module.exports = router;