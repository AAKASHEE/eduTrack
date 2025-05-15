import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, BookOpen, GraduationCap, Users, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HodDashboard() {
  return (
    <DashboardLayout role="hod">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">HOD Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Dr. Smith! Here's an overview of the department performance.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search students by name or USN..." className="pl-8" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Semesters</SelectItem>
                <SelectItem value="1">Semester 1</SelectItem>
                <SelectItem value="2">Semester 2</SelectItem>
                <SelectItem value="3">Semester 3</SelectItem>
                <SelectItem value="4">Semester 4</SelectItem>
                <SelectItem value="5">Semester 5</SelectItem>
                <SelectItem value="6">Semester 6</SelectItem>
                <SelectItem value="7">Semester 7</SelectItem>
                <SelectItem value="8">Semester 8</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Career Goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Goals</SelectItem>
                <SelectItem value="placement">Placement</SelectItem>
                <SelectItem value="higher">Higher Studies</SelectItem>
                <SelectItem value="entrepreneur">Entrepreneurship</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Search className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">486</div>
              <p className="text-xs text-muted-foreground">Across all semesters</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Department Average</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.4</div>
              <p className="text-xs text-muted-foreground">CGPA across all students</p>
              <Progress value={84} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">Previous batch</p>
              <Progress value={92} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Faculty Count</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Active faculty members</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="performance">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Department Performance</TabsTrigger>
            <TabsTrigger value="semester">Semester Analysis</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Performance Overview</CardTitle>
                <CardDescription>CGPA distribution across all semesters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="relative h-[300px] w-full">
                    <div className="absolute inset-0 flex items-end justify-around">
                      {[
                        { range: "9.0-10.0", count: 86, percent: 18 },
                        { range: "8.0-8.9", count: 145, percent: 30 },
                        { range: "7.0-7.9", count: 124, percent: 25 },
                        { range: "6.0-6.9", count: 92, percent: 19 },
                        { range: "< 6.0", count: 39, percent: 8 },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-20 rounded-t bg-primary" style={{ height: `${item.percent * 8}px` }}>
                            <span className="sr-only">{item.percent}%</span>
                          </div>
                          <div className="mt-2 text-center">
                            <div className="font-medium">{item.range}</div>
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
                        <CardTitle className="text-sm">Career Goal Distribution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Placement</div>
                              <div className="text-sm text-muted-foreground">63%</div>
                            </div>
                            <Progress value={63} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Higher Studies</div>
                              <div className="text-sm text-muted-foreground">26%</div>
                            </div>
                            <Progress value={26} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Entrepreneurship</div>
                              <div className="text-sm text-muted-foreground">11%</div>
                            </div>
                            <Progress value={11} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-800 bg-gray-900/60">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Gender Distribution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Male</div>
                              <div className="text-sm text-muted-foreground">58%</div>
                            </div>
                            <Progress value={58} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium">Female</div>
                              <div className="text-sm text-muted-foreground">42%</div>
                            </div>
                            <Progress value={42} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="semester" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Semester-wise Analysis</CardTitle>
                <CardDescription>Performance trends across different semesters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="relative h-[300px] w-full">
                    <div className="absolute inset-0 flex items-end justify-around">
                      {[
                        { semester: 1, avg: 8.2 },
                        { semester: 2, avg: 8.3 },
                        { semester: 3, avg: 8.1 },
                        { semester: 4, avg: 8.4 },
                        { semester: 5, avg: 8.6 },
                        { semester: 6, avg: 8.5 },
                        { semester: 7, avg: 8.7 },
                        { semester: 8, avg: 8.9 },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-12 rounded-t bg-primary" style={{ height: `${item.avg * 20}px` }}>
                            <span className="sr-only">{item.avg}</span>
                          </div>
                          <div className="mt-2 text-center">
                            <div className="font-medium">Sem {item.semester}</div>
                            <div className="text-xs text-muted-foreground">{item.avg}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-gray-800 bg-gray-900/60">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Subject Performance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { subject: "Data Structures", code: "CS301", avg: 8.5 },
                            { subject: "Algorithms", code: "CS302", avg: 8.2 },
                            { subject: "Database Systems", code: "CS303", avg: 8.7 },
                            { subject: "Computer Networks", code: "CS304", avg: 8.1 },
                            { subject: "Operating Systems", code: "CS305", avg: 8.4 },
                          ].map((subject, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">{subject.subject}</div>
                                <div className="text-sm text-muted-foreground">{subject.avg}</div>
                              </div>
                              <Progress value={subject.avg * 10} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-800 bg-gray-900/60">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Semester Highlights</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                            <div className="font-medium">Highest Performing Semester</div>
                            <div className="mt-1 text-sm">Semester 8 (8.9)</div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              Final year students showing excellent performance
                            </div>
                          </div>

                          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                            <div className="font-medium">Most Improved</div>
                            <div className="mt-1 text-sm">Semester 4 to 5 (+0.2)</div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              Significant improvement after core subjects
                            </div>
                          </div>

                          <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                            <div className="font-medium">Needs Attention</div>
                            <div className="mt-1 text-sm">Semester 3 (8.1)</div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              Slightly lower performance in advanced topics
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Leaderboard</CardTitle>
                <CardDescription>Top performing students across the department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border border-gray-800 bg-gray-900/60 p-4">
                    <h3 className="mb-4 text-lg font-medium">CGPA Leaderboard</h3>
                    <div className="space-y-4">
                      {[
                        { rank: 1, name: "Aisha Patel", usn: "1CS19CS005", semester: 8, cgpa: 9.8 },
                        { rank: 2, name: "Rahul Sharma", usn: "1CS19CS042", semester: 8, cgpa: 9.7 },
                        { rank: 3, name: "Priya Singh", usn: "1CS19CS038", semester: 8, cgpa: 9.6 },
                        { rank: 4, name: "Vikram Reddy", usn: "1CS20CS062", semester: 6, cgpa: 9.5 },
                        { rank: 5, name: "Neha Gupta", usn: "1CS20CS033", semester: 6, cgpa: 9.5 },
                      ].map((student) => (
                        <div key={student.rank} className="flex items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-medium">
                            {student.rank}
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="font-medium">{student.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {student.usn} • Semester {student.semester}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{student.cgpa}</div>
                            <div className="text-xs text-muted-foreground">CGPA</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/60 p-4">
                    <h3 className="mb-4 text-lg font-medium">Skills Leaderboard</h3>
                    <div className="space-y-4">
                      {[
                        {
                          rank: 1,
                          name: "Arjun Kumar",
                          usn: "1CS19CS008",
                          skills: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
                          count: 12,
                        },
                        {
                          rank: 2,
                          name: "Sneha Verma",
                          usn: "1CS20CS055",
                          skills: ["Web Development", "React", "Node.js", "UI/UX"],
                          count: 10,
                        },
                        {
                          rank: 3,
                          name: "Karthik Iyer",
                          usn: "1CS20CS025",
                          skills: ["Cloud Computing", "AWS", "DevOps", "Docker"],
                          count: 9,
                        },
                        {
                          rank: 4,
                          name: "Ananya Desai",
                          usn: "1CS21CS003",
                          skills: ["Mobile Development", "Flutter", "Firebase", "Kotlin"],
                          count: 8,
                        },
                        {
                          rank: 5,
                          name: "Rohan Mehta",
                          usn: "1CS21CS045",
                          skills: ["Cybersecurity", "Ethical Hacking", "Network Security"],
                          count: 7,
                        },
                      ].map((student) => (
                        <div key={student.rank} className="flex items-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-medium">
                            {student.rank}
                          </div>
                          <div className="ml-4 flex-1">
                            <div className="font-medium">{student.name}</div>
                            <div className="flex flex-wrap gap-1 pt-1">
                              {student.skills.slice(0, 3).map((skill, index) => (
                                <span key={index} className="inline-flex rounded-full bg-gray-800 px-2 py-0.5 text-xs">
                                  {skill}
                                </span>
                              ))}
                              {student.skills.length > 3 && (
                                <span className="inline-flex rounded-full bg-gray-800 px-2 py-0.5 text-xs">
                                  +{student.skills.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{student.count}</div>
                            <div className="text-xs text-muted-foreground">Skills</div>
                          </div>
                        </div>
                      ))}
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
