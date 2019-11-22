const {
    User
} = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async (req, res, next) => {
    const {
        id
    } = req.query;
    const {
        username,
        email,
        role,
        state,
        password
    } = req.body;

    let findUser = await User.findOne({
        _id: id
    });

    let isValid = await bcrypt.compare(password, findUser.password)
    if (isValid) {
        // 允许修改
        // res.send('ok');
        await User.updateOne({
            _id: id
        }, {
            username,
            email,
            role,
            state
        });
        res.redirect('/admin/user');
    } else {
        // 密码传入错误，不允许修改
        let obj = {
            path: 'user-edit',
            message: '密码传入错误，不允许修改',
            id
        };
        next(JSON.stringify(obj));
    }
};