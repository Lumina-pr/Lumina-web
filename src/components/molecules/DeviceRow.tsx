'use client';

import React from "react";
import DeviceStatus from "../atoms/DeviceStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

interface DeviceRowProps {
    id: number;
    name: string;
    status: "Encendido" | "Apagado";
    onEdit: () => void;
    onDelete: () => void;
    }

    const DeviceRow: React.FC<DeviceRowProps> = ({ id, name, status, onEdit, onDelete }) => {

    return (
        <div className="grid grid-cols-4 items-center px-4 py-2 border-b hover:bg-gray-50">
            <span className="flex justify-center text-sm text-gray-800">{id}</span>
            <span className="flex justify-center text-sm text-gray-800">{name}</span>

            <DeviceStatus initialStatus={status}/>

            <div className="flex gap-3 justify-center">
                <button onClick={onEdit} className="text-blue-600 hover:text-blue-800">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={onDelete} className="text-red-600 hover:text-red-800">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default DeviceRow;
