import React from "react";
import { FaCog } from "react-icons/fa";

const DashHelp: React.FC = () => {
    return (
        <div className="w-full h-full flex-grow md:w-72 rounded-2xl bg-yellow-500 p-5 shadow-md text-white">
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-semibold">¿Necesitas ayuda?</h1>
                <span className="text-sm"><FaCog/></span>
            </div>
            <p className="text-xs text-white/80 mt-2">Contáctanos y recibe <br/>soporte especializado</p>
            <button className="w-full justify-center bg-white text-xs text-gray-800 mt-5 py-2 rounded-lg flex">
                Contactar servicio
            </button>
        </div>
    );
};

export default DashHelp;
