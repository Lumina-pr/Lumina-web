import React from "react";
import LoginForm from "../molecules/LoginForm";
import Imagen from "../atoms/Imagen";

const LoginScreen: React.FC = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen bg-white">
      {/* Imagen de la izquierda */}
      <div className="relative">
        <Imagen
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=256,h=250,fit=crop/m7Vp2Wog9pIVPj6D/consejos-para-ahorrar-luz-dWxleGRbOaUb88lV.png"
          alt="Consejos para ahorrar luz"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Formulario de la derecha */}
      <div className="flex items-center w-full justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;
