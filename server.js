var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname)));

app.listen(port, function() {
  console.log("Dragons can be found at http://localhost:" + port);
})
