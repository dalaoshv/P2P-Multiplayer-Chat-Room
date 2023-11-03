import {io} from 'socket.io-client';
import Peer, {DataConnection} from "peerjs";

// SocketIO信息初始化
const SOCKET_ROOT = 'ws://localhost:3000';
export const connections = new Map<string, DataConnection>();

// P2P Peer对象
export const peer = new Peer();
export const socket = io(`${SOCKET_ROOT}`, {
    auth: (cb) => {
        cb({token: sessionStorage.getItem('token')});
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
    if(peer.disconnected) peer.reconnect();
});