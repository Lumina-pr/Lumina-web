import { useEffect } from "react";
import useSocketStore from "@/store/socketStore";
import getSocket from "@/services/socket";

const useSocket = () => {
  const socket = getSocket();
  const { setConnected, addMessage } = useSocketStore();

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
      console.log("Conectado al WebSocket");
    });

    socket.on("disconnect", () => {
      setConnected(false);
      console.log("Desconectado del WebSocket");
    });

    socket.on("esp32-001", (message) => {
      addMessage(message);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receiveMessage");
    };
  }, [socket, setConnected, addMessage]);

  const emit = <T>(event: string, data: T) => {
    socket.emit(event, data);
  };

  return {
    isConnected: useSocketStore((state) => state.isConnected),
    messages: useSocketStore((state) => state.messages),
    emit,
  };
};

export default useSocket;
