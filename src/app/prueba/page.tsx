"use client";
import React, { useEffect } from "react";
import useSocket from "@/hooks/useSocket";
import PowerChart from "./PowerChart";

const Page: React.FC = () => {
  const { isConnected, messages, emit } = useSocket();

  useEffect(() => {
    if (isConnected) {
      console.log(`Conectado y escuchando mensajes.`);
    }
  }, [isConnected, emit]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Estado del WebSocket: {isConnected ? "Conectado" : "Desconectado"}
      </h1>

      {/* Power Chart */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Gráfico de Potencia</h2>
        <PowerChart messages={messages} />
      </div>

      {/* Messages List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Mensajes Recibidos</h2>
        <ul className="border rounded p-4 ">
          {messages.map((msg, index) => (
            <li key={index} className="mb-1">
              {JSON.stringify(msg)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
