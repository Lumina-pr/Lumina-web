'use client';

import React, { useState } from "react";
import DeviceRow from "@/components/molecules/DeviceRow";
import PageTitles from "../atoms/PageTitles";
import Button from "../atoms/Button";
import CreateDeviceModal from "../organisms/CreateDeviceModal";
import EditDeviceModal from "../organisms/EditDeviceModal";

type Device = {
    id: number;
    name: string;
    status: "Encendido" | "Apagado";
    type: string;
    };

    const DeviceTable: React.FC = () => {
    const [devices, setDevices] = useState<Device[]>([
        { id: 110, name: "Tablet", status: "Apagado", type: "Móvil" },
        { id: 323, name: "Celular", status: "Encendido", type: "Móvil" },
    ]);

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingDevice, setEditingDevice] = useState<Device | null>(null); 

    const generateRandomId = () => Math.floor(100 + Math.random() * 900);
    const handleCreate = (name: string, type: string) => {
        const newDevice: Device = {
        id: generateRandomId(),
        name,
        status: "Apagado",
        type, 
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
        setEditingDevice(null);
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
                type={device.type} 
                onEditClick={() => setEditingDevice(device)} 
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

        {editingDevice && (
            <EditDeviceModal
            currentName={editingDevice.name}
            currentType={editingDevice.type} 
            onConfirm={(newName) => handleEdit(editingDevice.id, newName)}
            onClose={() => setEditingDevice(null)}
            />
        )}
        </div>
    );
};

export default DeviceTable;