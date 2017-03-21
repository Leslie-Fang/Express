var express = require('express');
var router = express.Router();
var my = require('../../databases/mysql_api.js');
//var Promise = require('promise');

router.get('/',function(req,res){
    res.render('react');
});

router.get('/reactES5',function(req,res){
    res.render('reactES5');
});

router.post('/users', function(req, res) {
    console.log('/react/users/ post success!');
    var data = {};
    my.validate(req,data,function(queryData){
        console.log(queryData);
        console.log('In callback!');
        res.send(queryData);
    });
});

module.exports = router;