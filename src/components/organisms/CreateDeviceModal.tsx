import React, { useState } from "react";
import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";

interface CreateDeviceModalProps {
    onClose: () => void;
    onConfirm: (name: string) => void;
}

const CreateDeviceModal: React.FC<CreateDeviceModalProps> = ({ onClose, onConfirm }) => {
    const [name, setName] = useState("");

    return (
        <Modal onClose={onClose}>
            <div className="p-4">
                <h2 className="text-lg text-gray-400 font-semibold mb-4 text-center">Crear Dispositivo</h2>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 text-gray-400 border rounded mb-4"
                    placeholder="Nombre del dispositivo"
                />

                <div className="flex justify-center gap-4">
                    <Button
                        text="Crear"
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

export default CreateDeviceModal;
