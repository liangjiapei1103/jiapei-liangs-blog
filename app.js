// require all needed modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');
var flash = require('connect-flash');


// require all needed .js
var routes = require('./routes/index');
var users = require('./routes/users');
var settings = require('./settings');

// create an instance of express
var app = express();

// view engine setup
// set folder 'views' as the place to store all the view templates
app.set('views', path.join(__dirname, 'views')); 
// set the template engine as ejs
app.set('view engine', 'ejs'); 

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// using all the needed middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// set the folder 'public' to store static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


var url = 'mongodb://liangjiapei1103:12345678@ds047075.mongolab.com:47075/heroku_bp27wbjt';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to mongoDB server.");
  db.close();
});
// mongoose.connect(url, function (error) {
//   if (error) console.error(error);
//   else console.log('mongo connected');
// });

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// app.use(session({
//   cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}, //30 days
//   resave: true,
//   saveUninitialized: true,
//   store: new MongoStore({ mongooseConnection: mongoose.connection })
// }));

// exports app to let other module to use
module.exports = app;
