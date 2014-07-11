var http = require("http");
var server = http.createServer(function (req, res) {
  res.end(JSON.stringify(process.env));
});

server.listen(process.env.PORT || 80);