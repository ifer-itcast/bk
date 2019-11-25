module.exports = (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
        // 评论是否展示是根据此进行判断的
        // req.app.locals.userInfo = null;
    });
};