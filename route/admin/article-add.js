const formidable = require('formidable');
const path = require('path');
const {Article} = require('../../model/article');

module.exports = (req, res, next) => {
    const form = new formidable.IncomingForm();

    // 指定上传文件 的路径
    form.uploadDir = path.join(__dirname, '../../', 'public', 'upload');

    // 保存上传文件的后缀
    form.keepExtensions = true;

    form.parse(req, async function (err, fields, files) {
        // fields，普通的数据
        // files，文件数据
        // res.send(files);
        const {title, author, publishDate, content} = fields;
        await Article.create({
            title,
            author,
            publishDate,
            content,
            cover: files.cover.path.split('public')[1]
        });
        res.redirect('/admin/article');
    });
};