"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Briefcase, GraduationCap, Lightbulb, CheckCircle2, Clock, AlertCircle } from "lucide-react"

export default function StudentCareer() {
  const [selectedGoal, setSelectedGoal] = useState("placement")

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Career Planning</h1>
          <p className="text-muted-foreground">Track and plan your career aspirations</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Career Goal Selection</CardTitle>
            <CardDescription>Choose your primary career goal after graduation</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              defaultValue={selectedGoal}
              onValueChange={setSelectedGoal}
              className="grid gap-4 md:grid-cols-3"
            >
              <div>
                <RadioGroupItem value="placement" id="placement" className="peer sr-only" />
                <Label
                  htmlFor="placement"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Briefcase className="mb-3 h-6 w-6" />
                  <div className="text-center">
                    <div className="font-medium">Placement</div>
                    <div className="text-sm text-muted-foreground">Prepare for job opportunities</div>
                  </div>
                </Label>
              </div>

              <div>
                <RadioGroupItem value="higher" id="higher" className="peer sr-only" />
                <Label
                  htmlFor="higher"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <GraduationCap className="mb-3 h-6 w-6" />
                  <div className="text-center">
                    <div className="font-medium">Higher Studies</div>
                    <div className="text-sm text-muted-foreground">Pursue advanced education</div>
                  </div>
                </Label>
              </div>

              <div>
                <RadioGroupItem value="entrepreneur" id="entrepreneur" className="peer sr-only" />
                <Label
                  htmlFor="entrepreneur"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Lightbulb className="mb-3 h-6 w-6" />
                  <div className="text-center">
                    <div className="font-medium">Entrepreneurship</div>
                    <div className="text-sm text-muted-foreground">Start your own venture</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
          <CardFooter>
            <Button>Save Career Goal</Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue={selectedGoal}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="placement">Placement</TabsTrigger>
            <TabsTrigger value="higher">Higher Studies</TabsTrigger>
            <TabsTrigger value="entrepreneur">Entrepreneurship</TabsTrigger>
          </TabsList>

          <TabsContent value="placement" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Placement Preparation</CardTitle>
                <CardDescription>Track your progress towards job placement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Technical Skills</div>
                      <div className="text-sm text-muted-foreground">75%</div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Projects Completed</div>
                      <div className="text-sm text-muted-foreground">60%</div>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Interview Preparation</div>
                      <div className="text-sm text-muted-foreground">40%</div>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Resume & Portfolio</div>
                      <div className="text-sm text-muted-foreground">90%</div>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="font-medium">Target Companies</div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div>Google</div>
                        <div className="text-sm text-muted-foreground">Software Engineer</div>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div>Microsoft</div>
                        <div className="text-sm text-muted-foreground">Full Stack Developer</div>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div>Amazon</div>
                        <div className="text-sm text-muted-foreground">SDE</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add Company
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="font-medium">Upcoming Interviews</div>
                    <div className="grid gap-2">
                      <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Mock Interview</div>
                          <div className="flex h-6 items-center rounded-full bg-yellow-500/20 px-2 text-xs font-medium text-yellow-500">
                            <Clock className="mr-1 h-3 w-3" /> Scheduled
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">May 15, 2023 • 10:00 AM</div>
                      </div>
                      <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Google Online Assessment</div>
                          <div className="flex h-6 items-center rounded-full bg-green-500/20 px-2 text-xs font-medium text-green-500">
                            <CheckCircle2 className="mr-1 h-3 w-3" /> Confirmed
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">May 20, 2023 • 2:00 PM</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add Interview
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-medium">Placement Checklist</div>
                  <div className="grid gap-2">
                    {[
                      { task: "Update resume with latest projects", completed: true },
                      { task: "Complete System Design certification", completed: false },
                      { task: "Practice 50 LeetCode problems", completed: false },
                      { task: "Create portfolio website", completed: true },
                      { task: "Schedule mock interview with Prof. Johnson", completed: false },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-md border border-gray-800 bg-gray-900/60 p-3"
                      >
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            item.completed ? "bg-green-500/20 text-green-500" : "bg-gray-500/20 text-gray-500"
                          }`}
                        >
                          {item.completed ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                        </div>
                        <div className={item.completed ? "text-muted-foreground line-through" : ""}>{item.task}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="higher" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Higher Studies Planning</CardTitle>
                <CardDescription>Plan your path to advanced education</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Research Experience</div>
                      <div className="text-sm text-muted-foreground">45%</div>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Exam Preparation</div>
                      <div className="text-sm text-muted-foreground">60%</div>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">University Applications</div>
                      <div className="text-sm text-muted-foreground">30%</div>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Recommendation Letters</div>
                      <div className="text-sm text-muted-foreground">50%</div>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="font-medium">Target Universities</div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div>Stanford University</div>
                        <div className="text-sm text-muted-foreground">MS in CS</div>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div>MIT</div>
                        <div className="text-sm text-muted-foreground">MS in AI</div>
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div>Carnegie Mellon</div>
                        <div className="text-sm text-muted-foreground">MS in Software Engineering</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add University
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="font-medium">Exam Schedule</div>
                    <div className="grid gap-2">
                      <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">GRE</div>
                          <div className="flex h-6 items-center rounded-full bg-yellow-500/20 px-2 text-xs font-medium text-yellow-500">
                            <Clock className="mr-1 h-3 w-3" /> Scheduled
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">June 10, 2023 • 9:00 AM</div>
                      </div>
                      <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">TOEFL</div>
                          <div className="flex h-6 items-center rounded-full bg-green-500/20 px-2 text-xs font-medium text-green-500">
                            <CheckCircle2 className="mr-1 h-3 w-3" /> Completed
                          </div>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">Score: 110/120</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add Exam
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-medium">Research Projects</div>
                  <div className="grid gap-4">
                    <div className="rounded-md border border-gray-800 bg-gray-900/60 p-4">
                      <div className="font-medium">Machine Learning for Healthcare</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Developing predictive models for early disease detection using patient data.
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Mentor:</span> Dr. Sarah Johnson
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="font-medium">Status:</span> In Progress
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Add Research Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="entrepreneur" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Entrepreneurship Planning</CardTitle>
                <CardDescription>Plan your startup journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Business Plan</div>
                      <div className="text-sm text-muted-foreground">35%</div>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Prototype Development</div>
                      <div className="text-sm text-muted-foreground">50%</div>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Market Research</div>
                      <div className="text-sm text-muted-foreground">70%</div>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-medium">Funding Strategy</div>
                      <div className="text-sm text-muted-foreground">20%</div>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-medium">Startup Idea</div>
                  <div className="rounded-md border border-gray-800 bg-gray-900/60 p-4">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="idea-name">Startup Name</Label>
                        <Input id="idea-name" defaultValue="EduTech Solutions" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="idea-description">Description</Label>
                        <Textarea
                          id="idea-description"
                          className="mt-1"
                          rows={4}
                          defaultValue="An AI-powered platform that personalizes learning experiences for students based on their learning style, pace, and interests. Using machine learning algorithms to analyze student performance and provide tailored content."
                        />
                      </div>
                      <div>
                        <Label htmlFor="idea-domain">Industry/Domain</Label>
                        <Input id="idea-domain" defaultValue="EdTech" className="mt-1" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="font-medium">Mentorship</div>
                    <div className="grid gap-2">
                      <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div className="font-medium">Prof. Rajesh Kumar</div>
                        <div className="mt-1 text-sm text-muted-foreground">Business Strategy</div>
                      </div>
                      <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div className="font-medium">Ms. Priya Mehta</div>
                        <div className="mt-1 text-sm text-muted-foreground">Product Development</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add Mentor
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="font-medium">Upcoming Events</div>
                    <div className="grid gap-2">
                      <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div className="font-medium">Startup Weekend</div>
                        <div className="mt-1 text-sm text-muted-foreground">May 27-29, 2023</div>
                      </div>
                      <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                        <div className="font-medium">Pitch Competition</div>
                        <div className="mt-1 text-sm text-muted-foreground">June 15, 2023</div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Add Event
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="font-medium">Resources Needed</div>
                  <div className="grid gap-2">
                    {[
                      { resource: "Technical Co-founder", acquired: false },
                      { resource: "UI/UX Designer", acquired: true },
                      { resource: "Initial Funding ($10,000)", acquired: false },
                      { resource: "Legal Advisor", acquired: false },
                      { resource: "Office Space", acquired: false },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-md border border-gray-800 bg-gray-900/60 p-3"
                      >
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            item.acquired ? "bg-green-500/20 text-green-500" : "bg-gray-500/20 text-gray-500"
                          }`}
                        >
                          {item.acquired ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                        </div>
                        <div className={item.acquired ? "text-muted-foreground line-through" : ""}>{item.resource}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
