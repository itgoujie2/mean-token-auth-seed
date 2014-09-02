module.exports = function(app, passport){

	app.get('*', function(req, res){
		res.redirect('/');
	});

	app.post('/login', passport.authenticate('local'), function(req, res){
		res.json({user : req.user});
	});
};