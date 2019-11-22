const formidable = require('formidable');
const path = require('path');

module.exports = (req, res, next) => {
    const form = new formidable.IncomingForm();

    // 指定上传文件的路径
    form.uploadDir = path.join(__dirname, '../../', 'public', 'upload');

    // 保存上传文件的后缀
    form.keepExtensions = true;

    form.parse(req, function (err, fields, files) {
        // fields，普通的数据
        // files，文件数据
        // res.send(files);
    });
};