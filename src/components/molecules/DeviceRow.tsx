'use client';

import React, { useState } from "react";
import DeviceStatus from "../atoms/DeviceStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import ConfirmDeleteModal from "../organisms/ConfirmDeleteModal"; // Asegúrate de importar el modal

interface DeviceRowProps {
    id: number;
    name: string;
    status: "Encendido" | "Apagado";
    onEdit: () => void;
    onDelete: () => void;
    }

    const DeviceRow: React.FC<DeviceRowProps> = ({ id, name, status, onEdit, onDelete }) => {
        const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

        const handleDeleteClick = () => {
            setIsModalOpen(true); // Muestra el modal al hacer clic en el botón "Trash"
        };

        const handleConfirmDelete = () => {
            setIsModalOpen(false); // Cierra el modal
            onDelete(); // Llama a la función de eliminación
        };

        const handleCancelDelete = () => {
            setIsModalOpen(false); // Cierra el modal sin eliminar
        };
    return (
        <div className="grid grid-cols-4 items-center px-4 py-2 border-b hover:bg-gray-50">
            <span className="flex justify-center text-sm text-gray-800">{id}</span>
            <span className="flex justify-center text-sm text-gray-800">{name}</span>

            <DeviceStatus initialStatus={status}/>

            <div className="flex gap-3 justify-center">
                <button onClick={onEdit} className="text-blue-600 hover:text-blue-800">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={handleDeleteClick} className="text-red-600 hover:text-red-800">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
            {isModalOpen && (
                <ConfirmDeleteModal
                    onConfirm={handleConfirmDelete} // Acción al confirmar
                    onClose={handleCancelDelete} // Acción al cancelar
                />
            )}
        </div>
    );
};

export default DeviceRow;
