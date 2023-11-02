const {Server} = require("socket.io");
const {online, users} = require("./users");
const {verify} = require("./auth");

const io = new Server();

/**
 * 广播在线用户
 */
function broadcast(event, ...data) {
    online.forEach(({id, token}, username) => {
        if(verify(token)) {
            // 广播消息
            io.sockets.sockets.get(id)?.emit(event, ...data);
        } else {
            // 强制下线
            users.delete(token);
            online.delete(username);
            io.sockets.sockets.get(id)?.disconnect(true);
        }
    });
}

module.exports = {
    io,
    broadcast
}