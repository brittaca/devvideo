var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('session');
var userCtrl = require('./server/controllers/userCtrl.js');
var videoCtrl = require('./server/controllers/videoCtrl.js');
var port = 3022;

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

var mongoUri = "mongodb://localhost:27017/DevMountain-Vids"

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log("Up Up & Awayyy with MongoDB");
});

app.post('/api/user', userCtrl.createUser);
app.get('/api/user', userCtrl.getUser);
app.get('/api/users', userCtrl.getUsers)
app.put('/api/user/:id', userCtrl.updateUser);
app.delete('api/user/:id', userCtrl.deleteUser);

app.post('/api/video', videoCtrl.createVideo);
app.get('/api/video', videoCtrl.getVideo);
app.get('/api/videos', videoCtrl.getVideos);
app.get('/api/recentvideos', videoCtrl.getMostRecentVideos);
app.put('/api/video', videoCtrl.updateVideo);

app.listen(port, function(){
	console.log('listening up on port' + port);
})