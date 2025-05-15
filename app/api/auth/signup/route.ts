import { type NextRequest, NextResponse } from "next/server"
import { createRequest } from "@/lib/db/requests"
import { v4 as uuidv4 } from "uuid"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, password, role, usn, department, semester, batch } = body

    // Validate required fields
    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // For student role, validate additional fields
    if (role === "student" && (!usn || !department || !semester || !batch)) {
      return NextResponse.json({ error: "Missing required student fields" }, { status: 400 })
    }

    // Check if email already exists
    // In a real app, you would check against your database
    // const existingUser = await db.user.findUnique({ where: { email } })
    // if (existingUser) {
    //   return NextResponse.json(
    //     { error: "Email already in use" },
    //     { status: 400 }
    //   )
    // }

    // Create a new account request
    const requestId = uuidv4()
    const request = await createRequest({
      id: requestId,
      type: "account",
      status: "pending",
      userId: null, // No user ID yet as the user doesn't exist
      data: {
        name,
        email,
        password, // In a real app, you would hash this
        role,
        usn,
        department,
        semester,
        batch,
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      message: "Account request submitted successfully. Waiting for HOD approval.",
      requestId,
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Failed to create account request" }, { status: 500 })
  }
}
