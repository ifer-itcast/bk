const express = require('express');
const admin = express.Router();

admin.get('/login', require('./admin/loginPage'));

// 用户界面
admin.get('/user', require('./admin/userPage'));

admin.get('/logout', require('./admin/logout'));

admin.post('/login', require('./admin/login'));

// 新增用户界面
admin.get('/user-edit', require('./admin/user-edit'));

// 新增用户功能
admin.post('/user-edit', require('./admin/user-edit-fn'));

module.exports = admin;