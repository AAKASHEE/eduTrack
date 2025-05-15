"use client"

import type React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Globe, Plus, X, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function StudentProfile() {
  const { toast } = useToast()
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "Python", "Data Structures"])
  const [certifications, setCertifications] = useState([
    "AWS Certified Developer",
    "Google Cloud Associate",
    "React Nanodegree",
  ])
  const [newSkill, setNewSkill] = useState("")
  const [newCertification, setNewCertification] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasPendingRequest, setHasPendingRequest] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: "John Doe",
    usn: "1CS19CS001",
    email: "john.doe@edutrack.com",
    phone: "+91 9876543210",
    department: "Computer Science",
    batch: "2019-2023",
    semester: "6",
    bio: "Computer Science student passionate about web development and AI. Looking for opportunities in software development.",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    portfolio: "johndoe.dev",
  })

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const addCertification = () => {
    if (newCertification && !certifications.includes(newCertification)) {
      setCertifications([...certifications, newCertification])
      setNewCertification("")
    }
  }

  const removeCertification = (cert: string) => {
    setCertifications(certifications.filter((c) => c !== cert))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // In a real app, you would call your API
      // const response = await fetch("/api/profile/update", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     ...formData,
      //     skills,
      //     certifications
      //   })
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Profile Update Request Submitted",
        description: "Your profile update request has been submitted and is pending approval from your teacher.",
      })

      setHasPendingRequest(true)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit profile update request",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and achievements</p>
        </div>

        {hasPendingRequest && (
          <div className="rounded-md border border-yellow-500/50 bg-yellow-500/10 p-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <div>
                <h3 className="font-medium text-yellow-500">Pending Approval</h3>
                <p className="text-sm text-yellow-500/80">
                  Your profile update request is pending approval from your teacher. You'll be notified once it's
                  approved.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your photo and personal details here</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="usn">USN</Label>
                      <Input id="usn" value={formData.usn} readOnly />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" value={formData.department} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="batch">Batch</Label>
                      <Input id="batch" value={formData.batch} readOnly />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="semester">Current Semester</Label>
                      <Input id="semester" value={formData.semester} readOnly />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Write a short bio about yourself"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add your technical and soft skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="ml-1 rounded-full">
                      <X className="h-3 w-3" />
                      <span className="sr-only">Remove {skill}</span>
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addSkill()}
                />
                <Button size="icon" onClick={addSkill}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
              <CardDescription>Add your professional certifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-900 p-2"
                  >
                    <span>{cert}</span>
                    <Button variant="ghost" size="icon" onClick={() => removeCertification(cert)}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove {cert}</span>
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Add a new certification"
                  value={newCertification}
                  onChange={(e) => setNewCertification(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addCertification()}
                />
                <Button size="icon" onClick={addCertification}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Social Profiles</CardTitle>
              <CardDescription>Connect your social media accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="github" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </Label>
                  <Input
                    id="github"
                    placeholder="github.com/username"
                    value={formData.github}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Label>
                  <Input
                    id="linkedin"
                    placeholder="linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" /> Portfolio
                  </Label>
                  <Input
                    id="portfolio"
                    placeholder="yourportfolio.com"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={handleSubmit} disabled={isSubmitting || hasPendingRequest}>
                {isSubmitting ? "Submitting..." : hasPendingRequest ? "Request Pending" : "Submit for Approval"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
