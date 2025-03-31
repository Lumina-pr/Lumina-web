import React from "react";
import Imagen from "../atoms/Imagen";
import { FaLock, FaLockOpen } from "react-icons/fa";

const DashHello: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row flex-grow rounded-2xl bg-white p-4 shadow-md items-center justify-between">
            <div className="text-center md:text-left">
                <h1 className="text-xl font-bold text-gray-800">Hola, Luis!</h1>
                <p className="text-xs text-gray-500">Mira los dispositivos de tu hogar</p>
                <div className="mt-14 flex flex-col md:flex-row items-center gap-2">
                    <button className="px-10 py-1 text-xs text-gray-500 border-2 border-gray-200 rounded-lg flex items-center gap-2">
                        <FaLock /> Cerrado
                    </button>
                    <button className="px-10 py-1 text-xs bg-yellow-400 border-2 border-yellow-400 text-white rounded-lg flex items-center gap-2">
                        <FaLockOpen /> Abierto
                    </button>
                </div>
            </div>

            <Imagen
                src="/images/imagen3.jpg"
                alt="Home"
                className="w-24 h-24 md:w-32 md:h-32 mt-4 md:mt-0 ml-auto md:ml-10 lg:ml-20 xl:ml-32"
            />
        </div>
    );
};

export default DashHello;
