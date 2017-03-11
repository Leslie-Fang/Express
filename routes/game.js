var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('main');
});
router.get('/mgame',function(req,res){
    res.send('test gulp again restart!');
});

module.exports = router;