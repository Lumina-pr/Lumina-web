import React from "react";

const HomeInfo: React.FC = () => {
    return (
        <div className="w-full max-w-lg text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                LOREM IPSUM <br /> NEQUE PORRO QUI <br /> DOLOREM
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 max-w-[90%] md:max-w-none mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/login" className="text-yellow-400 bg-white border border-gray-300 px-6 py-2 rounded-md shadow-md hover:bg-gray-100 transition text-sm sm:text-base">
                    Iniciar
                </a>

                <a href="/register" className="bg-yellow-400 text-white px-6 py-2 rounded-md shadow-md hover:bg-yellow-500 transition text-sm sm:text-base">
                    Register
                </a>
            </div>
        </div>
    );
};

export default HomeInfo;
