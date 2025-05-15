import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { getUserByEmail } from "@/lib/db/users"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Get user by email
    const user = await getUserByEmail(email)

    // Check if user exists
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Check if user is approved
    if (!user.isApproved) {
      return NextResponse.json({ error: "Your account is pending approval" }, { status: 403 })
    }

    // Check password (in a real app, you would compare hashed passwords)
    if (user.password !== password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Create a simple token (in a real app, use a proper JWT)
    const token = Buffer.from(
      JSON.stringify({
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      }),
    ).toString("base64")

    // Set cookie
    cookies().set({
      name: "auth-token",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    })

    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Failed to login" }, { status: 500 })
  }
}
