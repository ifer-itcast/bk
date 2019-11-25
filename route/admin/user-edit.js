const {User} = require('../../model/user');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'user';
    
    const {message, id} = req.query;
    if(id) {
        // 修改
        const user = await User.findOne({_id: id})
        res.render('admin/user-edit', {
            message,
            user,
            link: '/admin/user-modify?id='+id,
            button: '修改',
            username: req.session.username
        });
    } else {
        // 添加
        res.render('admin/user-edit', {
            message,
            link: '/admin/user-edit',
            button: '添加',
            username: req.session.username
        });
    }
};