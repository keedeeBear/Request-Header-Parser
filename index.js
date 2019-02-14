
//importing express
var express = require('express');
var app = express();
//initializing the project
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
//doing the grunt of the thing, still can't figure out how to fix the IP issue
app.get('/', function(req, res){
	var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
	var lan = req.headers["accept-language"].split(',')[0];
	var sw = req.headers["user-agent"].split(') ')[0].split(' (')[1];
	res.render('parser', {ipaddress: ip, language: lan, software: sw})
});


//this was for me to check which port I am in
var listener = app.listen(process.env.PORT, function(){
	console.log("The port is "+listener.address().port);
});