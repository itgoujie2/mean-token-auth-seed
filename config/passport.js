var LocalStrategy = require('passport-local').Strategy;

var User = require('../app/models/user');

module.exports = function(passport){


	passport.use(new LocalStrategy(function(username, password, done){
		User.findOne({'username' : username}, function(err, user){
			if (err) return done(err);
			if (!user) return done(null, false);
			if (!user.validPassword(password)) return done(null, false);

			return done(null, user);
		});
	}));
};