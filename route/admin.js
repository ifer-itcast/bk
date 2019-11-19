const express = require('express');
const admin = express.Router();
const {User} = require('../model/user');

admin.get('/login', (req, res) => {
    res.render('admin/login');
});

admin.get('/user', (req, res) => {
    res.render('admin/user');
});

admin.post('/login', async (req, res) => {
    const {email, password} = req.body;
    // 服务端校验
    if(email.trim().length === 0 || password.trim().length === 0) {
        res.status(400).render('admin/error', {
            msg: '用户名或密码不能为空'
        });
    }
    // 查询邮箱是否存在
    const user = await User.findOne({email});
    if(user) {
        if(user.password === password) {
            res.send('登录成功');
        } else {
            res.status(400).render('admin/error', {
                msg: '用户名或密码错误'
            }); 
        }
    } else {
        res.status(400).render('admin/error', {
            msg: '用户名/邮箱不存在'
        }); 
    }
});

module.exports = admin;