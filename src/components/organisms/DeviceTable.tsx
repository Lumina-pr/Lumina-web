"use client";

import React from "react";
import DeviceRow from "@/components/molecules/DeviceRow";
import PageTitles from "../atoms/PageTitles";
import Button from "../atoms/Button"; 


type Device = {
    id: number;
    name: string;
    status: "Encendido" | "Apagado";
};

const devices: Device[] = [
    { id: 110, name: "Tablet", status: "Apagado" },
    { id: 221, name: "Laptop", status: "Apagado" },
    { id: 323, name: "Celular", status: "Encendido" },
];


const DeviceTable: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-black">Dispositivos</h2>
                <Button 
                    text="Nuevo +" 
                    className="bg-amber-400 text-white px-3 py-2 rounded hover:bg-yellow-500"
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
                        onEdit={() => console.log("Edit", device.id)}
                        onDelete={() => console.log("Delete", device.id)}
                        />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeviceTable;
