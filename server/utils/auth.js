const jwt = require('jsonwebtoken');
const secretKey = '20231101P2P-Multiplayer-Chat-Room';

/**
 * 生成Token
 * @param data
 * @return {*}
 */
const sign = (data = {}) => {
    return jwt.sign(data, secretKey, {
        expiresIn: 60 * 60 // s
    });
}

/**
 * 校验Token
 * @param token
 * @return {*}
 */
const verify = (token = '') => {
    return jwt.verify(token, secretKey, function (err, data) {
        if(err) {
            return null;
        } else {
            return data;
        }
    });
}


module.exports = {
    sign,
    verify
}