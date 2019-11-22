const {User} = require('../../model/user');

module.exports = async (req, res) => {
    const {message, id} = req.query;
    if(id) {
        // 修改
        const user = await User.findOne({_id: id})
        res.render('admin/user-edit', {
            message,
            user,
            link: '/admin/user-add'
        });
    } else {
        // 添加
        res.render('admin/user-edit', {
            message,
            link: '/admin/user-edit'
        });
    }
};