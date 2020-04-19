var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var clientRouter = require('./server/routes/client');
var apiRouter = require('./server/routes/api');

var app = express();

//------Webpack ---------------------
// Step 1
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

// Step 2: Attach the dev middleware to the compiler & the server
app.use(require("webpack-dev-middleware")(compiler, {
    //log: console.log,
    logLevel: 'warn', 
    publicPath: webpackConfig.output.publicPath
}));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, 
    path: '/__webpack_hmr', heartbeat: 10 * 1000
}));
/////////////////////////////////////////////////////

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'html');

app.use('/', clientRouter);
app.use('/api', apiRouter);


//console.log(process.env)

module.exports = app;
