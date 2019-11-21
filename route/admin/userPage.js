module.exports = (req, res) => {
    res.render('admin/user',{
        username: req.session.username
    });
};