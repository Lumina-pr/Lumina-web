import { create } from "zustand";

interface SocketMessage {
  current: number;
  voltage: number;
  timestamp: Date;
  power?: number; // Calculated field
}

interface SocketState {
  isConnected: boolean;
  messages: SocketMessage[];
  setConnected: (isConnected: boolean) => void;
  addMessage: (message: Omit<SocketMessage, "timestamp" | "power">) => void;
}

const useSocketStore = create<SocketState>((set) => ({
  isConnected: false,
  messages: [],
  setConnected: (isConnected: boolean) => set({ isConnected }),
  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          timestamp: new Date(),
          power: message.current * message.voltage, // Calculate power (P = I × V)
        },
      ],
    })),
}));

export default useSocketStore;
