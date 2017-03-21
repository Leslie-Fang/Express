var mysql = require('mysql');
var config = require('../config.js').databases_config;
//var Promise = require('promise');

exports.validate=function(req, data,callback){
    var connection = mysql.createConnection(config);
    connection.connect();
    connection.query('select * from users', function(err, result) {
        if (err) throw err;
        //var res = result[0];
        if(result != null)
        {
            //console.log(result[0]);
            data = result;
            console.log(data[0]);
            callback(data);
        }});
    connection.end();
};

exports.login=function(req, res){
  //  var sql='select u.username,u.password from user as u where username = ? and password = ?';
  //  var data=[req.param('username'),req.param('password')];


    var connection = mysql.createConnection(config);
    connection.connect();


    connection.query(sql,data,function (err,result) {
        var user=result[0];
        var response={state:false,id:'',loginid:''};
        if(user!=null){
            //req.session={id:user.id,loginid:user.loginid};
            /*set the cookie
             the maxage is the cookies's expire time
             after expire need to login again*/
            res.cookie('user_name', req.param('username'), {maxAge: 60*60*1000});
            res.cookie('islogin', 1, {maxAge: 60*60*1000});

            req.session.user = req.param('username');
            req.session.islogin = 1;
            //set the username after login
            //login_user=req.param('username');
            response.state=true;
            response.id=user.id;
            response.loginid=user.loginid;
        }
        res.json(response);
    });
    connection.end();
};
