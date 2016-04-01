var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
	name: String,
	email: {type: String, lowercase: true},
	password: {type: String, lowercase: true, minlength: 7},
	dm_id: {type: Number},
	cohort_id: {type: Number}
})

module.exports = mongoose.model('User', userSchema);