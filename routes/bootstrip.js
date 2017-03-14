var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('bootstrip');
});

router.get('/webpack',function(req,res){
    res.render('webpacktest');
})

module.exports = router;