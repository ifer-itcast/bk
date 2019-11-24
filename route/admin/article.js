const {Article} = require('../../model/article');
const paganation = require('mongoose-sex-page');
module.exports = async (req,res, next) => {
    req.app.locals.currentLink = 'article';
    let page = req.query.page || 1;
    const articles = await paganation(Article).find().page(page).size(2).display(5).populate('author').exec();
    res.render('admin/article', {
        articles
    });
};