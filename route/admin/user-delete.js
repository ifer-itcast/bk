const {User} = require('../../model/user');
module.exports = async (req, res, next) => {
    await User.findOneAndDelete({
        _id: req.query.id
    });

    res.redirect('/admin/user');
};