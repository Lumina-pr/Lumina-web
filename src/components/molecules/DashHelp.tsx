import React from "react";
import { FaCog } from "react-icons/fa";

const HomeHelp: React.FC = () => {
    return (
        <div className="w-72 rounded-2xl bg-yellow-400 p-5 shadow-md text-white">
            <div className="flex items-center gap-2">
                <span className="text-xl"><FaCog/></span>
                <h1 className="text-lg font-semibold">Necesitas ayuda?</h1>
            </div>
            <p className="text-sm text-white/80 mt-2">Contáctanos y ten un soporte especializado</p>
            <button className="w-full bg-white text-xs text-gray-800 mt-4 py-2 rounded-lg">
                Contactar servicio
            </button>
        </div>
    );
};

export default HomeHelp;
