const {User} = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
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
        // ifer === $2b$10$ZeP4d790T0DDcMDaybD6gOq4R9EpgUiR1V/YHPQFIf.S0o1QLgecy
        let isValid = await bcrypt.compare(password, user.password);
        if(isValid) {
            // req.username = user.username;
            // connect-mongo: 存储 sessionID
            req.session.username = user.username;
            req.session.role = user.role;
            req.session.uid = user._id;
            // req.app.locals.userInfo = user;
            if(user.role === "admin") {
                // res.send('登录成功');
                res.redirect('/admin/user');
            } else {
                res.redirect('/home');
            }
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
};