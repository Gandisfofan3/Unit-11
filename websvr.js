var http = require("http");
var port = 8001;
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('Hello World, my name is Rasmus Hansson');
  response.end();
});
server.listen(port);