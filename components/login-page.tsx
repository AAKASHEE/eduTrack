"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BookOpen, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleLogin = (role: string) => {
    setLoading(true)
    // Simulate login delay
    setTimeout(() => {
      router.push(`/dashboard/${role.toLowerCase()}`)
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <BookOpen className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-white">EduTrack</h1>
          <p className="mt-1 text-sm text-gray-400">Student Profiling and Performance Dashboard</p>
        </div>

        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="teacher">Teacher</TabsTrigger>
            <TabsTrigger value="hod">HOD</TabsTrigger>
          </TabsList>

          {["student", "teacher", "hod"].map((role) => (
            <TabsContent key={role} value={role}>
              <Card className="border-gray-800 bg-gray-900/60 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-xl">{role.charAt(0).toUpperCase() + role.slice(1)} Login</CardTitle>
                  <CardDescription>Enter your credentials to access your dashboard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-email`}>Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id={`${role}-email`}
                        placeholder="your.email@example.com"
                        className="pl-10"
                        defaultValue={`${role}@edutrack.com`}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-password`}>Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id={`${role}-password`} type="password" className="pl-10" defaultValue="password123" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => handleLogin(role)} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
