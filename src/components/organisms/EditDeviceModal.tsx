import React, { useState, useEffect } from "react";
import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDeviceStore } from "@/store/deviceStore";

interface EditDeviceModalProps {
  onClose: () => void;
  onConfirm: (newName: string) => void;
  currentName: string;
  deviceId?: string;
}

const EditDeviceModal: React.FC<EditDeviceModalProps> = ({
  onClose,
  onConfirm,
  currentName,
  deviceId,
}) => {
  const [name, setName] = useState(currentName);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { updateDevice } = useDeviceStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSubmit = async () => {
    // Validación básica
    if (!name.trim()) {
      setError("El nombre no puede estar vacío");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      if (deviceId) {
        // Si tenemos un ID de dispositivo, actualizamos directamente con el store
        await updateDevice(deviceId, { name });
      }

      // Siempre llamamos a onConfirm para mantener compatibilidad con la implementación anterior
      onConfirm(name);
    } catch (err) {
      console.error("Error al actualizar el dispositivo:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Error al actualizar el dispositivo"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faPenToSquare} className="text-blue-500" />
          Editar Dispositivo
        </h2>

        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError(null);
          }}
          className={`w-full px-4 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none mb-2 text-gray-700 placeholder-gray-400`}
          placeholder="Nuevo nombre del dispositivo"
          disabled={isSubmitting}
        />

        {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

        <div className="flex justify-center gap-4 mt-4">
          <Button
            text={isSubmitting ? "Guardando..." : "Guardar"}
            onClick={handleSubmit}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-blue-700"
            } transition`}
            disabled={isSubmitting}
          />
          <Button
            text="Cancelar"
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
            disabled={isSubmitting}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EditDeviceModal;
