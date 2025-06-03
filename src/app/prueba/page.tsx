"use client";
import React, { useEffect } from "react";
import useSocket from "@/hooks/useSocket";
import PowerChart from "./PowerChart";

const Page: React.FC = () => {
  const { isConnected, messages, emit } = useSocket();

  useEffect(() => {
    if (isConnected) {
      console.log("Conectado y escuchando mensajes.");
    }
  }, [isConnected, emit]);

  return (
    <div className="container max-w-full px-6 py-8 bg-gray-100">
      <div className="mb-6 p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Monitoreo en Tiempo Real</h1>
        <p className="text-lg text-gray-600">
          Estado del WebSocket:{" "}
          <span className={`font-semibold ${isConnected ? "text-green-600" : "text-red-500"}`}>
            {isConnected ? "Conectado" : "Desconectado"}
          </span>
        </p>
      </div>
            {/* Power Chart */}


      <div className="mb-8 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Gráfico de Potencia</h2>
        <PowerChart messages={messages} />
      </div>

    </div>
  );
};

export default Page;
