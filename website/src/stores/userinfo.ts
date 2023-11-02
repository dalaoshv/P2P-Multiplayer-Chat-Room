import {reactive, ref} from "vue";
import {defineStore} from "pinia";
import {ElMessage} from "element-plus";
import {peer, socket} from "../utils/socket";

export const useUserInfo = defineStore('auth', () => {
    const username = ref('');
    const token = ref(localStorage.getItem('token'));
    const loginState = reactive({
        ready: false,
        loading: false,
        hasLogin: false,
        showLogin: false
    });

    // 初始化P2P信令ID
    const peerID = ref('');
    peer.on('open', (id) => {
        peerID.value = id;
        loginState.ready = true;
    });

    socket.on('connect', () => {
        if(!token.value) return;

        socket.emit('user-online');
        socket.once('authorized', (data) => {
            // 更新登录状态
            username.value = data;
            loginState.loading = false;
            loginState.hasLogin = true;
            loginState.showLogin = false;
        });
    });

    // 监听用户登录
    socket.on('login', (error, data) => {
        loginState.loading = false;

        if (error) return ElMessage({
            type: 'error',
            message: error,
            duration: 2000,
            showClose: true
        });

        token.value = data;
        localStorage.setItem('token', data);

        // 建立新的链接
        socket.disconnect();
        socket.connect();
    });

    // 强制踢下线
    socket.on('disconnect', (reason) => {
        if (reason === 'io server disconnect') {
            token.value = '';
        }

        username.value = '';
        loginState.hasLogin = false;
    });

    // 用户登录函数
    function handleLogin(username: string, password: string) {
        loginState.loading = true;

        if (!socket.connected) socket.connect();
        socket.emit('login', {username, password, peerID: peerID.value});
    }

    return {
        token,
        peerID,
        username,
        loginState,
        handleLogin
    }
})