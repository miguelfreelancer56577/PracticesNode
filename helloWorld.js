var http = require('http');
var space = space || {};

space.operation = function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World from Node.js!\n');
	console.log('Handled request');
};

// create server
http.createServer(space.operation).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080/');

