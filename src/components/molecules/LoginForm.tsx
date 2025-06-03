"use client";

import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Divider from "../atoms/Divider";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("StrongP@ssw0rd123");
  const { login, isLoading, error } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);

    // Verificamos si la autenticación fue exitosa
    if (useAuthStore.getState().isLoggedIn) {
      router.push("/home/dashboard");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm space-y-6 p-6 bg-white rounded-lg"
    >
      <h2 className="text-xl font-bold text-gray-700 text-center mb-10">
        ¡Bienvenido!
      </h2>

      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded text-sm">
          {error}
        </div>
      )}

      <div>
        <Label text="Correo o Teléfono" htmlFor="email" />
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
          <a href="#" className="hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>

      <Button
        text={isLoading ? "Iniciando..." : "Iniciar"}
        type="submit"
        disabled={isLoading}
        className={`w-full bg-yellow-400 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      />

      <Divider text="O inicia con otro" />

      <div className="flex justify-center gap-4">
        <FaGoogle className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
        <FaApple className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
        <FaFacebook className="text-gray-600 text-2xl cursor-pointer hover:text-gray-800" />
      </div>

      <div className="text-center text-sm text-gray-600">
        ¿Aún no tienes cuenta?{" "}
        <Link href="/register" className="text-yellow-500 hover:underline">
          Regístrate
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
