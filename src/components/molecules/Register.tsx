"use client";

import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Divider from "../atoms/Divider";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from "next/navigation";  

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    
    const router = useRouter(); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login con:", { email, password, nombre });
        router.push("/home/dashboard"); 
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 p-6  rounded-lg">
            <h2 className="text-xl font-bold text-gray-700 text-center mb-15">Crea tu cuenta</h2>

            <div>
                <Label text="Nombre completo" htmlFor="nombre"/>
                <Input
                    type="text"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <Label text="Correo electrónico" htmlFor="email"/>
                <Input
                    type="text"
                    id="email"
                    placeholder="Ingrese su correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <Label text="Contraseña" htmlFor="password" />
                <Input
                    type="password"
                    id="password"
                    placeholder="Escribe tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-left mt-1 text-xs text-gray-400">
                    <a href="#" className="hover:underline">Al menos 8 caracteres</a>
                </div>
            </div>

            <Button 
                text="Iniciar" 
                type="submit" 
                className="w-full bg-yellow-400 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition"
            />

            <Divider text="O inicia con otro" />

            <div className="flex justify-center gap-4">
                <FaGoogle className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
                <FaApple className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
                <FaFacebook className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
            </div>

            <div className="text-center text-sm text-gray-600">
                ¿Ya tienes una cuenta? <Link href="/login" className="text-yellow-500 hover:underline">Iniciar Sesión</Link>
            </div>
        </form>
    );
};

export default LoginForm;
