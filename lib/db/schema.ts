// This file defines the database schema for the application

export type Role = "student" | "teacher" | "hod"

export interface User {
  id: string
  name: string
  email: string
  password: string // In a real app, this would be hashed
  role: Role
  isApproved: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Student {
  id: string
  userId: string
  usn: string
  department: string
  semester: number
  batch: string
  cgpa: number
  attendance: number
  careerGoal: string
  skills: string[]
  certifications: string[]
  bio: string
  socialLinks: {
    github?: string
    linkedin?: string
    portfolio?: string
  }
}

export interface Teacher {
  id: string
  userId: string
  designation: string
  department: string
  specialization: string
  experience: number
}

export interface HOD {
  id: string
  userId: string
  department: string
  designation: string
  experience: number
}

export interface Subject {
  id: string
  code: string
  name: string
  semester: number
  department: string
  teacherId: string
}

export interface Mark {
  id: string
  studentId: string
  subjectId: string
  cie1: number
  cie2: number
  cie3: number
  semester: number
}

export interface Request {
  id: string
  type: "account" | "profile"
  status: "pending" | "approved" | "rejected"
  userId: string
  data: any // JSON data of the request
  createdAt: Date
  updatedAt: Date
  approvedBy?: string
  rejectedBy?: string
  approvedAt?: Date
  rejectedAt?: Date
}
