const jwt = require('jsonwebtoken');
const secretKey = '20231101P2P-Multiplayer-Chat-Room';

/**
 * 生成Token
 * @param data
 * @return {string}
 */
const sign = (data = {}) => {
    return jwt.sign(data, secretKey, {
        expiresIn: 60 * 60 // s
    });
}

/**
 * 校验Token
 * @param token
 * @return {string}
 */
const verify = (token = '') => {
    return jwt.verify(token, secretKey,  (err, data) => {
        return err ? null : data;
    });
}

module.exports = {
    sign,
    verify
}