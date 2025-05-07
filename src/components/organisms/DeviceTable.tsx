'use client';

import React, { useState } from "react";
import DeviceRow from "@/components/molecules/DeviceRow";
import PageTitles from "../atoms/PageTitles";
import Button from "../atoms/Button";
import CreateDeviceModal from "../organisms/CreateDeviceModal";
import DeviceCodeModal from "../organisms/DeviceCodeModal";
import EditDeviceModal from "../organisms/EditDeviceModal";
import DeviceChartModal from "./DeviceChartModal";

type Device = {
    id: number;
    name: string;
    status: "Encendido" | "Apagado";
    type: string;
    pingStatus?: "Pong recibido" | "Error de conexión" | null;
};

const DeviceTable: React.FC = () => {
    const [devices, setDevices] = useState<Device[]>([
        { id: 110, name: "Tablet", status: "Apagado", type: "Móvil" },
        { id: 323, name: "Celular", status: "Encendido", type: "Móvil" },
    ]);

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingDevice, setEditingDevice] = useState<Device | null>(null);
    const [createdDevice, setCreatedDevice] = useState<Device | null>(null);
    const [chartDevice, setChartDevice] = useState<Device | null>(null); // Estado para el modal de gráfico

    const generateRandomId = () => Math.floor(100 + Math.random() * 900);

    const handleCreate = (name: string, type: string) => {
        const newDevice: Device = {
            id: generateRandomId(),
            name,
            status: "Encendido",
            type,
            pingStatus: null,
        };
        setDevices((prevDevices) => [...prevDevices, newDevice]);
        setIsCreateModalOpen(false);
        setCreatedDevice(newDevice);
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

    const handlePing = (id: number) => {
        const success = Math.random() > 0.3; // Simula un ping exitoso o fallido
        setDevices((prevDevices) =>
            prevDevices.map((device) =>
                device.id === id
                    ? { ...device, pingStatus: success ? "Pong recibido" : "Error de conexión" }
                    : device
            )
        );
        if (createdDevice?.id === id) {
            setCreatedDevice((prevDevice) => ({
                ...prevDevice!,
                pingStatus: success ? "Pong recibido" : "Error de conexión",
            }));
        }
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
                            onShowChart={() => setChartDevice(device)} 
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
            {createdDevice && (
                <DeviceCodeModal
                    device={createdDevice}
                    onClose={() => setCreatedDevice(null)}
                    onPing={handlePing}
                />
            )}
            {chartDevice && (
                <DeviceChartModal
                    device={chartDevice}
                    onClose={() => setChartDevice(null)} 
                />
            )}
        </div>
    );
};

export default DeviceTable;
