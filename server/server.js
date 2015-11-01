var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var site    = (process.env.npm_config_production) ? 'dist' : 'site';

app.use(express.static(site));
app.use(express.static('server/public'));

module.exports = server;
