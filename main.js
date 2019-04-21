var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);
console.log(words);


var express = require('express');
var app = express();

var server = app.listen(3000, listening);


app.get('/', (req, res)=>{
    var writeWords = { name: "Michael", age: "20"};
    var data1 = JSON.stringify(writeWords);
    fs.appendFileSync('words.json', data1+"\n", err);
    function err(err){
        console.log('all set.');
    }
    var data2 = fs.readFileSync('words.json');
    var words2 = JSON.parse(data1);
    res.send(words2);

})
function listening(){
    console.log("Listening on port 3000");
}