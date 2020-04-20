var express = require('express');
var path = require('path');
var fs = require('fs');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./server/routes');
var apiRouter = require('./server/routes/api');

var app = express();


console.log("APP ")
console.log("----\n\n\n-------------|n\n")
console.log("_dirname", __dirname);

function readDirectory(path){
    fs.readdir(path, function(err, data){
      if (err) console.log("error")
      else console.log(data)
    })
};

readDirectory(path.join(__dirname, 'public'))

console.log("----\n\n\n-------------|n\n")




app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/api', apiRouter);


//console.log(process.env)

module.exports = app;
