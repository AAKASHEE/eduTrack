"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Download, Filter } from "lucide-react"

export default function HodPerformance() {
  const [selectedDepartment, setSelectedDepartment] = useState("Computer Science")
  const [selectedSemester, setSelectedSemester] = useState("all")
  const [selectedYear, setSelectedYear] = useState("2023")

  return (
    <DashboardLayout role="hod">
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Department Performance</h1>
            <p className="text-muted-foreground">Comprehensive analysis of academic performance across departments</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Information Science">Information Science</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Mechanical">Mechanical</SelectItem>
                <SelectItem value="Civil">Civil</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
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

            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Apply Filters
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average CGPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.4</div>
              <p className="text-xs text-muted-foreground">+0.2 from previous year</p>
              <Progress value={84} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">+3% from previous year</p>
              <Progress value={92} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">+5% from previous year</p>
              <Progress value={87} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Research Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">+8 from previous year</p>
              <Progress value={75} className="mt-3 h-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="academic">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="academic">Academic Performance</TabsTrigger>
            <TabsTrigger value="faculty">Faculty Performance</TabsTrigger>
            <TabsTrigger value="trends">Performance Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="academic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Semester-wise Performance</CardTitle>
                <CardDescription>Average CGPA across different semesters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full items-end justify-around">
                    {[
                      { semester: 1, avg: 8.2 },
                      { semester: 2, avg: 8.3 },
                      { semester: 3, avg: 8.1 },
                      { semester: 4, avg: 8.4 },
                      { semester: 5, avg: 8.6 },
                      { semester: 6, avg: 8.5 },
                      { semester: 7, avg: 8.7 },
                      { semester: 8, avg: 8.9 },
                    ].map((item) => (
                      <div key={item.semester} className="flex flex-col items-center">
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

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <div className="font-medium">Top Performing Semester</div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Semester 8</div>
                        <div className="text-sm font-medium">8.9</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Semester 7</div>
                        <div className="text-sm font-medium">8.7</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Semester 5</div>
                        <div className="text-sm font-medium">8.6</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                    <div className="font-medium">Areas for Improvement</div>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Semester 3</div>
                        <div className="text-sm font-medium">8.1</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Semester 1</div>
                        <div className="text-sm font-medium">8.2</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Semester 2</div>
                        <div className="text-sm font-medium">8.3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Performance</CardTitle>
                <CardDescription>Performance metrics for faculty members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: "Prof. Sarah Johnson", subject: "Machine Learning", rating: 4.8, students: 120 },
                    { name: "Dr. Amit Sharma", subject: "Database Systems", rating: 4.7, students: 95 },
                    { name: "Prof. Priya Patel", subject: "Computer Networks", rating: 4.5, students: 85 },
                    { name: "Dr. Rajesh Kumar", subject: "Artificial Intelligence", rating: 4.9, students: 110 },
                    { name: "Prof. Neha Gupta", subject: "Software Engineering", rating: 4.6, students: 90 },
                  ].map((faculty, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{faculty.name}</div>
                          <div className="text-xs text-muted-foreground">{faculty.subject}</div>
                        </div>
                        <div className="text-sm font-medium">
                          {faculty.rating}/5.0 ({faculty.students} students)
                        </div>
                      </div>
                      <Progress value={(faculty.rating / 5) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>Year-over-year performance analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full items-end justify-around">
                    {[
                      { year: 2020, cgpa: 8.1, placement: 82 },
                      { year: 2021, cgpa: 8.2, placement: 84 },
                      { year: 2022, cgpa: 8.3, placement: 85 },
                      { year: 2023, cgpa: 8.4, placement: 87 },
                    ].map((item) => (
                      <div key={item.year} className="flex flex-col items-center">
                        <div className="flex gap-2">
                          <div
                            className="w-12 rounded-t bg-primary"
                            style={{ height: `${item.cgpa * 20}px` }}
                            title={`CGPA: ${item.cgpa}`}
                          ></div>
                          <div
                            className="w-12 rounded-t bg-blue-500"
                            style={{ height: `${item.placement * 2}px` }}
                            title={`Placement: ${item.placement}%`}
                          ></div>
                        </div>
                        <div className="mt-2 text-center">
                          <div className="font-medium">{item.year}</div>
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
                    <span className="text-sm">Placement %</span>
                  </div>
                </div>

                <div className="mt-8 rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                  <div className="font-medium">Performance Insights</div>
                  <div className="mt-2 text-sm">
                    <p>
                      The department has shown consistent improvement in both academic performance and placement rates
                      over the past four years. The average CGPA has increased from 8.1 in 2020 to 8.4 in 2023,
                      representing a 3.7% improvement. Similarly, placement rates have risen from 82% to 87%, showing a
                      positive correlation between academic performance and career outcomes.
                    </p>
                    <p className="mt-2">
                      The most significant improvements were observed in the final year students (Semesters 7 and 8),
                      suggesting that specialized courses and industry-focused projects in the later years are having a
                      positive impact on student performance and employability.
                    </p>
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
