var express = require('express');
var app = new express();
var mongoose = require('mongoose');
var config = require('./config/config');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var port = config.get('port');

mongoose.connect(config.get('mongoose:url'));

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use(passport.initialize());

require('./config/passport')(passport);
require('./app/routes')(app, passport);

app.listen(port);
console.log('App is listening ' + port);