var User = require('../models/User');
var Video = require('../models/Video');

module.exports = {

	createVideo: function(req, res) {
		new Video(req.body).save (function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	getVideos: function(req, res) {
		Video.find({})
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	getVideo: function(req, res) {
		Video.findById(req.query.id)
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	getMostRecentVideos: function(req, res) {
		Video.find().sort({$natural:1}).limit(1)
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	},

	updateVideo: function(req, res) {
		Video.findByIdAndUpdate(req.query.id, req.body)
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	}
}