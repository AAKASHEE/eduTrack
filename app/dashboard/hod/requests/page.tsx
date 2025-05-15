"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, User, UserCog } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function HodRequests() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [accountRequests, setAccountRequests] = useState([])
  const [profileRequests, setProfileRequests] = useState([])

  // Fetch requests on component mount
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        // In a real app, you would fetch from your API
        // const response = await fetch("/api/requests?type=account")
        // const data = await response.json()
        // setAccountRequests(data.requests)

        // Mock data for demonstration
        setAccountRequests([
          {
            id: "1",
            type: "account",
            status: "pending",
            createdAt: new Date().toISOString(),
            data: {
              name: "Jane Smith",
              email: "jane.smith@example.com",
              role: "student",
              usn: "1CS20CS010",
              department: "Computer Science",
              semester: 4,
              batch: "2020-2024",
            },
          },
          {
            id: "2",
            type: "account",
            status: "pending",
            createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
            data: {
              name: "Michael Johnson",
              email: "michael.johnson@example.com",
              role: "teacher",
              designation: "Assistant Professor",
              department: "Computer Science",
              specialization: "Artificial Intelligence",
              experience: 3,
            },
          },
        ])

        setProfileRequests([
          {
            id: "3",
            type: "profile",
            status: "pending",
            createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
            userId: "user123",
            data: {
              name: "Alex Chen",
              role: "teacher",
              changes: {
                designation: {
                  from: "Assistant Professor",
                  to: "Associate Professor",
                },
                experience: {
                  from: 3,
                  to: 5,
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
          description: "Failed to fetch requests",
          variant: "destructive",
        })
        setLoading(false)
      }
    }

    fetchRequests()
  }, [toast])

  const handleApprove = async (id: string, type: string) => {
    try {
      // In a real app, you would call your API
      // await fetch(`/api/requests/${id}/approve`, { method: "POST" })

      toast({
        title: "Request Approved",
        description: `The ${type} request has been approved successfully.`,
      })

      // Update local state
      if (type === "account") {
        setAccountRequests(accountRequests.filter((req: any) => req.id !== id))
      } else {
        setProfileRequests(profileRequests.filter((req: any) => req.id !== id))
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to approve request",
        variant: "destructive",
      })
    }
  }

  const handleReject = async (id: string, type: string) => {
    try {
      // In a real app, you would call your API
      // await fetch(`/api/requests/${id}/reject`, { method: "POST" })

      toast({
        title: "Request Rejected",
        description: `The ${type} request has been rejected.`,
      })

      // Update local state
      if (type === "account") {
        setAccountRequests(accountRequests.filter((req: any) => req.id !== id))
      } else {
        setProfileRequests(profileRequests.filter((req: any) => req.id !== id))
      }
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
    <DashboardLayout role="hod">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Pending Requests</h1>
          <p className="text-muted-foreground">Review and manage account and profile update requests</p>
        </div>

        <Tabs defaultValue="account">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">
              Account Requests
              {accountRequests.length > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {accountRequests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="profile">
              Profile Updates
              {profileRequests.length > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {profileRequests.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            {loading ? (
              <Card>
                <CardContent className="p-6 text-center">
                  <p>Loading requests...</p>
                </CardContent>
              </Card>
            ) : accountRequests.length === 0 ? (
              <Card>
                <CardContent className="p-6 text-center">
                  <p>No pending account requests</p>
                </CardContent>
              </Card>
            ) : (
              accountRequests.map((request: any) => (
                <Card key={request.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <CardTitle className="text-lg">New {request.data.role} Account</CardTitle>
                      </div>
                      <Badge>{request.data.role}</Badge>
                    </div>
                    <CardDescription>Submitted on {formatDate(request.createdAt)}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium">Name</p>
                        <p className="text-sm text-muted-foreground">{request.data.name}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">{request.data.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Department</p>
                        <p className="text-sm text-muted-foreground">{request.data.department}</p>
                      </div>

                      {request.data.role === "student" ? (
                        <>
                          <div>
                            <p className="text-sm font-medium">USN</p>
                            <p className="text-sm text-muted-foreground">{request.data.usn}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Semester</p>
                            <p className="text-sm text-muted-foreground">{request.data.semester}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Batch</p>
                            <p className="text-sm text-muted-foreground">{request.data.batch}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <p className="text-sm font-medium">Designation</p>
                            <p className="text-sm text-muted-foreground">{request.data.designation}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Specialization</p>
                            <p className="text-sm text-muted-foreground">{request.data.specialization}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Experience</p>
                            <p className="text-sm text-muted-foreground">{request.data.experience} years</p>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => handleReject(request.id, "account")} className="gap-1">
                        <XCircle className="h-4 w-4" />
                        Reject
                      </Button>
                      <Button onClick={() => handleApprove(request.id, "account")} className="gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Approve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
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
                        <CardTitle className="text-lg">Profile Update Request</CardTitle>
                      </div>
                      <Badge>{request.data.role}</Badge>
                    </div>
                    <CardDescription>Submitted on {formatDate(request.createdAt)}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium">Name</p>
                      <p className="text-sm text-muted-foreground">{request.data.name}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Requested Changes</p>
                      {Object.entries(request.data.changes).map(([field, values]: [string, any]) => (
                        <div key={field} className="rounded-md border border-gray-800 bg-gray-900/40 p-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium capitalize">{field}</p>
                          </div>
                          <div className="mt-1 grid grid-cols-2 gap-2">
                            <div className="text-xs">
                              <span className="text-muted-foreground">From: </span>
                              {values.from}
                            </div>
                            <div className="text-xs">
                              <span className="text-muted-foreground">To: </span>
                              {values.to}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={() => handleReject(request.id, "profile")} className="gap-1">
                        <XCircle className="h-4 w-4" />
                        Reject
                      </Button>
                      <Button onClick={() => handleApprove(request.id, "profile")} className="gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Approve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
