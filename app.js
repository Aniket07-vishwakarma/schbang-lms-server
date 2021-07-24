const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose"); //NoSQL database
var bodyParser = require('body-parser');
var route = require("./routes/form.js");
//connection of server on port no.9000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use("/", route);

//connection of NoSQL database
mongoose.connect('mongodb://127.0.0.1/dashboard', { useUnifiedTopology: true, useNewUrlParser: true}, function(error, db){
    if(error){
        console.log(error);
    }else{
        app.listen( port, function(){
            console.log(`Example app listening at http://localhost:${port}`);
        });    
    }
});
module.exports = app;
