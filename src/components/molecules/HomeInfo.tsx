import React from "react";

const HomeInfo: React.FC = () => {
    return (
        <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                LOREM IPSUM <br /> NEQUE PORRO QUI <br /> DOLOREM
            </h1>
            <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/login" className="text-yellow-400 bg-white border border-gray-300 px-6 py-2 rounded-md shadow-md hover:bg-gray-100 transition">
                    Iniciar
                </a>

                <a href="/register" className="bg-yellow-400 text-white px-6 py-2 rounded-md shadow-md hover:bg-yellow-500 transition">
                    Register
                </a>
            </div>
        </div>
    );
};

export default HomeInfo;
