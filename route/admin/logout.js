module.exports = (req, res) => {
    req.session.destroy(function() {
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
    });
};