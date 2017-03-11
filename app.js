var express = require('express');
var app = express();
var conf = require('./config.js');
var routes = require('./build/routes');
var ejs = require('ejs');

//set the route of the views
app.set('views','./views');
//app.set('view engine', 'jade');
//use html instead of jade template
app.engine('html', ejs.__express);
app.set('view engine', 'html');


app.use('/',routes);
//static files's routes
app.use(express.static('public'));

app.listen(conf.port, function () {
  console.log('Example app listening on port '+conf.port+'!');
});