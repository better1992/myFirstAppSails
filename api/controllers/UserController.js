/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req, res) {
		res.view();
	},

	'create': function(req, res, next) {
		User.create(req.params.all(), function userCreated(err, user) {
			if (err) {
				req.session.flash = {
					err: err
				};
				return res.redirect('/user/new');
			};
			res.json(user);
		})
	},
	'login': function(req, res) {
		res.view();
	},
	'authorize': function(req, res) {
		
	},
	'delete': function(req, res) {
		console.log(req.params);
	}
};

