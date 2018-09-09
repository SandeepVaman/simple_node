var express = require('express');
var app = express();
//Commenting to trigger build
// reply to request with "Hello World!"
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//start a server on port 80 and log its start to our console
var server = app.listen(8000, function () {

  var port = server.address().port;
  console.log('Example app listening on port ', port);

});
