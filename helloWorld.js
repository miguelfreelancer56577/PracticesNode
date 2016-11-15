//dependencies
var http = require('http');
var url = require('url');

var space = space || {};

space.operation = function (request, response) {
	var url_parts = url.parse(request.url, true);
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello ' + url_parts.query.name);
	console.log('Handled request');
};

space.run = function(){
	// create server
	http.createServer(this.operation).listen(8080, 'localhost');
	console.log('Server running at http://localhost:8080/');
};

//space.start();
exports.start = space;
