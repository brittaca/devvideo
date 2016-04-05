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
						return rating.user == req.session.user._id;
					})
						if (userRating) {
						video.currUserRating = userRating.stars;
						}
						vids.push(video);
				})
				res.send(topicVideos);
			}
		});
	},

	getInstructorVideos: function(req, res) {
		Video.find({instructor: (req.query.instructor)})
		.exec(function(err, instructorVideos) {
			if (err) {
				return res.status(500).send(err);
			} else {
				var vids = [];
				instructorVideos.forEach(function (video) {
					var userRating = _.find(video.ratings, function(rating) {
						return rating.user == req.session.user._id;
					})
						if (userRating) {
							video.currUserRating = userRating.stars;
						}
						vids.push(video);
				})
				res.send(instructorVideos);
			}
		})
	},

	getCohortVideos: function(req, res) {
		Video.find({cohort: (req.query.cohort)})
		.exec(function(err, cohortVideos) {
			console.log(cohortVideos);
			if (err) {
				return res.status(500).send(err);
			} else {
				var vids = [];
				cohortVideos.forEach(function (video) {
					var userRating = _.find(video.ratings, function(rating) {
						return rating.user == req.session.user._id;
					})
						if (userRating) {
							video.currUserRating = userRating.stars;
						}
						vids.push(video);
				})
				res.send(vids);
			}
		})
	},

	getTopRatedVideos: function(req, res) {
		Video.find({})
		.exec(function(err, videos) {
			if (err) {
				return res.status(500).send(err);
			} else {
				var vids = [];
				videos.forEach(function (video) {
					var sum = 0;
					for (var i = 0; i < video.ratings.length; i++) {
						sum = sum + video.ratings[i].stars;
					}
						if (sum/video.ratings.length >= 4) {
							vids.push(video);
						}
						vids.forEach(function(vid){
							var userRating = _.find(video.ratings, function(rating) {
							return rating.user == req.session.user._id;
							})
								if (userRating) {
								video.currUserRating = userRating.stars;
								}	
						})
				})
				res.send(vids);
			}
		})
	},

	getUserRatedVideos: function(req, res) {
		Video.find({})
		.exec(function(err, videos) {
			if (err) {
				return res.status(500).send(err);
			} else {
				var userVids =[];
				videos.forEach(function (video) {
					var userRating = _.find(video.ratings, function(rating) {
						return rating.user == req.session.user._id;
					})
						if (userRating) {
						video.currUserRating = userRating.stars;
						userVids.push(video);
						}
				})
				res.send(userVids);
			}
		});
	},

	getAllVideos: function(req, res) {
		Video.find({})
		.exec(function(err, videos) {
			if (err) {
				return res.status(500).send(err);
			} else {
				videos.forEach(function (video) {
					var userRating = _.find(video.ratings, function(rating) {
						return rating.user == req.session.user._id;
					})
						if (userRating) {
						video.currUserRating = userRating.stars;
						}
				})
				res.send(videos);
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
		Video.find().sort({$natural:1}).limit(5)
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
	},

	deleteVideo: function(req, res) {
		Video.findByIdAndRemove(req.params.id)
		.exec( function(err, result) {
			if (err) {
				return res.status(500).send(err);
			} else {
				res.send(result);
			}
		});
	}
}