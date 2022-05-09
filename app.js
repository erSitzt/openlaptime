var createError = require('http-errors');
var express = require('express'),
    bodyParser = require('body-parser');
    consign = require('consign');
    path = require('path');
    logger = require('morgan');
    cors = require('cors');

var app = express();

app.use(cors({
    origin: '*'
}));

/* Configure body-parser */
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json());


app.use(logger('dev'));

/* configure consign */
consign()
    .include('config/database.js')
    .then('app/routes')
    .then('app/controllers')
    .into(app);


module.exports = app;
