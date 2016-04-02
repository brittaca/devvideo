var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var userCtrl = require('./server/controllers/userCtrl.js');
var videoCtrl = require('./server/controllers/videoCtrl.js');
var config = require('./server/config/auth.js');
var u = require('underscore');
var port = 3022;

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(session({secret: config.sessionSecret}));

var mongoUri = "mongodb://localhost:27017/DevMountain-Vids"

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log("Up Up & Awayyy with MongoDB");
});

app.post('/api/user', userCtrl.createUser);
app.get('/api/user', userCtrl.getUser);
app.get('/api/users', userCtrl.getUsers)
// app.get('/api/currentuser', userCtrl.getCurrentUser);
app.put('/api/user/:id', userCtrl.updateUser);
app.delete('api/user/:id', userCtrl.deleteUser);


app.post('/api/ratevideo/:id', videoCtrl.rateVideo);
app.post('/api/video', videoCtrl.createVideo);
app.get('/api/video', videoCtrl.getVideo);
app.get('/api/videos', videoCtrl.getVideos);
app.get('/api/topicvideos', videoCtrl.getTopicVideos);
app.get('/api/recentvideos', videoCtrl.getMostRecentVideos);
app.put('/api/video', videoCtrl.updateVideo);

app.listen(port, function(){
	console.log('listening up on port' + port);
})