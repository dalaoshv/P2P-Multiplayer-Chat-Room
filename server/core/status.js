const uuid = require("uuid");
const {users, online, getOnlineUsers} = require("../utils/users");
const {io, broadcast} = require("../utils/sever");

// 延迟离线任务，防止页面刷新频繁下线
const delayOfflineTask = new Map();

/**
 * 监听用户上线
 */
function user_online() {
    const userinfo = {username: this.username, peerID: uuid.v4()};

    // 用户在线
    if(online.has(this.username)) {
        const online_info = online.get(this.username);
        const {id, token} = online_info;

        // 强制下线其他客户端
        io.sockets.sockets.get(id)?.disconnect(true);

        // 用户本地刷新导致重新链接
        let timer; // 如果正在离线，重新激活上线
        if((timer = delayOfflineTask.get(this.username))) {
            clearTimeout(timer);
            delayOfflineTask.delete(this.username);
        }

        // 用户已在其他设备登录
        if(this.token !== token) {
            users.delete(token);
        }
    }

    // 更新用户信息
    users.set(this.token, userinfo);
    online.set(this.username, {id: this.id, token: this.token});

    // 广播用户上线
    broadcast('user-online', userinfo);

    // 返回用户信息和在线P2P端用户
    this.emit('authorized',
        users.get(this.token),
        getOnlineUsers(this.username)
    );
}

/**
 * 用户下线
 */
function user_offline(reason) {
    const socket_id = online.get(this.username)?.id;
    if(reason === 'server namespace disconnect') return;

    // 如果用户在线
    if(socket_id && socket_id === this.id) {
        // 七秒内无响应，广播下线信息
        delayOfflineTask.set(this.username, setTimeout(() => {
            // 广播用户下线
            broadcast('user-offline', this.username);

            // 更新用户状态
            users.delete(this.token);
            online.delete(this.username);

            console.log(this.username, '下线成功')
        }, 7 * 1000));
    }
}

module.exports = {
    user_online,
    user_offline
}