module.exports = (req,res, next) => {
    req.app.locals.currentLink = 'article';
    res.render('admin/article');
};