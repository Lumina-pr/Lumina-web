import React, { useState, useEffect } from "react";
import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";

interface CreateDeviceModalProps {
    onClose: () => void;
    onConfirm: (name: string, type: string) => void;
}

type DeviceTypeFromJSON = {
    id: number;
    type: string;
};

type DeviceTypeForSelect = {
    id: number;
    name: string;
};

const CreateDeviceModal: React.FC<CreateDeviceModalProps> = ({ onClose, onConfirm }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [deviceTypes, setDeviceTypes] = useState<DeviceTypeForSelect[]>([]);

    useEffect(() => {
        fetch("/devicesTypes.json")
            .then((res) => res.json())
            .then((data: DeviceTypeFromJSON[]) => {
                const transformedData = data.map((item) => ({
                    id: item.id,
                    name: item.type,
                }));
                setDeviceTypes(transformedData);
            })
            .catch((error) => console.error("Error cargando tipos de dispositivo:", error));
    }, []);

    return (
        <Modal onClose={onClose}>
            <div>
                <h2 className="text-2xl text-gray-800 font-semibold mb-6 text-center">Crear Dispositivo</h2>

                <div className="mb-5">
                    <label htmlFor="deviceName" className="block text-gray-700 text-sm font-bold mb-2">
                        Nombre del dispositivo
                    </label>
                    <input
                        type="text"
                        id="deviceName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
                        placeholder="Ej: Sensor de temperatura"
                    />
                </div>

                <div className="mb-7">
                    <label htmlFor="deviceType" className="block text-gray-700 text-sm font-bold mb-2">
                        Tipo de dispositivo
                    </label>
                    <select
                        id="deviceType"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 border-gray-300"
                    >
                        <option value="">Seleccione un tipo</option>
                        {deviceTypes.map((t) => (
                            <option key={t.id} value={t.name}>{t.name}</option>
                        ))}
                    </select>
                </div>

                <div className="flex justify-center gap-3">
                    <Button
                        text="Crear"
                        onClick={() => {
                            if (!name || !type) {
                                alert("Por favor complete todos los campos");
                                return;
                            }
                            onConfirm(name, type);
                        }}
                        className="bg-amber-400 text-white px-8 py-2 rounded hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <Button
                        text="Cancelar"
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                </div>
            </div>
        </Modal>
    );
};

export default CreateDeviceModal;