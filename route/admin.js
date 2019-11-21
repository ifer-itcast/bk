const express = require('express');
const admin = express.Router();

admin.get('/login', require('./admin/loginPage'));

admin.get('/user', require('./admin/userPage'));

admin.get('/logout', require('./admin/logout'));

admin.post('/login', require('./admin/login'));

module.exports = admin;