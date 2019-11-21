const crypto = require('crypto');

module.exports = (con) => {
    // 加密方式
    const hmac = crypto.createHmac('sha256', 'secret-key');
    // 加密的内容
    hmac.update(con);
    // 加密的结果
    return hmac.digest('hex');
};