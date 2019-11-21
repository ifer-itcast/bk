// 引入 Express
const express = require('express');
// 创建服务器
const app = express();
const path = require('path');
const session = require('express-session');

const bodyParser = require('body-parser');

require('./model/connect');
// require('./model/user');

app.use(session({
    secret: 'keyboard cat',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 一天
    }
}));

app.use(bodyParser.urlencoded({extended: false}));

// 模板引擎相关配置
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

// 静态资源访问
app.use(express.static(path.join(__dirname, 'public')));

const home = require('./route/home');
const admin = require('./route/admin');

// 路由守卫，没有登录的情况下禁止访问后台界面
app.use('/admin', require('./middleware/loginGuard'));

// 前台相关的路由
app.use('/admin', admin);
// 后台相关的路由
app.use('/home', home);

app.listen(3000);