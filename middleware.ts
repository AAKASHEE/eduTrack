import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  // Skip authentication for login, signup, and public pages
  if (
    request.nextUrl.pathname.startsWith("/api/auth") ||
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/signup"
  ) {
    return NextResponse.next()
  }

  // Get token from cookies
  const token = request.cookies.get("auth-token")?.value

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  try {
    // For simplicity, we'll just check if the token exists
    // In a real app, you would verify the token properly
    // We'll handle role-based access in the components instead

    return NextResponse.next()
  } catch (error) {
    // Invalid token, redirect to login
    return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
