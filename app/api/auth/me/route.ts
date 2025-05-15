import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getUserById } from "@/lib/db/users"

export async function GET(req: NextRequest) {
  try {
    // Get token from cookies
    const token = cookies().get("auth-token")?.value

    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    try {
      // Decode the token (in a real app, verify the JWT)
      const decoded = JSON.parse(Buffer.from(token, "base64").toString())

      // Get user by ID
      const user = await getUserById(decoded.id)

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }

      return NextResponse.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      })
    } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }
  } catch (error) {
    console.error("Auth check error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
