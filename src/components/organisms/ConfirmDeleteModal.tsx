import React from "react";
import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";
import TriangleIcon from '../atoms/icons/triangleIcon';
interface ConfirmDeleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ onClose, onConfirm }) => {
  return (
    <Modal onClose={onClose}>
      <div className="bg-red-600 rounded-full w-10 h-10 flex justify-center items-center mx-auto mb-4">
          <TriangleIcon  />
        </div>
      <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">¿Eliminar elemento?</h2>
      <p className="mb-6 text-sm text-gray-600 text-center">
        ¿Seguro que desea eliminar este elemento? Esta acción no se puede deshacer.
      </p>
      <div className="flex justify-center gap-4">
        <Button
          text="Eliminar"
          onClick={onConfirm}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        />
        <Button
          text="Cancelar"
          onClick={onClose}
          className="bg-gray-400 px-4 py-2 rounded hover:bg-gray-500"
        />
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
