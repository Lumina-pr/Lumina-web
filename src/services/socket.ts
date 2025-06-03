import { io, Socket } from "socket.io-client";

let socket: Socket;

const getSocket = () => {
  if (!socket) {
    socket = io("ws://localhost:3001/"); // Reemplaza con la URL de tu servidor
  }
  return socket;
};

export default getSocket;
