// 引入 Express
const express = require('express');
// 创建服务器
const app = express();

const home = require('./route/home');
const admin = require('./route/admin');

// 前台相关的路由
app.use('/admin', admin);
// 后台相关的路由
app.use('/home', home);

app.listen(3000);