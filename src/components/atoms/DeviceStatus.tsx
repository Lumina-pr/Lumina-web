'use client';

import React, { useState } from "react";

interface DeviceStatusProps {
    initialStatus: "Encendido" | "Apagado";
    }

    const DeviceStatus: React.FC<DeviceStatusProps> = ({ initialStatus }) => {
    const [status, setStatus] = useState<"Encendido" | "Apagado">(initialStatus);

    const toggleStatus = () => {
        setStatus(prev => (prev === "Encendido" ? "Apagado" : "Encendido"));
    };

    const statusStyle =
        status === "Encendido"
        ? "px-1 bg-green-100 text-green-700 border-green-300"
        : "px-1 bg-red-100 text-red-700 border-red-300";

    return (
        <button
            onClick={toggleStatus}
            className={`py-0.2 text-xs w-20 rounded-sm border ${statusStyle} text-center mx-auto`}
        >
            {status}
        </button>
    );
};

export default DeviceStatus;
