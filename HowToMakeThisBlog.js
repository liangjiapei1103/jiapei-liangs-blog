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

	