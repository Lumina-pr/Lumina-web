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
};
