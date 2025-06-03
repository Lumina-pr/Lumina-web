"use client";
import React, { useEffect } from "react";
import useSocket from "@/hooks/useSocket";
import PowerChartTemplate from "@/components/templates/PowerChartTemplate";
import { useSearchParams } from "next/navigation";

const Page: React.FC = () => {
  const searchParams = useSearchParams();
  const deviceId = searchParams.get("deviceId") || "";
  const { isConnected, messages, listenToDevice } = useSocket();

  useEffect(() => {
    if (isConnected && deviceId) {
      console.log(
        `Conectado y escuchando mensajes para el dispositivo: ${deviceId}`
      );
      listenToDevice(deviceId);
    }
  }, [isConnected, deviceId, listenToDevice]);

  return (
    <div className="container max-w-full px-6 py-8 bg-gray-100">
      <div className="mb-6 p-6 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Monitoreo en Tiempo Real
        </h1>
        <p className="text-lg text-gray-600">
          Dispositivo: <span className="font-semibold">{deviceId}</span>
        </p>
        <p className="text-lg text-gray-600">
          Estado del WebSocket:{" "}
          <span
            className={`font-semibold ${
              isConnected ? "text-green-600" : "text-red-500"
            }`}
          >
            {isConnected ? "Conectado" : "Desconectado"}
          </span>
        </p>
      </div>
      {/* Power Chart */}

      <div className="mb-8 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
          Gráfico de Potencia
        </h2>
        <PowerChartTemplate messages={messages} />
      </div>
    </div>
  );
};

export default Page;
