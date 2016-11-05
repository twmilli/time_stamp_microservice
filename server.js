var express = require("express");

var app = express();

app.set('port', (process.env.PORT) || 8080);

app.get('/:input',function(req, res){
    var input = req.params.input;
    var unix;
    var natural;
    if (!isNaN(parseInt(input))){
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        unix = parseInt(input);
        var date = new Date(unix*1000);
        natural = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }
    else{
        var date = new Date(input);
        natural = input;
        unix = date.getTime()/1000;
    }
    var obj = {
        "unix": unix,
        "natural": natural
    }
    res.json(obj);
});

app.get('/', function(req,res){
   res.json(
       {
        "unix": null,
        "natural": null
           
       }); 
});

app.listen(app.get('port'), function(){
    console.log("Listening on port ", app.get('port'));
});