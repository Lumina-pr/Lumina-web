import { create } from "zustand";
import api from "@/services/api";
import axios from "axios";

interface User {
  email: string;
  // Otros campos de usuario que puedas necesitar
}

interface AuthState {
  token: string | null;
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: { name: string; email: string; password: string }) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: typeof window !== "undefined" ? sessionStorage.getItem("token") : null,
  user: null,
  isLoggedIn:
    typeof window !== "undefined" ? !!sessionStorage.getItem("token") : false,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });

      const response = await api.post("/auth/login", {
        email,
        password,
      });

      console.log(response);

      const { access_token, user } = response.data;

      // Guardar token en sessionStorage
      sessionStorage.setItem("token", access_token);

      set({
        token: access_token,
        user,
        isLoggedIn: true,
        isLoading: false,
      });
    } catch (error) {
      let errorMessage = "Error al iniciar sesión";

      if (axios.isAxiosError(error) && error.response) {
        const { data } = error.response;

        if (data.message) {
          // Si message es un array, formatéalo apropiadamente
          if (Array.isArray(data.message)) {
            errorMessage = data.message.join("\n");
          } else {
            errorMessage = data.message;
          }
        }
      }

      set({
        isLoading: false,
        error: errorMessage,
      });
    }
  },
  register: async (userData: { name: string; email: string; password: string }) => {
    try {
      set({ isLoading: true, error: null });
  
      // Llamada a la API para registrar al usuario
      const response = await api.post("/auth/register", userData);
      console.log("Respuesta de la API:", response);
      // Actualizar el estado del store con los datos del usuario registrado
      set({
        token: response.data.token,
        user: response.data.user,
        isLoggedIn: true,
        isLoading: false,
        error: null,
      });
  
      // Guardar el token en sessionStorage
      sessionStorage.setItem("token", response.data.token);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error al registrar usuario";
  
      set({isLoading: false,
        error: errorMessage,
      });
    }
  },

  logout: async () => {
    // Eliminar token de sessionStorage
    sessionStorage.removeItem("token");

    await api.post("/auth/logout");

    set({
      token: null,
      user: null,
      isLoggedIn: false,
    });
  },
}));
