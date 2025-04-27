import React, { useState, useEffect } from "react";
import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

interface EditDeviceModalProps {
    onClose: () => void;
    onConfirm: (newName: string) => void;
    currentName: string;
    currentType: string;
}

const EditDeviceModal: React.FC<EditDeviceModalProps> = ({
    onClose,
    onConfirm,
    currentName,
    currentType,
}) => {
    const [name, setName] = useState(currentName);
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);
    return (
        <Modal onClose={onClose}>
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faPenToSquare} className="text-blue-500" />
                    Editar Dispositivo
                </h2>
                <p className="text-sm text-gray-500 text-center mb-4">
                    Tipo de dispositivo: <span className="font-medium">{currentType}</span>
                </p>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none mb-6 text-gray-700 placeholder-gray-400"
                    placeholder="Nuevo nombre del dispositivo"
                />
                <div className="flex justify-center gap-4">
                    <Button
                        text="Guardar"
                        onClick={() => onConfirm(name)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    />
                    <Button
                        text="Cancelar"
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                    />
                </div>
            </div>
        </Modal>
    );
};

export default EditDeviceModal;
