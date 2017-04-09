
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {

  fs.appendFile("temper.txt", JSON.stringify(req.query)+"\n", function(err) {

   if(err) {
        return console.log(err);

    }
    console.log("The file was saved!");
  });

  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

