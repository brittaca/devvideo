var mongoose = require('mongoose');
var schema = mongoose.Schema;
var User = require('./User');

var videoSchema = new schema({
	lessonid: {type: Number, lowercase: true},
	subject: String,
	learningobjectivegroup: String,
	cohort: Number,
	videocollectionid: Number,
	lessontitle: String,
	date: Date,
	instructor: String,
	playlist: [{
		file: String,
		title: String,
		playlistIndex: Number,
		mediaid: Number
	}],
	topics: [String],
	ratings: [{
		stars: {type: Number, minlength: 1, maxlength: 5},
		user: {type: schema.Types.ObjectId, ref: User}
	}],
	comments: [{
		text: {type: String, required: true},
		user: {type: schema.Types.ObjectId, ref: User}
	}],
	vimeoLink: String,
	vimVideoId: String,
	currUserRating: Number
})

module.exports = mongoose.model('Video', videoSchema);