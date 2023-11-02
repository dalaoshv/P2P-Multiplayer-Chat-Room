import {reactive, ref, watch} from "vue";
import {defineStore} from "pinia";
import {ElMessage} from "element-plus";
import {socket} from "../utils/socket";

export const useUserInfo = defineStore('auth', () => {
    const peerID = ref('');
    const username = ref('');
    const token = ref(localStorage.getItem('token'));
    const loginState = reactive({
        ready: false,
        loading: false,
        hasLogin: false,
        showLogin: false
    });

    socket.on('authorized', (data) => {
        // 更新登录状态
        username.value = data;
        loginState.loading = false;
        loginState.hasLogin = true;
        loginState.showLogin = false;
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

        // 建立新的链接
        socket.disconnect();
        socket.connect();

        token.value = data;
        sessionStorage.setItem('token', data);

        socket.emit('user-online', peerID.value);
    });

    // 强制踢下线
    socket.on('disconnect', (reason) => {
        if (reason === 'io server disconnect') {
            token.value = '';
            sessionStorage.clear();
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