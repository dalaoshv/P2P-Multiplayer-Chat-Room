const {verify} = require("./utils/auth");
const {io} = require("./utils/sever");
const {user_login, verifying} = require("./core/login");
const {user_online, user_offline} = require("./core/status");

function start() {
    io.on("connection", (socket) => {
        // 挂载SocketIO实例
        socket.io = io;
        socket.token = socket.handshake.auth.token;

        // 监听登录请求
        socket.on('login', user_login);

        // 有效授权用户名
        socket.username = verify(socket.token)?.username;

        // 无授权或授权失效
        if(!socket.username) return;

        // 监听用户下线
        socket.on('disconnect', user_offline);

        // 监听用户上线
        socket.once('user-online', user_online);
    });

    io.listen(3000);
}

start();