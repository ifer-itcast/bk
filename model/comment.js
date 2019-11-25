const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    aid: {
        // 文章 ID
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    },
    uid: {
        // 用户 ID
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    time: {
        type: Date
    },
    content: {
        type: String
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    Comment
};