const {Article} = require('../../model/article');
const {Comment} = require('../../model/comment');

module.exports = async (req, res) => {
    const articles = await Article.findOne({
        _id: req.query.id
    }).populate('author');

    const comments = await Comment.find({
        aid: req.query.id
    }).populate('uid');
    // res.send(comments);
    res.render('home/article', {
        articles,
        comments
    });
};