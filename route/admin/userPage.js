const {User} = require('../../model/user');

module.exports = async (req, res) => {
    req.app.locals.currentLink = 'user';

    // 页码
    const page = req.query.page || 1;
    // 每页显示的条数
    const pagesize = 2;
    // 总的条数
    const count = await User.countDocuments();
    // 计算总共应该有多少页
    const total = Math.ceil(count / pagesize);

    // skip, limit
    // 1 => 跳过 0 条，显示 2 条
    // 2 => 跳过 2 条，显示 2 条
    // 3 => 跳过 4 条，显示 2条
    const start = (page - 1) * pagesize;
    const users = await User.find().skip(start).limit(pagesize);

    res.render('admin/user',{
        username: req.session.username,
        users,
        total,
        page
    });
};