import React, { useState } from "react";
import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";

interface EditDeviceModalProps {
    onClose: () => void;
    onConfirm: (newName: string) => void;
    currentName: string;
}

const EditDeviceModal: React.FC<EditDeviceModalProps> = ({ onClose, onConfirm, currentName }) => {
    const [name, setName] = useState(currentName);

    return (
        <Modal onClose={onClose}>
            <div className="p-4">
                <h2 className="text-lg text-gray-400 font-semibold mb-4 text-center">Editar Dispositivo</h2>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 text-gray-400 border rounded mb-4"
                    placeholder="Nuevo nombre del dispositivo"
                />

                <div className="flex justify-center gap-4">
                    <Button
                        text="Guardar"
                        onClick={() => onConfirm(name)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    />
                    <Button
                        text="Cancelar"
                        onClick={onClose}
                        className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500"
                    />
                </div>
            </div>
        </Modal>
    );
};

export default EditDeviceModal;
