const mongoose = require('mongoose');

// 规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, // undefined、null
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        unique: true // 保证邮箱唯一
    },
    password: {
        type: String,
        required: true
    },
    role: {
        // admin
        // normal
        type: String,
        required: true
    },
    state: {
        type: Number,
        default: 0 // 0 => 启用，1 => 禁用
    }
});

// 集合
const User = mongoose.model('User', userSchema);

// User.create({
//     username: 'ifer',
//     password: 'ifer',
//     email: 'ifer@qq.com',
//     role: 'admin',
//     state: 0
// }).then(doc => {
//     console.log(doc, '创建成功');
// });

module.exports = {
    // User: User
    User
};