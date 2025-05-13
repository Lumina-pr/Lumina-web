'use client'

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

/**
 * Componente que sincroniza el token de sessionStorage con una cookie
 * para que el middleware de Next.js pueda verificarlo.
 */
export default function AuthSync() {
  const { token } = useAuthStore();

  useEffect(() => {
    // Si hay un token en el store, sincronizarlo con la cookie
    if (token) {
      // Establecer una cookie con el token (expira en 7 días)
      document.cookie = `auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
    } else {
      // Si no hay token, eliminar la cookie
      document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }, [token]);

  // Este componente no renderiza nada visible
  return null;
}
