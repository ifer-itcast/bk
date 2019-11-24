const express = require('express');

const home = express.Router();

home.get('/', require('./home/index'));

home.get('/article', require('./home/article'));

module.exports = home;