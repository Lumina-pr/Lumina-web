'use client';

import React, { useState } from "react";
import DeviceStatus from "../atoms/DeviceStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import ConfirmDeleteModal from "../organisms/ConfirmDeleteModal";
import EditDeviceModal from "../organisms/EditDeviceModal";

interface DeviceRowProps {
    id: number;
    name: string;
    status: "Encendido" | "Apagado";
    type: string; 
    onEditClick: () => void; 
    onDelete: () => void;
    }

    const DeviceRow: React.FC<DeviceRowProps> = ({ id, name, status, onEditClick, onDelete, type }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleDeleteClick = () => setIsDeleteModalOpen(true);
    const handleConfirmDelete = () => {
        setIsDeleteModalOpen(false);
        onDelete();
    };
    const handleCancelDelete = () => setIsDeleteModalOpen(false);

    const handleCloseEdit = () => setIsEditModalOpen(false);
    const handleConfirmEdit = () => {
        setIsEditModalOpen(false);
    };

    return (
        <div className="grid grid-cols-4 items-center px-4 py-2 border-b hover:bg-gray-50">
        <span className="flex justify-center text-sm text-gray-800">{id}</span>
        <span className="flex justify-center text-sm text-gray-800">{name}</span>
        <DeviceStatus initialStatus={status} />
        <div className="flex gap-3 justify-center">
            <button onClick={onEditClick} className="text-blue-600 hover:text-blue-800">
            <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button onClick={handleDeleteClick} className="text-red-600 hover:text-red-800">
            <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>

        {isDeleteModalOpen && (
            <ConfirmDeleteModal
            onConfirm={handleConfirmDelete}
            onClose={handleCancelDelete}
            />
        )}

        {isEditModalOpen && (
            <EditDeviceModal
            currentName={name}
            currentType={type} 
            onConfirm={handleConfirmEdit}
            onClose={handleCloseEdit}
            />
        )}
        </div>
    );
};

export default DeviceRow;