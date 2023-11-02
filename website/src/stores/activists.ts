import {ref} from "vue";
import {defineStore} from "pinia";
import {socket} from "../utils/socket";

/**
 * 存储和更新在线P2P端信息
 */
export const useOnlineUsers = defineStore('online-users', () => {
    // 同意建立通信的P2P端信息
    const connections = ref(new Set<string>())
    // 在线P2P端： username -> {peerID, connect}
    const onlineUsers = ref(new Map<string, string>());

    // 在线用户初始化
    socket.on('online-users', (users: { peerID: string; username: string }[]) => {
        // 更新在线用户数据
        onlineUsers.value.clear();
        users.forEach(({peerID, username}) => {
            onlineUsers.value.set(username, peerID);
        });
    });

    // 监听用户上线
    socket.on('user-online', ({username, peerID}) => {
        onlineUsers.value.set(username, peerID);
    });

    // 监听用户下线
    socket.on('user-offline', (username) => {
        onlineUsers.value.delete(username);
    });

    // 断开连接
    socket.on('disconnect', () => {
        onlineUsers.value.clear();
    });

    return {
        onlineUsers,
        connections
    }
}, {
    persist: {
        enabled: true,
        strategies: [{
            paths: ['connections'],
            storage: localStorage
        }]
    }
})