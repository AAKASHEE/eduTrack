"use client"

import { useParams } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function StudentAnalysis() {
  const params = useParams()
  const studentId = params.id

  // This would normally be fetched from an API based on the studentId
  const student = {
    id: studentId,
    name: "Aisha Patel",
    usn: "1CS19CS005",
    email: "aisha.patel@edutrack.com",
    phone: "+91 9876543210",
    department: "Computer Science",
    semester: 6,
    batch: "2019-2023",
    cgpa: 9.8,
    attendance: 98,
    career: "Higher Studies",
    skills: ["Machine Learning", "Python", "Data Analysis", "Web Development", "Cloud Computing"],
    certifications: ["AWS Certified Developer", "Google Cloud Associate", "TensorFlow Developer"],
  }

  // Mock data for semester-wise performance
  const semesterData = [
    { semester: 1, cgpa: 9.6, attendance: 96 },
    { semester: 2, cgpa: 9.7, attendance: 97 },
    { semester: 3, cgpa: 9.7, attendance: 95 },
    { semester: 4, cgpa: 9.8, attendance: 98 },
    { semester: 5, cgpa: 9.8, attendance: 99 },
    { semester: 6, cgpa: 9.8, attendance: 98 },
  ]

  // Mock data for subject-wise performance in current semester
  const subjectData = [
    { subject: "Data Structures", code: "CS301", cie1: 19, cie2: 20, cie3: 20, avg: 19.7 },
    { subject: "Algorithms", code: "CS302", cie1: 20, cie2: 19, cie3: 20, avg: 19.7 },
    { subject: "Database Systems", code: "CS303", cie1: 20, cie2: 20, cie3: 19, avg: 19.7 },
    { subject: "Computer Networks", code: "CS304", cie1: 19, cie2: 18, cie3: 20, avg: 19.0 },
    { subject: "Operating Systems", code: "CS305", cie1: 20, cie2: 19, cie3: 20, avg: 19.7 },
  ]

  // Mock data for skill development over time
  const skillProgressData = [
    { month: "Jan", count: 3 },
    { month: "Feb", count: 3 },
    { month: "Mar", count: 4 },
    { month: "Apr", count: 4 },
    { month: "May", count: 5 },
    { month: "Jun", count: 5 },
    { month: "Jul", count: 6 },
    { month: "Aug", count: 7 },
    { month: "Sep", count: 8 },
    { month: "Oct", count: 9 },
    { month: "Nov", count: 10 },
    { month: "Dec", count: 12 },
  ]

  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/teacher/students">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Student Analysis</h1>
            <p className="text-muted-foreground">Detailed performance analysis for {student.name}</p>
          </div>
          <Button variant="outline" className="ml-auto gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Student Profile</CardTitle>
              <CardDescription>Basic information and contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={student.name} />
                  <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h2 className="text-xl font-bold">{student.name}</h2>
                  <p className="text-sm text-muted-foreground">{student.usn}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Department</div>
                  <div className="text-sm">{student.department}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Semester</div>
                  <div className="text-sm">{student.semester}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Batch</div>
                  <div className="text-sm">{student.batch}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Current CGPA</div>
                  <div className="text-sm font-bold text-green-500">{student.cgpa}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Attendance</div>
                  <div className="text-sm font-bold text-green-500">{student.attendance}%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Career Goal</div>
                  <Badge variant="outline">{student.career}</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{student.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{student.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Academic performance across semesters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <div className="flex h-full items-end justify-around">
                  {semesterData.map((data) => (
                    <div key={data.semester} className="flex flex-col items-center">
                      <div className="flex gap-1">
                        <div
                          className="w-8 rounded-t bg-primary"
                          style={{ height: `${data.cgpa * 20}px` }}
                          title={`CGPA: ${data.cgpa}`}
                        ></div>
                        <div
                          className="w-8 rounded-t bg-blue-500"
                          style={{ height: `${data.attendance * 2}px` }}
                          title={`Attendance: ${data.attendance}%`}
                        ></div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-medium">Sem {data.semester}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-primary"></div>
                  <span className="text-sm">CGPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Attendance %</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="academic">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="academic">Academic Performance</TabsTrigger>
            <TabsTrigger value="skills">Skill Development</TabsTrigger>
            <TabsTrigger value="career">Career Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="academic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Subject-wise Performance</CardTitle>
                <CardDescription>Current semester performance across subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {subjectData.map((subject) => (
                    <div key={subject.code} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{subject.subject}</div>
                          <div className="text-xs text-muted-foreground">{subject.code}</div>
                        </div>
                        <div className="text-sm font-medium">
                          Avg: {subject.avg.toFixed(1)}/20 ({Math.round((subject.avg / 20) * 100)}%)
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">CIE 1</div>
                            <div className="text-xs">
                              {subject.cie1}/20 ({Math.round((subject.cie1 / 20) * 100)}%)
                            </div>
                          </div>
                          <Progress value={(subject.cie1 / 20) * 100} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">CIE 2</div>
                            <div className="text-xs">
                              {subject.cie2}/20 ({Math.round((subject.cie2 / 20) * 100)}%)
                            </div>
                          </div>
                          <Progress value={(subject.cie2 / 20) * 100} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">CIE 3</div>
                            <div className="text-xs">
                              {subject.cie3}/20 ({Math.round((subject.cie3 / 20) * 100)}%)
                            </div>
                          </div>
                          <Progress value={(subject.cie3 / 20) * 100} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="font-medium">Performance Insights</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="font-medium">Consistent Performer</div>
                      <div className="mt-1 text-sm">
                        Maintains excellent performance across all subjects with minimal variation.
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="font-medium">Improvement Pattern</div>
                      <div className="mt-1 text-sm">
                        Shows consistent improvement from CIE 1 to CIE 3 in most subjects.
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="font-medium">Strongest Subject</div>
                      <div className="mt-1 text-sm">
                        Database Systems (CS303) with perfect scores in CIE 1 and CIE 2.
                      </div>
                    </div>
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="font-medium">Focus Area</div>
                      <div className="mt-1 text-sm">
                        Computer Networks (CS304) has slightly lower scores compared to other subjects.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Skill Development Analysis</CardTitle>
                <CardDescription>Tracking skill acquisition and growth over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="h-[250px] w-full">
                    <div className="flex h-full items-end justify-between">
                      {skillProgressData.map((data, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-8 rounded-t bg-primary" style={{ height: `${data.count * 15}px` }}></div>
                          <div className="mt-2 text-center">
                            <div className="text-xs font-medium">{data.month}</div>
                            <div className="text-xs text-muted-foreground">{data.count}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    Skills acquired over the past 12 months
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Current Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {student.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Certifications</h3>
                    <div className="grid gap-2">
                      {student.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-900/60 p-2"
                        >
                          <span>{cert}</span>
                          <Badge variant="outline">Verified</Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Skill Growth Analysis</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                        <div className="font-medium">Growth Rate</div>
                        <div className="mt-1 text-sm">
                          Added 9 new skills in the past 12 months, showing a 300% increase.
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                        <div className="font-medium">Focus Areas</div>
                        <div className="mt-1 text-sm">
                          Strong focus on data science and cloud technologies in recent months.
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                        <div className="font-medium">Skill Diversity</div>
                        <div className="mt-1 text-sm">
                          Balanced skill set across multiple domains including frontend, backend, and data analysis.
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                        <div className="font-medium">Recommendation</div>
                        <div className="mt-1 text-sm">
                          Consider adding more specialized skills in machine learning to support higher studies goal.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="career" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Career Goal Progress</CardTitle>
                <CardDescription>Tracking progress towards higher studies goal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Higher Studies</Badge>
                      <span className="text-sm text-muted-foreground">Selected 8 months ago</span>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <div className="text-sm font-medium">Overall Progress</div>
                          <div className="text-sm text-muted-foreground">75%</div>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="font-medium">Target Universities</h3>
                      <div className="grid gap-2">
                        <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">Stanford University</div>
                              <div className="text-xs text-muted-foreground">MS in Computer Science</div>
                            </div>
                            <Badge>Primary</Badge>
                          </div>
                        </div>
                        <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">MIT</div>
                              <div className="text-xs text-muted-foreground">MS in Artificial Intelligence</div>
                            </div>
                            <Badge variant="outline">Secondary</Badge>
                          </div>
                        </div>
                        <div className="rounded-md border border-gray-800 bg-gray-900/60 p-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">Carnegie Mellon</div>
                              <div className="text-xs text-muted-foreground">MS in Machine Learning</div>
                            </div>
                            <Badge variant="outline">Secondary</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Exam Preparation</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <div className="text-sm font-medium">GRE</div>
                            <div className="text-sm text-muted-foreground">90%</div>
                          </div>
                          <Progress value={90} className="h-2" />
                          <div className="mt-1 text-xs text-muted-foreground">
                            Mock Test Score: 330/340 (Verbal: 165, Quant: 165)
                          </div>
                        </div>

                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <div className="text-sm font-medium">TOEFL</div>
                            <div className="text-sm text-muted-foreground">100%</div>
                          </div>
                          <Progress value={100} className="h-2" />
                          <div className="mt-1 text-xs text-muted-foreground">Score: 118/120</div>
                        </div>

                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <div className="text-sm font-medium">Research Experience</div>
                            <div className="text-sm text-muted-foreground">70%</div>
                          </div>
                          <Progress value={70} className="h-2" />
                          <div className="mt-1 text-xs text-muted-foreground">
                            1 research paper published, 1 in progress
                          </div>
                        </div>

                        <div>
                          <div className="mb-1 flex items-center justify-between">
                            <div className="text-sm font-medium">Application Materials</div>
                            <div className="text-sm text-muted-foreground">60%</div>
                          </div>
                          <Progress value={60} className="h-2" />
                          <div className="mt-1 text-xs text-muted-foreground">
                            Statement of Purpose and CV completed, recommendation letters in progress
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Timeline</h3>
                    <div className="relative space-y-6 pl-6 before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-[1px] before:bg-gray-800">
                      <div className="relative">
                        <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary"></div>
                        <div className="font-medium">January 2023</div>
                        <div className="text-sm text-muted-foreground">Selected Higher Studies as career goal</div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary"></div>
                        <div className="font-medium">March 2023</div>
                        <div className="text-sm text-muted-foreground">Completed TOEFL with score 118/120</div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary"></div>
                        <div className="font-medium">June 2023</div>
                        <div className="text-sm text-muted-foreground">
                          Published research paper on "Machine Learning Applications in Healthcare"
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-primary"></div>
                        <div className="font-medium">August 2023</div>
                        <div className="text-sm text-muted-foreground">
                          Completed Statement of Purpose and CV for applications
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-gray-700"></div>
                        <div className="font-medium">October 2023 (Upcoming)</div>
                        <div className="text-sm text-muted-foreground">Scheduled GRE exam</div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-6 top-1 h-3 w-3 rounded-full bg-gray-700"></div>
                        <div className="font-medium">December 2023 (Upcoming)</div>
                        <div className="text-sm text-muted-foreground">Submit applications to target universities</div>
                      </div>
                    </div>
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
