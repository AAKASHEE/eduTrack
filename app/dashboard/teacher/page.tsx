import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BookOpen, GraduationCap, Users } from "lucide-react"

export default function TeacherDashboard() {
  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Teacher Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Prof. Sarah! Here's an overview of your class performance.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">Across 4 classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Class Average</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.2</div>
              <p className="text-xs text-muted-foreground">CGPA across all students</p>
              <Progress value={82} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89%</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
              <Progress value={89} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Marks Uploaded</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3/5</div>
              <p className="text-xs text-muted-foreground">Subjects completed</p>
              <Progress value={60} className="mt-3 h-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Class Performance</TabsTrigger>
            <TabsTrigger value="subjects">Subject Analysis</TabsTrigger>
            <TabsTrigger value="career">Career Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Class Performance Overview</CardTitle>
                <CardDescription>Distribution of grades across all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="relative h-[300px] w-full">
                    <div className="absolute inset-0 flex items-end justify-around">
                      {[
                        { grade: "O", count: 15, percent: 12 },
                        { grade: "A+", count: 28, percent: 23 },
                        { grade: "A", count: 35, percent: 28 },
                        { grade: "B+", count: 22, percent: 18 },
                        { grade: "B", count: 14, percent: 11 },
                        { grade: "C", count: 8, percent: 6 },
                        { grade: "F", count: 2, percent: 2 },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-16 rounded-t bg-primary" style={{ height: `${item.percent * 8}px` }}>
                            <span className="sr-only">{item.percent}%</span>
                          </div>
                          <div className="mt-2 text-center">
                            <div className="font-medium">{item.grade}</div>
                            <div className="text-xs text-muted-foreground">{item.count} students</div>
                            <div className="text-xs text-muted-foreground">{item.percent}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-gray-800 bg-gray-900/60">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Top Performers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {[
                            { name: "Aisha Patel", usn: "1CS19CS005", cgpa: 9.8 },
                            { name: "Rahul Sharma", usn: "1CS19CS042", cgpa: 9.7 },
                            { name: "Priya Singh", usn: "1CS19CS038", cgpa: 9.6 },
                          ].map((student, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{student.name}</div>
                                <div className="text-xs text-muted-foreground">{student.usn}</div>
                              </div>
                              <div className="text-sm font-medium">{student.cgpa}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-800 bg-gray-900/60">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Needs Improvement</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {[
                            { name: "Vikram Reddy", usn: "1CS19CS062", cgpa: 6.2 },
                            { name: "Neha Gupta", usn: "1CS19CS033", cgpa: 6.5 },
                            { name: "Arjun Kumar", usn: "1CS19CS008", cgpa: 6.8 },
                          ].map((student, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div>
                                <div className="font-medium">{student.name}</div>
                                <div className="text-xs text-muted-foreground">{student.usn}</div>
                              </div>
                              <div className="text-sm font-medium">{student.cgpa}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Subject-wise Performance</CardTitle>
                <CardDescription>Average marks across different subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { subject: "Data Structures", code: "CS301", avg: 85, max: 100 },
                    { subject: "Algorithms", code: "CS302", avg: 78, max: 100 },
                    { subject: "Database Systems", code: "CS303", avg: 82, max: 100 },
                    { subject: "Computer Networks", code: "CS304", avg: 76, max: 100 },
                    { subject: "Operating Systems", code: "CS305", avg: 80, max: 100 },
                  ].map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{subject.subject}</div>
                          <div className="text-xs text-muted-foreground">{subject.code}</div>
                        </div>
                        <div className="text-sm font-medium">{subject.avg}%</div>
                      </div>
                      <Progress value={subject.avg} className="h-2" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Class Average</span>
                        <span>
                          {subject.avg}/{subject.max}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="career" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Career Aspirations</CardTitle>
                <CardDescription>Distribution of career goals among students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="relative h-[300px] w-full">
                    <div className="absolute inset-0 flex items-end justify-around">
                      {[
                        { goal: "Placement", count: 78, percent: 63 },
                        { goal: "Higher Studies", count: 32, percent: 26 },
                        { goal: "Entrepreneurship", count: 14, percent: 11 },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-24 rounded-t bg-primary" style={{ height: `${item.percent * 4}px` }}>
                            <span className="sr-only">{item.percent}%</span>
                          </div>
                          <div className="mt-2 text-center">
                            <div className="font-medium">{item.goal}</div>
                            <div className="text-xs text-muted-foreground">{item.count} students</div>
                            <div className="text-xs text-muted-foreground">{item.percent}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="border-gray-800 bg-gray-900/60">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Placement</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">78</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                        <div className="mt-2 text-sm">Top companies: Google, Microsoft, Amazon</div>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-800 bg-gray-900/60">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Higher Studies</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">32</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                        <div className="mt-2 text-sm">Top universities: Stanford, MIT, Carnegie Mellon</div>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-800 bg-gray-900/60">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Entrepreneurship</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">14</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                        <div className="mt-2 text-sm">Focus areas: EdTech, FinTech, HealthTech</div>
                      </CardContent>
                    </Card>
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
