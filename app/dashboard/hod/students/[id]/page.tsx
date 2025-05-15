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

export default function HodStudentAnalysis() {
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

  // Mock data for historical performance across years
  const historicalData = [
    { year: 2019, semester: 1, cgpa: 9.6 },
    { year: 2019, semester: 2, cgpa: 9.7 },
    { year: 2020, semester: 3, cgpa: 9.7 },
    { year: 2020, semester: 4, cgpa: 9.8 },
    { year: 2021, semester: 5, cgpa: 9.8 },
    { year: 2021, semester: 6, cgpa: 9.8 },
  ]

  return (
    <DashboardLayout role="hod">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/hod/department">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Student Analysis</h1>
            <p className="text-muted-foreground">Comprehensive performance analysis for {student.name}</p>
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
              <CardTitle>Performance Trend</CardTitle>
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
            <TabsTrigger value="historical">Historical Analysis</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
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
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="historical" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Long-term Performance Analysis</CardTitle>
                <CardDescription>Academic trajectory across years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="h-[300px] w-full">
                    <div className="flex h-full items-end justify-around">
                      {historicalData.map((data, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-12 rounded-t bg-primary" style={{ height: `${data.cgpa * 25}px` }}></div>
                          <div className="mt-2 text-center">
                            <div className="text-xs font-medium">{data.year}</div>
                            <div className="text-xs text-muted-foreground">Sem {data.semester}</div>
                            <div className="text-xs font-medium">{data.cgpa}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                      <div className="font-medium">Performance Summary</div>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Starting CGPA</div>
                          <div className="text-sm font-medium">9.6</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Current CGPA</div>
                          <div className="text-sm font-medium">9.8</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Overall Improvement</div>
                          <div className="text-sm font-medium">+0.2</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Consistency Score</div>
                          <div className="text-sm font-medium">98%</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                      <div className="font-medium">Comparative Analysis</div>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Department Rank</div>
                          <div className="text-sm font-medium">1 / 124</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Batch Rank</div>
                          <div className="text-sm font-medium">1 / 60</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Percentile</div>
                          <div className="text-sm font-medium">99.9%</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">Above Department Average</div>
                          <div className="text-sm font-medium">+1.4</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <div className="font-medium">Performance Trajectory</div>
                    <div className="mt-2 text-sm">
                      <p>
                        The student has maintained an exceptional academic record throughout their academic journey.
                        Starting with a strong CGPA of 9.6 in the first semester, they have shown consistent
                        improvement, reaching 9.8 by the sixth semester. This upward trajectory demonstrates both
                        academic excellence and a commitment to continuous improvement.
                      </p>
                      <p className="mt-2">
                        Particularly noteworthy is the consistency across all semesters, with no significant drops in
                        performance. This indicates excellent study habits, strong conceptual understanding, and
                        effective time management skills.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Recommendations</CardTitle>
                <CardDescription>Personalized guidance for continued success</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <div className="font-medium">Academic Recommendations</div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Research Opportunities:</span> Given the student's exceptional
                          academic performance and interest in higher studies, encourage participation in research
                          projects with faculty members in machine learning and data science.
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Advanced Coursework:</span> Recommend enrollment in advanced
                          electives in AI and machine learning to strengthen graduate school applications.
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Publication Support:</span> Provide guidance for converting
                          current research work into a publishable paper for an international conference or journal.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <div className="font-medium">Career Development</div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Graduate School Preparation:</span> Connect with alumni
                          currently at target universities (Stanford, MIT) for mentorship and application guidance.
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Scholarship Opportunities:</span> Nominate for prestigious
                          scholarships like Fulbright and provide recommendation letters.
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Industry Exposure:</span> While focused on higher studies,
                          recommend summer internships at research-oriented companies to gain practical experience.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <div className="font-medium">Leadership Development</div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Peer Mentoring:</span> Encourage to serve as a peer mentor for
                          junior students, particularly those struggling with core CS subjects.
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Workshop Facilitation:</span> Invite to conduct workshops on
                          advanced topics like machine learning or cloud computing for fellow students.
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-primary"></div>
                        <div className="text-sm">
                          <span className="font-medium">Department Ambassador:</span> Appoint as a department ambassador
                          for outreach events and prospective student interactions.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <div className="font-medium">Faculty Notes</div>
                    <div className="mt-2 text-sm">
                      <p>
                        Aisha demonstrates exceptional potential for graduate studies and research. Her consistent
                        academic excellence, coupled with her growing technical skills in machine learning and data
                        science, positions her well for admission to top-tier graduate programs.
                      </p>
                      <p className="mt-2">
                        Recommend close mentorship from Dr. Rajesh Kumar (AI specialization) for research guidance and
                        Prof. Sarah Johnson for graduate school application support. Consider nominating for the
                        department's Outstanding Student Award and providing institutional support for conference
                        attendance.
                      </p>
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
