"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, UserCog } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function TeacherRequests() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [profileRequests, setProfileRequests] = useState([])

  // Fetch requests on component mount
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await fetch("/api/requests?type=profile")
        // const data = await response.json()
        // setProfileRequests(data.requests)

        // Mock data for demonstration
        setProfileRequests([
          {
            id: "1",
            type: "profile",
            status: "pending",
            createdAt: new Date().toISOString(),
            userId: "student1",
            data: {
              name: "John Doe",
              role: "student",
              usn: "1CS19CS001",
              changes: {
                skills: {
                  from: ["JavaScript", "React", "Node.js"],
                  to: ["JavaScript", "React", "Node.js", "Python", "Machine Learning"],
                },
                certifications: {
                  from: ["AWS Certified Developer"],
                  to: ["AWS Certified Developer", "Google Cloud Associate"],
                },
              },
            },
          },
          {
            id: "2",
            type: "profile",
            status: "pending",
            createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            userId: "student2",
            data: {
              name: "Aisha Patel",
              role: "student",
              usn: "1CS19CS005",
              changes: {
                bio: {
                  from: "Computer Science student",
                  to: "Computer Science student passionate about AI and machine learning",
                },
                socialLinks: {
                  from: {
                    github: "github.com/aishapatel",
                  },
                  to: {
                    github: "github.com/aishapatel",
                    linkedin: "linkedin.com/in/aishapatel",
                    portfolio: "aishapatel.dev",
                  },
                },
              },
            },
          },
        ])

        setLoading(false)
      } catch (error) {
        console.error("Error fetching requests:", error)
        toast({
          title: "Error",
          description: "Failed to fetch profile update requests",
          variant: "destructive",
        })
        setLoading(false)
      }
    }

    fetchRequests()
  }, [toast])

  const handleApprove = async (id: string) => {
    try {
      // In a real app, you would call your API
      // await fetch(`/api/requests/${id}/approve`, { method: "POST" })

      toast({
        title: "Request Approved",
        description: "The profile update request has been approved successfully.",
      })

      // Update local state
      setProfileRequests(profileRequests.filter((req: any) => req.id !== id))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to approve request",
        variant: "destructive",
      })
    }
  }

  const handleReject = async (id: string) => {
    try {
      // In a real app, you would call your API
      // await fetch(`/api/requests/${id}/reject`, { method: "POST" })

      toast({
        title: "Request Rejected",
        description: "The profile update request has been rejected.",
      })

      // Update local state
      setProfileRequests(profileRequests.filter((req: any) => req.id !== id))
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reject request",
        variant: "destructive",
      })
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Profile Requests</h1>
          <p className="text-muted-foreground">Review and manage student profile update requests</p>
        </div>

        <div className="space-y-4">
          {loading ? (
            <Card>
              <CardContent className="p-6 text-center">
                <p>Loading requests...</p>
              </CardContent>
            </Card>
          ) : profileRequests.length === 0 ? (
            <Card>
              <CardContent className="p-6 text-center">
                <p>No pending profile update requests</p>
              </CardContent>
            </Card>
          ) : (
            profileRequests.map((request: any) => (
              <Card key={request.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserCog className="h-5 w-5 text-muted-foreground" />
                      <CardTitle className="text-lg">Student Profile Update</CardTitle>
                    </div>
                    <Badge>{request.data.usn}</Badge>
                  </div>
                  <CardDescription>
                    Submitted by {request.data.name} on {formatDate(request.createdAt)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Requested Changes</p>
                    {Object.entries(request.data.changes).map(([field, values]: [string, any]) => (
                      <div key={field} className="rounded-md border border-gray-800 bg-gray-900/40 p-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium capitalize">{field}</p>
                        </div>
                        <div className="mt-1">
                          {field === "skills" || field === "certifications" ? (
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">From:</p>
                                <div className="flex flex-wrap gap-1">
                                  {values.from.map((item: string, index: number) => (
                                    <span
                                      key={index}
                                      className="inline-flex rounded-full bg-gray-800 px-2 py-0.5 text-xs"
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">To:</p>
                                <div className="flex flex-wrap gap-1">
                                  {values.to.map((item: string, index: number) => (
                                    <span
                                      key={index}
                                      className="inline-flex rounded-full bg-gray-800 px-2 py-0.5 text-xs"
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : field === "socialLinks" ? (
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">From:</p>
                                <div className="space-y-1">
                                  {Object.entries(values.from).map(([platform, url]: [string, any]) => (
                                    <div key={platform} className="text-xs">
                                      <span className="font-medium capitalize">{platform}:</span> {url}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">To:</p>
                                <div className="space-y-1">
                                  {Object.entries(values.to).map(([platform, url]: [string, any]) => (
                                    <div key={platform} className="text-xs">
                                      <span className="font-medium capitalize">{platform}:</span> {url}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                              <div className="text-xs">
                                <span className="text-muted-foreground">From: </span>
                                {values.from}
                              </div>
                              <div className="text-xs">
                                <span className="text-muted-foreground">To: </span>
                                {values.to}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => handleReject(request.id)} className="gap-1">
                      <XCircle className="h-4 w-4" />
                      Reject
                    </Button>
                    <Button onClick={() => handleApprove(request.id)} className="gap-1">
                      <CheckCircle className="h-4 w-4" />
                      Approve
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
