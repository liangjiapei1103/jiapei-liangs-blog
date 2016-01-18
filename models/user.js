var crypto = require('crypto');
var monngose = require('mongoose');
var url = 'mongodb://liangjiapei1103:12345678@ds047075.mongolab.com:47075/heroku_bp27wbjt';
mongoose.connect(url, function (error) {
  if (error) console.error(error);
  else console.log('mongo connected');
});

var userSchema = new mongoose.Schema({
	name: String,
	password: String,
	email: String,
	// head: String
}, {
	collection: 'users'
});

var userModel = mongoose.model('User', userSchema);

function User(user) {
	this.name = user.name;
	this.password = user.password;
	this.email = user.email;
};

User.prototype.save = function(callback) {
	// var md5 = crypto.createHash('md5'),
	// 	email_MD5 = md5.update(this.email.toLowerCase()).digest('hex'),
	// 	head = "http://www.gravatar.com/avatar/" + email_MD5 + "?s=48";
	var user = {
		name = this.name;
		this.password = user.password;
		this.email = user.email;
	};

	var newUser = new userModel(user);

	newUser.save(function (err, user) {
		if (err) {
			return callback(err);
		}
		callback(null, user);
	});
};

User.get = function (name, callback) {
	userMode.findOne({name: name}, function (err, user) {
		if (err) {
			return callback(err);
		}
		callback(null, user);
	});
};

module.exports = User;