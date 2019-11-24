const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://ifer:ifer@localhost/blog6', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('数据库连接成功')).catch(err => {
    console.log(err, '数据库连接失败');
});