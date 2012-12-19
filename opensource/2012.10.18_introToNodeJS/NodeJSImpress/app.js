var express = require('express');
var hbs = require('hbs');
var path = require('path');
var fs = require('fs');

var app = express();

// Some basic express application settings

app.configure(function(){
	app.set('port', process.env.PORT || 1337);
	app.set('views', __dirname + '/views');
	app.engine('.html', hbs.__express);
	app.set('view engine', 'html');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use('/static', express.static(path.join(__dirname, 'public'), {maxAge:86400000}));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

// Views

app.get('/', function(req, res) {
	res.sendfile('views/nodejs-impress.html');
});

// Async vs Sync Examples

app.get('/bad_sync_example', function(req, res) {
	var data;
	fs.readFile('./data.json', function (err, content) {
		if (err) throw err;
		data = content;
	});
	res.send('bad_sync_example = ' + data);
});

app.get('/good_sync_example', function(req, res) {
	var data = fs.readFileSync('./data.json');
	res.send('good_sync_example = ' + data);
});

app.get('/async_example', function(req, res) {
	fs.readFile('./data.json', function (err, content) {
		if (err) throw err;
		res.send('async_example = ' + content);
	});
});

// Template Example

app.get('/template_example', function(req, res) {
	fs.readFile('./data.json', function (err, content) {
		if (err) throw err;
		data = JSON.parse(content.toString());
		data.title = "Template Example";
		res.render('render-data', data);
	});
});

// Start Server

app.listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});