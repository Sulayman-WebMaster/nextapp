import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "@/app/auth"

export async function middleware(request: NextRequest) {
  try {
    const session = await auth()
    
    // Protect dashboard routes
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      if (!session) {
        return NextResponse.redirect(new URL("/login", request.url))
      }
    }

    // Redirect logged-in users away from auth pages
    if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup") {
      if (session) {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
    }

    return NextResponse.next()
  } catch (error) {
    console.error("Middleware error:", error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}