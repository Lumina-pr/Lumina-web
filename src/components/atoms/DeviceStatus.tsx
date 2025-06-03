"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

interface DeviceStatusProps {
  pingStatus?: "online" | "offline" | "loading" | null;
  onPingDevice?: () => void;
}

const DeviceStatus: React.FC<DeviceStatusProps> = ({
  pingStatus,
  onPingDevice,
}) => {
  // Define button appearance based on pingStatus
  const getButtonStyle = () => {
    if (pingStatus) {
      switch (pingStatus) {
        case "online":
          return "px-1 bg-green-100 text-green-700 border-green-300";
        case "offline":
          return "px-1 bg-red-100 text-red-700 border-red-300";
        case "loading":
          return "px-1 bg-amber-100 text-amber-700 border-amber-300";
        default:
          return "px-1 bg-gray-100 text-gray-700 border-gray-300";
      }
    }
    return "px-1 bg-gray-100 text-gray-700 border-gray-300";
  };

  // Get button text based on pingStatus
  const getButtonText = () => {
    if (pingStatus) {
      switch (pingStatus) {
        case "online":
          return "Conectado";
        case "offline":
          return "Desconectado";
        case "loading":
          return "Verificando...";
        default:
          return "Desconocido";
      }
    }
    return "Desconocido";
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onPingDevice}
        disabled={pingStatus === "loading"}
        className={`py-1 text-xs w-24 rounded-sm border ${getButtonStyle()} text-center flex items-center justify-center`}
      >
        {pingStatus === "loading" && (
          <FontAwesomeIcon
            icon={faSync}
            className="animate-spin mr-1"
            size="sm"
          />
        )}
        {getButtonText()}
      </button>
    </div>
  );
};

export default DeviceStatus;
