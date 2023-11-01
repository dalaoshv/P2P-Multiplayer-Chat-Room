import { io } from 'socket.io-client';

const SOCKET_ROOT = 'ws://localhost:3000';
export const socket = io(`${SOCKET_ROOT}`);


