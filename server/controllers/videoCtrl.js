var User = require('../models/User');
var Video = require('../models/Video');
var _ = require('underscore');

module.exports = {

	rateVideo: function(req, res) {
		Video.findByIdAndUpdate(req.params.id, 
			{$push: {
				ratings: {
					user: req.session.user,
					stars: req.query.rating
					}
				}
			})
		.exec(function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		})
	},

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

	getTopicVideos: function(req, res) {
		Video.find({topics: {$in: [req.query.topic]}})
		.exec(function(err, topicVideos) {
			if (err) {
				return res.status(500).send(err);
			} else {
				var vids =[];
				topicVideos.forEach(function (video) {
					var userRating = _.find(video.ratings, function(rating) {
						console.log(rating.user, req.session.user._id)
						return rating.user == req.session.user._id;
					})
						if (userRating) {
							console.log(userRating);
						video.currUserRating = userRating.stars;
						}
						vids.push(video);
				})
				console.log(vids)
				res.send(topicVideos);
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