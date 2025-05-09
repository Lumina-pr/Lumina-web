"use client";
import React from "react";
import Modal from "../molecules/ModalBase";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

interface LogOutModalProps {
    onClose: () => void;
    onConfirm: () => void;
    }

    const LogOutModal: React.FC<LogOutModalProps> = ({ onClose, onConfirm }) => {
    return (
        <Modal onClose={onClose}>
            <div className="flex flex-col items-center gap-4">
                <Title text="¿Deseas cerrar sesión?" className="text-xl text-gray-700 font-semibold" />
                <div className="flex justify-between w-full mt-4">
                <Button 
                    text="Cancelar" 
                    onClick={onClose} 
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                />
                <Button 
                    text="Cerrar sesión" 
                    onClick={onConfirm} 
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                />
                </div>
            </div>
        </Modal>
    );
};

export default LogOutModal;
