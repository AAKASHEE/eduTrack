import type { Request } from "./schema"
import { v4 as uuidv4 } from "uuid"

// Mock database for demonstration
const requests: Request[] = []

export async function createRequest(request: Omit<Request, "id">): Promise<Request> {
  const newRequest: Request = {
    ...request,
    id: uuidv4(),
  }

  requests.push(newRequest)
  return newRequest
}

export async function getRequestById(id: string): Promise<Request | null> {
  const request = requests.find((r) => r.id === id)
  return request || null
}

export async function getPendingRequests(type?: "account" | "profile"): Promise<Request[]> {
  return requests.filter((r) => r.status === "pending" && (type ? r.type === type : true))
}

export async function approveRequest(id: string, approvedBy: string): Promise<Request | null> {
  const index = requests.findIndex((r) => r.id === id)
  if (index === -1) return null

  requests[index] = {
    ...requests[index],
    status: "approved",
    approvedBy,
    approvedAt: new Date(),
    updatedAt: new Date(),
  }

  return requests[index]
}

export async function rejectRequest(id: string, rejectedBy: string): Promise<Request | null> {
  const index = requests.findIndex((r) => r.id === id)
  if (index === -1) return null

  requests[index] = {
    ...requests[index],
    status: "rejected",
    rejectedBy,
    rejectedAt: new Date(),
    updatedAt: new Date(),
  }

  return requests[index]
}
