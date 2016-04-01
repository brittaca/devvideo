var User = require('../models/User');

module.exports = {

	createUser: function(req, res) {
		new User(req.body).save(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	getUsers: function(req, res) {
		User.find({})
		.exec( function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		})
	},

	getUser: function(req, res) {
		User.findById(req.query.id)
		.exec( function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		})
	},

	updateUser: function(req, res) {
		User.findByIdAndUpdate(req.params.id, req.body)
		.exec( function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	deleteUser: function(req, res) {
		User.findByIdAndRemove(req.params.id)
		.exec( function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	}

}