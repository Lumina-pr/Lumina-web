import { useEffect, useCallback } from "react";
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

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [socket, setConnected]);

  const listenToDevice = useCallback(
    (deviceId: string) => {
      // Clean up any existing listeners for this event first
      socket.off(deviceId);

      // Add new listener
      socket.on(deviceId, (message) => {
        console.log(`Message received from ${deviceId}:`, message);
        addMessage(message);
      });

      return () => {
        socket.off(deviceId);
      };
    },
    [socket, addMessage]
  );

  const emit = <T>(event: string, data: T) => {
    socket.emit(event, data);
  };

  return {
    isConnected: useSocketStore((state) => state.isConnected),
    messages: useSocketStore((state) => state.messages),
    emit,
    listenToDevice,
  };
};

export default useSocket;
