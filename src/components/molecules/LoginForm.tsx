"use client"; 

import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Divider from "../atoms/Divider";
import { FaGoogle, FaApple, FaFacebook} from "react-icons/fa";


import Link from 'next/link';
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter(); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login con:", { email, password });
        router.push("/home/dashboard");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 p-6 bg-white rounded-lg">
            <h2 className="text-xl font-bold text-gray-700 text-center mb-10">¡Bienvenido!</h2>

            <div>
                <Label text="Correo o Teléfono" htmlFor="email"/>
                <Input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo o teléfono"
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
                <div className="text-right mt-2 text-xs text-gray-400">
                    <a href="#" className="hover:underline">¿Olvidaste tu contraseña?</a>
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
                ¿Aún no tienes cuenta? <Link href="/register" className="text-yellow-500 hover:underline">Regístrate</Link>
            </div>
        </form>
    );
};

export default LoginForm;
