import Image from "next/image";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <Image
            src="/next.svg"
            alt="Logo"
            width={100}
            height={50}
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Iniciar Sesión
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Correo Electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-500"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-gray-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          ¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
