'use client';

import React, { useState } from "react";
import DeviceRow from "@/components/molecules/DeviceRow";
import PageTitles from "../atoms/PageTitles";
import Button from "../atoms/Button";
import CreateDeviceModal from "../organisms/CreateDeviceModal"; 

type Device = {
    id: number;
    name: string;
    status: "Encendido" | "Apagado";
};

const DeviceTable: React.FC = () => {
    const [devices, setDevices] = useState<Device[]>([
        { id: 110, name: "Tablet", status: "Apagado" },
        { id: 221, name: "Laptop", status: "Apagado" },
        { id: 323, name: "Celular", status: "Encendido" },
    ]);
    
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const generateRandomId = () => Math.floor(100 + Math.random() * 900);
    const handleCreate = (name: string) => {
        const newDevice: Device = {
            id: generateRandomId(),
            name,
            status: "Apagado",
        };
        setDevices((prevDevices) => [...prevDevices, newDevice]);
        setIsCreateModalOpen(false);
    };

    const handleDelete = (id: number) => {
        setDevices((prevDevices) => prevDevices.filter((device) => device.id !== id));
    };

    const handleEdit = (id: number, newName: string) => {
        setDevices((prevDevices) =>
            prevDevices.map((device) =>
                device.id === id ? { ...device, name: newName } : device
            )
        );
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-black">Dispositivos</h2>
                <Button 
                    text="Nuevo +" 
                    className="bg-amber-400 text-white px-3 py-2 rounded hover:bg-yellow-500"
                    onClick={() => setIsCreateModalOpen(true)}
                />
            </div>

            <table className="min-w-full border-collapse">
                <thead>
                    <PageTitles />
                </thead>
                <tbody>
                    {devices.map((device) => (
                        <DeviceRow
                            key={device.id}
                            id={device.id}
                            name={device.name}
                            status={device.status}
                            onEdit={(newName: string) => handleEdit(device.id, newName)}
                            onDelete={() => handleDelete(device.id)}
                        />
                    ))}
                </tbody>
            </table>

            {isCreateModalOpen && (
                <CreateDeviceModal
                    onConfirm={handleCreate}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            )}
        </div>
    );
};

export default DeviceTable;
