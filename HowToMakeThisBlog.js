1. Start the project with "express -e jiapei-liangs-blog" in the terminal.

2. Route Planning：

	/: main page
	/login: login page
	/register: register page
	/post: make a post page
	/login: login page
	/logout: logout action
	/archive: archive page
	/links: other interesting links page
	/u/<username>: users page
	...etc

3. Setting up the database, using mongoDB in this case

	follow the website to connect to MongoDB: https://docs.mongodb.org/getting-started/node/client/

	1) install node.js

	2) install MongoDB Node.js Driver with "npm install mongodb --save"

	3) Declare MongoClient variable and other variables
	
		add the following codes into app.js

		var MongoClient = require('mongodb').MongoClient;
		var seert = require('assert');

		var url = 'mongodb://localhost:27017/blog';
		MongoClient.connect(url, function(err, db) {
			assert.equal(null, err);
			console.log("Connected correctly to mongoDB server.");
			db.close();
		});

	4) add an add-on of mongoLab to heroku app

	5) create a database user and password 

	6) replace the 'mongodb://localhost:27017/blog'
		with 'mongodb://liangjiapei1103:12345678@ds047075.mongolab.com:47075/heroku_bp27wbjt'

// 4. add 'express-session' and 'connect-mongo' to depandencies

// 	require them in app.js as:

// 	var session = require('express-session');
// 	var MongoStore = require('connect-mongo')(session);

// 页面设计
5. create header.ejs in views folder

	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8" />
			<title>Blog</title>
			<link rel="stylesheet" href="/stylesheets/style.css">
		</head>
		<body>

		<header>
			<h1><%= title %></h1>
		</header>
		<nav>
			<span><a title="主页" href="/">home</a></span>
			<span><a title="登录" href="/login">Login</a></span>
			<span><a title="注册" href="/register">Register</a></span>
		<nav>

		<article>


6. create footer.ejs in views in folder

	</article>
	</body>
	</html>

5. edit index.ejs in viems folder 

	<%- include header %>
	这是主页
	<%- include footer %>



	