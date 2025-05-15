"use client"

import { useState } from "react"
import { BookOpen, Lock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useAuth } from "@/lib/auth/auth-context"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const { login } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [activeRole, setActiveRole] = useState("student")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (role: string) => {
    setLoading(true)
    try {
      // Use the email and password from the form
      const loginEmail = email || `${role}@edutrack.com`
      const loginPassword = password || "password123"

      await login(loginEmail, loginPassword)
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Failed to login",
        variant: "destructive",
      })
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
          <p className="mt-1 text-sm text-gray-400">Student Profiling and Performance Dashboard</p>
        </div>

        <Tabs defaultValue="student" value={activeRole} onValueChange={setActiveRole}>
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
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${role}-password`}>Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id={`${role}-password`}
                        type="password"
                        className="pl-10"
                        defaultValue="password123"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button className="w-full" onClick={() => handleLogin(role)} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
