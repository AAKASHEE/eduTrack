"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BookOpen, Lock, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  // Form state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("student")

  // Student-specific fields
  const [usn, setUsn] = useState("")
  const [department, setDepartment] = useState("")
  const [semester, setSemester] = useState("")
  const [batch, setBatch] = useState("")

  // Teacher-specific fields
  const [designation, setDesignation] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [experience, setExperience] = useState("")

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    // Validate role-specific fields
    if (role === "student" && (!usn || !department || !semester || !batch)) {
      toast({
        title: "Error",
        description: "Please fill in all student details",
        variant: "destructive",
      })
      return
    }

    if ((role === "teacher" || role === "hod") && (!designation || !department || !specialization || !experience)) {
      toast({
        title: "Error",
        description: `Please fill in all ${role} details`,
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      // Create request payload based on role
      const payload = {
        name,
        email,
        password,
        role,
        ...(role === "student" && {
          usn,
          department,
          semester: Number.parseInt(semester),
          batch,
        }),
        ...(role === "teacher" || role === "hod"
          ? {
              designation,
              department,
              specialization,
              experience: Number.parseInt(experience),
            }
          : {}),
      }

      // Send signup request
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create account")
      }

      // Show success message
      toast({
        title: "Account Request Submitted",
        description: "Your account request has been submitted and is pending approval from the HOD.",
      })

      // Redirect to login page
      router.push("/")
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create account",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <BookOpen className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white">EduTrack</h1>
          <p className="mt-1 text-sm text-gray-400">Create your account</p>
        </div>

        <Tabs defaultValue="student" onValueChange={setRole}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="teacher">Teacher</TabsTrigger>
            <TabsTrigger value="hod">HOD</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSignup}>
            <Card className="mt-4 border-gray-800 bg-gray-900/60 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl">{role.charAt(0).toUpperCase() + role.slice(1)} Registration</CardTitle>
                <CardDescription>Create your account to access the {role} dashboard</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Common fields */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="pl-10"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirm-password"
                        type="password"
                        className="pl-10"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Role-specific fields */}
                {role === "student" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="usn">USN (University Seat Number)</Label>
                      <Input
                        id="usn"
                        placeholder="e.g., 1CS19CS001"
                        value={usn}
                        onChange={(e) => setUsn(e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select value={department} onValueChange={setDepartment} required>
                          <SelectTrigger id="department">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Computer Science">Computer Science</SelectItem>
                            <SelectItem value="Information Science">Information Science</SelectItem>
                            <SelectItem value="Electronics">Electronics</SelectItem>
                            <SelectItem value="Mechanical">Mechanical</SelectItem>
                            <SelectItem value="Civil">Civil</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="semester">Semester</Label>
                        <Select value={semester} onValueChange={setSemester} required>
                          <SelectTrigger id="semester">
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                              <SelectItem key={sem} value={sem.toString()}>
                                Semester {sem}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="batch">Batch</Label>
                      <Select value={batch} onValueChange={setBatch} required>
                        <SelectTrigger id="batch">
                          <SelectValue placeholder="Select batch" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2019-2023">2019-2023</SelectItem>
                          <SelectItem value="2020-2024">2020-2024</SelectItem>
                          <SelectItem value="2021-2025">2021-2025</SelectItem>
                          <SelectItem value="2022-2026">2022-2026</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {(role === "teacher" || role === "hod") && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation</Label>
                      <Select value={designation} onValueChange={setDesignation} required>
                        <SelectTrigger id="designation">
                          <SelectValue placeholder="Select designation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Assistant Professor">Assistant Professor</SelectItem>
                          <SelectItem value="Associate Professor">Associate Professor</SelectItem>
                          <SelectItem value="Professor">Professor</SelectItem>
                          {role === "hod" && <SelectItem value="Head of Department">Head of Department</SelectItem>}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select value={department} onValueChange={setDepartment} required>
                        <SelectTrigger id="department">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Computer Science">Computer Science</SelectItem>
                          <SelectItem value="Information Science">Information Science</SelectItem>
                          <SelectItem value="Electronics">Electronics</SelectItem>
                          <SelectItem value="Mechanical">Mechanical</SelectItem>
                          <SelectItem value="Civil">Civil</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="specialization">Specialization</Label>
                        <Input
                          id="specialization"
                          placeholder="e.g., Machine Learning"
                          value={specialization}
                          onChange={(e) => setSpecialization(e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience (years)</Label>
                        <Input
                          id="experience"
                          type="number"
                          min="0"
                          placeholder="Years of experience"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full" type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Register"}
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/" className="text-primary hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </form>
        </Tabs>
      </div>
    </div>
  )
}
