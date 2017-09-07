


var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set static path

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000,function(){
	console.log("server started");
})