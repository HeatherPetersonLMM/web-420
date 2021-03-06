/*
============================================
; Title:  API Gateway Part III
; Author: Professor Krasso 
; Date:   25 May 2018
; Modified By: Heather Peterson
; Description: Assignment 4.3
;===========================================
*/ 


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var apiCatalog = require('./routes/api-catalog');

var indexRouter = require('./routes/index');

var app = express();

mongoose.connect('mongodb://admin:admin@ds123770.mlab.com:23770/api-gateway',{
promiseLibrary: require('bluebird')
}).then (() =>console.log('connection successful'))
.catch((err) =>console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiCatalog);

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
