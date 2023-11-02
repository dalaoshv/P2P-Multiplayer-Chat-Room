const {sign} = require("../utils/auth");
const {db, users, online} = require("../utils/users");

/**
 * 用户登录
 * @param username
 * @param password
 * @param peerID
 */
async function user_login({username, password, peerID}) {
    // 用户名必须是3-8位汉字、英文字母、数字、下划线组成
    if(!/^[\u4E00-\u9FA5a-zA-Z0-9_]{3,8}$/.test(username)) {
        return this.emit('login', '用户名不合法！');
    }

    // 密码必须是6-9位英文字母、数字组成
    if(!/^[a-zA-Z0-9]{6,9}$/.test(password)) {
        return this.emit('login', '密码不合法！');
    }

    // 判断是否存在用户
    if(await db.exists(`/${username}`)) {
        // 用户密码不匹配
        if(password !== await db.getData(`/${username}`)) {
            return this.emit('login', '账号或密码错误！');
        }
    } else {
        // 注册新用户
        await db.push(`/${username}`, password);
    }

    // 生成Token
    const userinfo = {username, peerID};
    const token = sign(userinfo);

    // 如果已有其他设备登录
    if(online.has(username)) {
        const {id, token} = online.get(username);

        // 强制下线
        users.delete(token);
        this.io.sockets.sockets.get(id)?.disconnect(true);
    }

    // 更新在线用户数据
    users.set(token, userinfo);
    online.set(username, {id: this.id, token});

    // 返回Token
    this.emit('login', null, token);
}

module.exports = {
    user_login
}
