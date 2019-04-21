var words = require('./words.json');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/', (req, res)=>{
	let data = req.body;
	if(!data)
	{
		res.sendStatus(404);
		return;
	}
		words.push(data);
		res.sendStatus(200);
})

app.get('/', (req, res)=>{
    res.send(words);
})

function listening(){
    console.log("Listening on port 3000");
}

var server = app.listen(3000, listening);
