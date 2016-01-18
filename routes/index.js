var express = require('express');
var router = express.Router();

var crypto = require('crypto'),
	User = require('../models/user.js');


module.exports = function(app) {
/* GET home page. */
	app.get('/', function (req, res, next) {
	  res.render('index', { 
	  	title: 'Jiapei Liangs Blog',
	  	user: req.session.user,
	  	success: req.flash('success').toString(),
	  	error: req.flash('error').toString()
	  });
	});

	app.get('/register', function (req, res) {
		res.render('register', {
			title: '注册',
			user: req.session.user,
	  		success: req.flash('success').toString(),
	  		error: req.flash('error').toString()
		});
	});

};



module.exports = router;
