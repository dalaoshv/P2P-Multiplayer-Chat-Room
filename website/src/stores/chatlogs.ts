import {defineStore} from "pinia";
import {reactive, ref, shallowRef} from "vue";

interface Chatlogs {
    content: string;
    username: string;
    timestamp: number;
}

interface ChatItem {
    [key: string]: Chatlogs[]
}

export const useChatLogs = defineStore('chatlogs', () => {
    const chatlogs = reactive<ChatItem>({});
    const connects = shallowRef<string[]>([]);
    const onlineUsersMap = ref<Map<string, string>>(new Map());

    function joinConnect(username: string) {
        connects.value.push(username);
    }

    function joinChatLogs(key: string, ...logs: Chatlogs[]) {
        // 判断是否存在对象记录
        const has = chatlogs.hasOwnProperty(key);

        if(has) {
            chatlogs[key].push(...logs);
        } else {
            chatlogs[key] = [...logs];
        }
    }

    // 更新在线P2P端信息
    function updateOnlineUsers(users: {username: string; peerID: string}[]) {

    }

    return {
        chatlogs,
        connects,
        joinConnect,
        joinChatLogs,
        onlineUsersMap,
        updateOnlineUsers
    }
}, {
    persist: {
        enabled: true,
        strategies: [{
            paths: ['chatlogs'],
            storage: localStorage
        }]
    }
})