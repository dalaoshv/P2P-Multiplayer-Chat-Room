import {defineStore} from "pinia";
import {useRoute} from "vue-router";
import {computed, reactive, watch, ref} from "vue";

import {useUserInfo} from "@/stores/user.ts";
import {peer, socket, connections} from "@/utils/socket.ts";

interface Chatlogs {
    type: 'it' | 'hi' | 'me';
    content: string;
    username?: string;
}

export const useP2PChatRoom = defineStore('p2p', () => {
    const user = useUserInfo();
    const active = ref(new Set<string>());
    // 在线P2P端： username -> {peerID, connect}
    const online = ref(new Map<string, string>());
    // 建立通信的P2P端信息(-1 - 待连接 | 0 - 待发送 | 1 - 待同意 | 2 - 开始通话)
    const permits = reactive<{ [key: string]: -1 | 0 | 1 | 2 }>({});
    // 聊天记录 {key(username|common): ChatLogs[]}
    const chatlogs = reactive<{ [key: string]: Chatlogs[] }>({});

    const route = useRoute();
    const currentUser = computed(() => (
        !route.params?.id || !online.value.has(route.params.id) || user.username === route.params.id ? user.username : route.params.id
    ));

    watch(() => route.params, () => {
        active.value.delete(currentUser.value);
    });

    function joinOneChatLogs(key: string, logs: Chatlogs) {
        // 判断是否存在对象记录
        const has = chatlogs.hasOwnProperty(key);

        if (has) {
            chatlogs[key].push(logs);
        } else {
            chatlogs[key] = [logs];
        }
    }

    function sendP2PMsg(username, content) {
        if(username === user.username) return;

        (username ? [connections.get(username)] : connections).forEach((conn) => {
            if(conn) conn.send({
                event: 'chat', data: {
                    content,
                    username: user.username,
                    key: username ? user.username : '@'
                }
            });
        });

        joinOneChatLogs(username || '@', {
            type: 'me',
            content: content,
            username: user.username
        });
    }

    function createPeerListener(dataConnection, username) {
        dataConnection.on('data', ({event, data}) => {
            console.log(event, data)

            // 其他用户收到消息
            if(data?.key !== '@' && username !== currentUser.value) {
                console.log(6666, username, currentUser.value)
                active.value.add(username);
            }

            // 请求聊天
            if (event === 'call') {
                if (permits[username] === 2) {
                    dataConnection.send({event: 'auth', data: 'agree'});
                    return;
                }

                permits[username] = 1;
                joinOneChatLogs(username, {
                    type: 'it',
                    content: '对方请求聊天通话，请选择同意或拒绝'
                });
            }

            // 是否建立聊天
            if (event === 'auth') {
                const isAgree = data === 'agree';
                permits[username] = isAgree ? 2 : 0;
                joinOneChatLogs(username, {
                    type: 'it',
                    content: isAgree
                        ? '对方同意了聊天请求，快开始聊天吧'
                        : '对方拒绝了你的聊天请求'
                });
            }

            // 开始进行聊天通话
            if (event === 'chat' && (permits[username] === 2 || data?.key === '@')) {
                // 聊天对象，内容，发送对象
                const {key, content, username} = data;

                // 收到全体消息
                if(data?.key === '@' && currentUser.value !== user.username) {
                    active.value.add(user.username);
                }

                joinOneChatLogs(key, {
                    content,
                    username,
                    type: 'hi'
                });
            }
        });
    }

    // Peer初始化成功
    peer.on('open', (id) => {
        user.peerID = id;
        user.loginState.ready = true;

        socket.emit('user-online', id);
    });

    // 有新加入聊天室的P2P端要求建立连接
    peer.on('connection', (dataConnection) => {
        const username = dataConnection.metadata;
        const isExisted = connections.has(username);

        if (isExisted) {
            connections.get(username).close();
            if(currentUser.value !== username) {
                active.value.add(username);
            }
        }

        dataConnection.once('open', () => {
            joinOneChatLogs(username, {
                type: 'it',
                content: isExisted ? '对方重新建立了连接' : '已与该用户建立P2P连接，等待发送聊天请求'
            });
        });

        // 保存新上线的连接
        connections.set(username, dataConnection);

        // 建立连接
        createPeerListener(dataConnection, username);
    });

    // 在线用户初始化
    socket.on('online-users', (users: { peerID: string; username: string }[]) => {
        // 更新在线用户数据
        online.value.clear();

        // 断开P2P连接
        connections.forEach((dataConnection, key) => {
            dataConnection.close();
            connections.delete(key);
        });

        // 和已在线的P2P端建立连接
        users.forEach(({peerID, username}) => {
            online.value.set(username, peerID);

            // 自己不建立通话
            if (username === user.username) return;

            // 保存所有在线用户的连接
            const dataConnection = peer.connect(peerID, {metadata: user.username});
            connections.set(username, dataConnection);

            if(permits[username] !== 2) permits[username] = 0;

            dataConnection.once('open', () => {
                joinOneChatLogs(username, {
                    type: 'it',
                    content: '已与该用户建立P2P连接，等待发送聊天请求'
                });
            });

            // 建立了连接
            createPeerListener(dataConnection, username);
        });
    });

    // 监听用户上线
    socket.on('user-online', ({username, peerID}) => {
        online.value.set(username, peerID);
    });

    // 监听用户下线
    socket.on('user-offline', (username) => {
        online.value.delete(username);

        // 关闭P2P连接
        if (connections.has(username)) {
            const dataConnection = connections.get(username);

            dataConnection.close();
            connections.delete(username);
        }
    });

    // 断开连接
    socket.on('disconnect', () => {
        online.value.clear();

        // 断开P2P连接
        connections.forEach((dataConnection, key) => {
            dataConnection.close();
            connections.delete(key);
        });
    });

    return {
        active,
        online,
        permits,
        chatlogs,
        sendP2PMsg
    }
}, {
    persist: {
        enabled: true,
        strategies: [{
            paths: ['permits', 'chatlogs']
        }]
    }
});