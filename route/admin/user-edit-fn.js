const Joi = require('joi');
const {User, validateUser} = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    // 定义规则
    try {
        // await Joi.validate(req.body, schema);
        await validateUser(req.body);
    } catch(err) {
        // return res.redirect(`/admin/user-edit?message=${err.message}`);
        return next(JSON.stringify({path: '/admin/user-edit', message: err.message}));
    }

    // req.body => 用户的所有信息
    const user = await User.findOne({email: req.body.email});
    if(user) {
        // 之前的邮箱已经存在了
        // return res.redirect(`/admin/user-edit?message=邮箱已经存在`);
        return next(JSON.stringify({path: '/admin/user-edit', message: '邮箱已经存在'}));
    } else {
        // 生成盐
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        req.body.password = password;
        // 添加用户
        await User.create(req.body);
        // 跳转到用户列表
        return res.redirect('/admin/user');
    }
};