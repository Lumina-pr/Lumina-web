import React, { useState } from "react";
import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";

interface CreateDeviceModalProps {
  onClose: () => void;
  onConfirm: (name: string) => void;
}

const CreateDeviceModal: React.FC<CreateDeviceModalProps> = ({
  onClose,
  onConfirm,
}) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = () => {
    // Validate name
    if (!name.trim()) {
      setNameError("El nombre del dispositivo es requerido");
      return;
    }

    // Clear any previous errors and submit
    setNameError("");
    onConfirm(name);
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <h2 className="text-2xl text-gray-800 font-semibold mb-6 text-center">
          Crear Dispositivo
        </h2>

        <div className="mb-5">
          <label
            htmlFor="deviceName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Nombre del dispositivo
          </label>
          <input
            type="text"
            id="deviceName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (nameError) setNameError("");
            }}
            className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              nameError ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Ej: Sensor de temperatura"
          />
          {nameError && (
            <p className="text-red-500 text-xs italic mt-1">{nameError}</p>
          )}
        </div>

        <div className="flex justify-center gap-3">
          <Button
            text="Crear"
            onClick={handleSubmit}
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
