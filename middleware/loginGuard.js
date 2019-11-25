module.exports = (req, res, next) => {
    if(req.url !== '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        console.log(req.url, req.session.role);
        // 已经登录的普通用户也应允许访问登录页面
        if(req.url !== '/login' && req.url !== '/logout' && req.session.role === 'normal') {
            return res.redirect('/home');
        }
        next();
    }

    // 是否登陆页面
    // 是否是管理员
    // 拦截中间件放在哪里
};