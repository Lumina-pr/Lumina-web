import React from "react";


const HomeInfo: React.FC = () => {
    return (
        <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-black mb-4 leading-tight">
                LOREM IPSUM <br /> NEQUE PORRO QUI <br /> DOLOREM
            </h1>
            <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
            </p>

            <div className="flex space-x-4">

                <a href="/login" className="text-yellow-400 bg-white border border-gray-300 px-12 py-2 rounded-md shadow-md hover:bg-gray-100 transition">
                    Iniciar
                </a>

                <a href="/ruta" className="bg-yellow-400 text-white px-12 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
                    Register
                </a>
            </div>
        </div>
    );
};

export default HomeInfo;
