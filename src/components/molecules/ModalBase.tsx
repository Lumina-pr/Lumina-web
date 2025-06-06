import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-72 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-black text-xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
