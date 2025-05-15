import type { User } from "./schema"

// Mock database for demonstration
const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "student@edutrack.com",
    password: "password123", // In a real app, this would be hashed
    role: "student",
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Prof. Sarah Johnson",
    email: "teacher@edutrack.com",
    password: "password123", // In a real app, this would be hashed
    role: "teacher",
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Dr. Robert Smith",
    email: "hod@edutrack.com",
    password: "password123", // In a real app, this would be hashed
    role: "hod",
    isApproved: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = users.find((u) => u.email === email)
  return user || null
}

export async function createUser(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
  const newUser: User = {
    ...user,
    id: (users.length + 1).toString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  users.push(newUser)
  return newUser
}

export async function getUserById(id: string): Promise<User | null> {
  const user = users.find((u) => u.id === id)
  return user || null
}

export async function updateUser(id: string, data: Partial<User>): Promise<User | null> {
  const index = users.findIndex((u) => u.id === id)
  if (index === -1) return null

  users[index] = {
    ...users[index],
    ...data,
    updatedAt: new Date(),
  }

  return users[index]
}
