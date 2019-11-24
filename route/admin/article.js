const {Article} = require('../../model/article');
module.exports = async (req,res, next) => {
    req.app.locals.currentLink = 'article';
    const articles = await Article.find().populate('author');
    res.render('admin/article', {
        articles
    });
};