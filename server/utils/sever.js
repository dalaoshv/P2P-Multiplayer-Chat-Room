const {Server} = require("socket.io");
const {verify} = require("./auth");
const {online, users} = require("./users");

const io = new Server();
const sockets = io.sockets.sockets;

/**
 * 广播在线用户
 * @param event
 * @param data
 */
function broadcast(event, ...data) {
    online.forEach(({id, token}, username) => {
        if (verify(token)) {
            // 广播消息
            io.sockets.sockets.get(id)?.emit(event, ...data);
        } else {
            // 强制下线
            users.delete(token);
            online.delete(username);
            sockets.get(id)?.disconnect(true);
        }
    });
}

/**
 * 指定对象发送消息
 * @param id
 * @param event
 * @param data
 */
function socket_emit(id, event, ...data) {
    const socket = sockets.get(id);

    // 存在Socket
    if (socket) {
        // 强制断开连接
        if (event === 'disconnect') {
            sockets.get(id).disconnect(true);
            return;
        }

        // 给对方发送消息
        socket.emit(event, ...data);
    }
}

module.exports = {
    io,
    sockets,
    broadcast,
    socket_emit
}