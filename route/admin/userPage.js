const {User} = require('../../model/user');
module.exports = async (req, res) => {
    const users = await User.find();
    res.render('admin/user',{
        username: req.session.username,
        users
    });
};