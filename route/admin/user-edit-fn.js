const Joi = require('joi');
const {User} = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async (req, res) => {
    // 定义规则
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('用户名不符合规则')),
        email: Joi.string().email().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('角色非法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    };

    try {
        await Joi.validate(req.body, schema);
    } catch(err) {
        return res.redirect(`/admin/user-edit?message=${err.message}`);
    }

    // req.body => 用户的所有信息
    const user = await User.findOne({email: req.body.email});
    console.log(user, req.body.email, 233);
    if(user) {
        // 之前的邮箱已经存在了
        return res.redirect(`/admin/user-edit?message=邮箱已经存在`);
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