module.exports = (req, res, next) => {
    if(req.url !== '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        if(req.session.role === 'normal') {
            return res.redirect('/home');
        }
        next();
    }
};