import Peer from "peerjs";
import {io} from 'socket.io-client';

// SocketIO信息初始化
const SOCKET_ROOT = 'ws://localhost:3000';

export const peer = new Peer();
export const socket = io(`${SOCKET_ROOT}`, {
    auth: (cb) => {
        cb({token: localStorage.getItem('token')});
    },
    transports: ['websocket'],
    extraHeaders: {'Access-Control-Allow-Origin': '*'}
});

// PeerSever断开重连
peer.on('disconnected', () => {
    peer.reconnect();
});

// P2P断开连接，离线处理
peer.on('close', () => {
    socket.disconnect();
});

peer.on('error', () => {
    peer.reconnect();
});