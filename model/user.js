const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const hash = require('../utils/hash');

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

async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('ifer', salt);
    await User.create({
        username: 'ifer1',
        password: hash('ifer1'),
        email: 'ifer1@qq.com',
        role: 'admin',
        state: 0
    });
}
// createUser();

module.exports = {
    // User: User
    User
};