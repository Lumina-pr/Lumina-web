<<<<<<< HEAD
// import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Corrección: Usamos "token" para coincidir con el nombre de la cookie que configuramos
  const token = req.cookies.get("authToken")?.value || null;

  if (!token) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // try {
  //   // Corregir la URL y enviar el token en el header de autorización
  //   const res = await axios.post("http://127.0.0.1:3000/auth/verify");
  //   console.log("Middleware verification response:", res);

  //   if (res.status !== 200) {
  //     console.log("Middleware verification failed, redirecting to login");
  //     return NextResponse.redirect(new URL("/login", req.url));
  //   }
  // } catch (error) {
  //   console.error("Middleware verification error:", error);
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home", "/home/:path*"],
=======
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
>>>>>>> 5bf6063500ff2ac1cdbf044f8c8253c5c60d7495
};
