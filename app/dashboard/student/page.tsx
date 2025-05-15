import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, Award, Briefcase, LineChart } from "lucide-react"

export default function StudentDashboard() {
  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's an overview of your academic progress.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.75</div>
              <p className="text-xs text-muted-foreground">+0.25 from last semester</p>
              <Progress value={87.5} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
              <Progress value={92} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certifications</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">2 in progress</p>
              <Progress value={71} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Career Goal</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Placement</div>
              <p className="text-xs text-muted-foreground">3 companies shortlisted</p>
              <Progress value={60} className="mt-3 h-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="marks">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="marks">CIE Marks</TabsTrigger>
            <TabsTrigger value="cgpa">Semester CGPA</TabsTrigger>
            <TabsTrigger value="career">Career Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="marks" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Semester Marks</CardTitle>
                <CardDescription>Your internal assessment marks for the current semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { subject: "Data Structures", cie1: 18, cie2: 19, cie3: 20, max: 20 },
                    { subject: "Algorithms", cie1: 17, cie2: 18, cie3: 19, max: 20 },
                    { subject: "Database Systems", cie1: 19, cie2: 19, cie3: 20, max: 20 },
                    { subject: "Computer Networks", cie1: 16, cie2: 18, cie3: 19, max: 20 },
                    { subject: "Operating Systems", cie1: 18, cie2: 17, cie3: 19, max: 20 },
                  ].map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{subject.subject}</div>
                        <div className="text-sm text-muted-foreground">
                          Average: {Math.round((subject.cie1 + subject.cie2 + subject.cie3) / 3)} / {subject.max}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">CIE 1</div>
                          <Progress value={(subject.cie1 / subject.max) * 100} className="h-2" />
                          <div className="text-xs text-right">
                            {subject.cie1}/{subject.max}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">CIE 2</div>
                          <Progress value={(subject.cie2 / subject.max) * 100} className="h-2" />
                          <div className="text-xs text-right">
                            {subject.cie2}/{subject.max}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground">CIE 3</div>
                          <Progress value={(subject.cie3 / subject.max) * 100} className="h-2" />
                          <div className="text-xs text-right">
                            {subject.cie3}/{subject.max}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cgpa" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Semester-wise CGPA</CardTitle>
                <CardDescription>Your academic performance across semesters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { sem: 1, cgpa: 8.2 },
                      { sem: 2, cgpa: 8.4 },
                      { sem: 3, cgpa: 8.5 },
                      { sem: 4, cgpa: 8.75 },
                    ].map((semester) => (
                      <Card key={semester.sem} className="border-gray-800 bg-gray-900/60">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-sm">Semester {semester.sem}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                          <div className="text-2xl font-bold">{semester.cgpa}</div>
                          <Progress value={(semester.cgpa / 10) * 100} className="mt-2 h-1" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="relative h-[200px] w-full">
                    <div className="absolute inset-0 flex items-end">
                      <div className="flex h-full w-full items-end">
                        {[8.2, 8.4, 8.5, 8.75].map((cgpa, index) => (
                          <div key={index} className="relative mx-2 flex-1">
                            <div
                              className="relative w-full rounded-t bg-primary"
                              style={{ height: `${(cgpa / 10) * 100 * 2}px` }}
                            >
                              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium">
                                {cgpa}
                              </span>
                            </div>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                              Sem {index + 1}
                            </span>
                          </div>
                        ))}
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
                <CardTitle>Career Aspiration Tracking</CardTitle>
                <CardDescription>Your progress towards your career goal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Current Goal: Placement</h3>
                      <p className="text-sm text-muted-foreground">Target Companies: Google, Microsoft, Amazon</p>
                    </div>
                    <LineChart className="h-5 w-5 text-primary" />
                  </div>

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

                  <div className="rounded-lg border border-gray-800 bg-gray-900/60 p-4">
                    <h4 className="mb-2 font-medium">Recommended Next Steps</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                        <span>Complete the System Design certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                        <span>Practice more algorithm problems on LeetCode</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                        <span>Schedule a mock interview with Prof. Johnson</span>
                      </li>
                    </ul>
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
