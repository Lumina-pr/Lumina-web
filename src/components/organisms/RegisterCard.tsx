import React from "react";
import Register from "../molecules/Register";
import Imagen from "../atoms/Imagen";

const RegisterScreen: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-white">
            {/* Imagen de la izquierda */}
            <div className="relative h-48 md:h-full">
                <Imagen
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=256,h=250,fit=crop/m7Vp2Wog9pIVPj6D/consejos-para-ahorrar-luz-dWxleGRbOaUb88lV.png"
                    alt="Consejos para ahorrar luz"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Formulario de la derecha */}
            <div className="flex items-center justify-center w-full p-4 md:p-8">
                <div className="w-full max-w-sm mx-auto">
                    <Register />
                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;
