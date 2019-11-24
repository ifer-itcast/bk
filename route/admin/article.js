const paganition = require('mongoose-sex-page');
const {Article} = require('../../model/article');
module.exports = async (req,res, next) => {
    let page = req.query.page || 1;
    req.app.locals.currentLink = 'article';
    const articles = await paganition(Article).find().page(page).size(2).display(4).populate('author').exec();
    // console.log(articles.display);
    // res.send(articles);
    res.render('admin/article', {
        articles
    });
};