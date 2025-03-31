import React from "react";
import Imagen from "../atoms/Imagen";
import { FaLock, FaLockOpen } from "react-icons/fa";

const HomeHello: React.FC = () => {
    return (
        <div className="flex-1 rounded-2xl bg-white p-6 shadow-md flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Hola, Luis!</h1>
                <p className="text-gray-500">Mira los dispositivos de tu hogar</p>
                <div className="mt-4 flex items-center gap-2">
                    <button className="px-4 py-2 text-gray-500 border-2 border-gray-200 rounded-lg flex items-center gap-2">
                        <FaLock/> Cerrado
                    </button>
                    <button className="px-4 py-2 bg-yellow-400 text-white shadow-md rounded-lg flex items-center gap-2">
                        <FaLockOpen/> Abierto
                    </button>
                </div>
            </div>
            
            <Imagen 
                src="/images/imagen3.jpg" 
                alt="Home" 
                className="w-28 h-28 pr-2"
            />

        </div>
    );
};

export default HomeHello;
