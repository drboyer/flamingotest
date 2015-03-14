var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var app = express()

// config body parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

app.get('/', function(req, res) {
	res.send("Hello World");
})

app.post('/posttest', function(req, res) {
	console.log('received POST command');
	// get POST parameters
	res.json(req.body);
})

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening att http://%s:%s', host, port)
})
