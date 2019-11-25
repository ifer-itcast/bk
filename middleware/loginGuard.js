module.exports = (req, res, next) => {
    if(req.url !== '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        // 已经登录的普通用户也应允许访问登录页面
        if(req.url !== '/login' && req.session.role === 'normal') {
            return res.redirect('/home');
        }
        next();
    }
};