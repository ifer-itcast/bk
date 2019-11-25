const {Article} = require('../../model/article');

module.exports = async (req, res) => {
    const articles = await Article.findOne({
        _id: req.query.id
    }).populate('author');
    res.render('home/article', {
        articles
    });
};