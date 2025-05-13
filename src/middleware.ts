import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Comprobar si la ruta comienza con /home
  const isHomeRoute = request.nextUrl.pathname.startsWith('/home');
  
  // En lugar de modificar el authStore, usamos una cookie específica para el middleware
  // Esta cookie será creada por el client-side JavaScript
  const authCookie = request.cookies.get('auth-token')?.value;
  
  // Si es una ruta protegida y no hay cookie de autenticación, redirigir al login
  if (isHomeRoute && !authCookie) {
    const url = new URL('/login', request.url);
    // Guardar la URL a la que intentaba acceder para redirigir después del login
    url.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  
  // Si hay cookie de autenticación pero estamos en login o registro, redirigir a /home
  if (authCookie && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    const url = new URL('/home', request.url);
    return NextResponse.redirect(url);
  }
  
  // Continuar con la solicitud normal
  return NextResponse.next();
}

// Configurar para que el middleware solo se ejecute en estas rutas
export const config = {
  matcher: ['/home/:path*', '/login', '/register'],
};
