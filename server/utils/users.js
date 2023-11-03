const {join} = require("path");
const {JsonDB, Config} = require("node-json-db");

// 用户在线信息数据
const users = new Map();
const online = new Map();

// 连接本地JSON数据库
const db = new JsonDB(new Config(
    join(__dirname, '../config/users.json'), true, true
));


/**
 * 返回在线用户
 * @param myself
 * @return {{username: string;peerID: string}[]}
 */
function getOnlineUsers(myself) {
    // 返回的用户数组对象
    const data = [];

    // 遍历用户Map对象
    users.forEach((value) => {
        // 如果是自己，则放到最前面
        if (myself === value.username) {
            data.unshift(value);
            return;
        }

        // 将其他用户从后面插入
        data.push(value);
    });

    return data;
}

module.exports = {
    db,
    users,
    online,
    getOnlineUsers
}