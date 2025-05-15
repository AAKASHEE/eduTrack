import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function TeacherAnalytics() {
  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Class Analytics</h1>
            <p className="text-muted-foreground">Visualize and analyze student performance data</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="cs301">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs301">Data Structures (CS301)</SelectItem>
                <SelectItem value="cs302">Algorithms (CS302)</SelectItem>
                <SelectItem value="cs303">Database Systems (CS303)</SelectItem>
                <SelectItem value="cs304">Computer Networks (CS304)</SelectItem>
                <SelectItem value="cs305">Operating Systems (CS305)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="performance">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Class Average</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">17.8/20</div>
                  <p className="text-xs text-muted-foreground">89% of maximum marks</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Highest Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">20/20</div>
                  <p className="text-xs text-muted-foreground">Achieved by 3 students</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Lowest Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12/20</div>
                  <p className="text-xs text-muted-foreground">Achieved by 1 student</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Pass Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">96%</div>
                  <p className="text-xs text-muted-foreground">4 students below passing</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Score Distribution</CardTitle>
                  <CardDescription>Distribution of marks across all students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <div className="flex h-full items-end justify-around">
                      {[
                        { range: "0-4", count: 0, percent: 0 },
                        { range: "5-8", count: 0, percent: 0 },
                        { range: "9-12", count: 4, percent: 4 },
                        { range: "13-16", count: 28, percent: 28 },
                        { range: "17-20", count: 68, percent: 68 },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-16 rounded-t bg-primary" style={{ height: `${item.percent * 2.5}px` }}>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CIE Comparison</CardTitle>
                  <CardDescription>Performance across different CIEs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[250px] w-full">
                    <div className="flex h-full items-end justify-around">
                      {[
                        { cie: "CIE 1", avg: 16.8 },
                        { cie: "CIE 2", avg: 17.5 },
                        { cie: "CIE 3", avg: 17.8 },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-20 rounded-t bg-primary" style={{ height: `${(item.avg / 20) * 200}px` }}>
                            <span className="sr-only">{item.avg}/20</span>
                          </div>
                          <div className="mt-2 text-center">
                            <div className="font-medium">{item.cie}</div>
                            <div className="text-xs text-muted-foreground">{item.avg}/20</div>
                            <div className="text-xs text-muted-foreground">{Math.round((item.avg / 20) * 100)}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Insights</CardTitle>
                  <CardDescription>Key observations from the data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="font-medium">Improvement Trend</div>
                      <div className="mt-1 text-sm">
                        Average score has improved by 1.0 points from CIE 1 to CIE 3, showing consistent progress.
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="font-medium">High Performers</div>
                      <div className="mt-1 text-sm">
                        68% of students scored above 17/20, indicating strong understanding of the subject.
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="font-medium">Areas for Improvement</div>
                      <div className="mt-1 text-sm">
                        4% of students scored below passing threshold. Consider targeted interventions.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Overview</CardTitle>
                <CardDescription>Attendance patterns for the current semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-8 border-primary">
                      <div className="text-center">
                        <div className="text-3xl font-bold">89%</div>
                        <div className="text-sm text-muted-foreground">Average Attendance</div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      Based on 24 classes conducted so far
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Above 90%</div>
                        <div className="font-medium">62 students</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-800">
                        <div className="h-2 rounded-full bg-green-500" style={{ width: "62%" }}></div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">75% - 90%</div>
                        <div className="font-medium">28 students</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-800">
                        <div className="h-2 rounded-full bg-yellow-500" style={{ width: "28%" }}></div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">Below 75%</div>
                        <div className="font-medium">10 students</div>
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-gray-800">
                        <div className="h-2 rounded-full bg-red-500" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="font-medium">Weekly Attendance Pattern</div>
                  <div className="mt-4 h-[200px] w-full">
                    <div className="flex h-full items-end justify-between">
                      {[
                        { week: "Week 1", percent: 95 },
                        { week: "Week 2", percent: 92 },
                        { week: "Week 3", percent: 88 },
                        { week: "Week 4", percent: 85 },
                        { week: "Week 5", percent: 90 },
                        { week: "Week 6", percent: 87 },
                        { week: "Week 7", percent: 89 },
                        { week: "Week 8", percent: 86 },
                        { week: "Week 9", percent: 91 },
                        { week: "Week 10", percent: 88 },
                        { week: "Week 11", percent: 85 },
                        { week: "Week 12", percent: 90 },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-6 rounded-t bg-primary" style={{ height: `${item.percent * 1.5}px` }}>
                            <span className="sr-only">{item.percent}%</span>
                          </div>
                          <div className="mt-2 text-center">
                            <div className="text-xs font-medium">{index + 1}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 text-center text-sm text-muted-foreground">Week Number</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Subject Comparison</CardTitle>
                <CardDescription>Performance across different subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full items-end justify-around">
                    {[
                      { subject: "Data Structures", code: "CS301", avg: 17.8 },
                      { subject: "Algorithms", code: "CS302", avg: 16.5 },
                      { subject: "Database Systems", code: "CS303", avg: 18.2 },
                      { subject: "Computer Networks", code: "CS304", avg: 15.8 },
                      { subject: "Operating Systems", code: "CS305", avg: 16.9 },
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="w-16 rounded-t bg-primary" style={{ height: `${(item.avg / 20) * 250}px` }}>
                          <span className="sr-only">{item.avg}/20</span>
                        </div>
                        <div className="mt-2 text-center">
                          <div className="font-medium">{item.code}</div>
                          <div className="text-xs text-muted-foreground">{item.avg}/20</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="font-medium">Top Performing Subject</div>
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                      <div className="text-lg font-medium">Database Systems (CS303)</div>
                      <div className="mt-1 text-sm text-muted-foreground">Average: 18.2/20 (91%)</div>
                      <div className="mt-2 text-sm">
                        Students show strong understanding of database concepts and SQL queries.
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="font-medium">Needs Improvement</div>
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                      <div className="text-lg font-medium">Computer Networks (CS304)</div>
                      <div className="mt-1 text-sm text-muted-foreground">Average: 15.8/20 (79%)</div>
                      <div className="mt-2 text-sm">Students struggle with network protocols and routing concepts.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="font-medium">Correlation Analysis</div>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                      <div className="font-medium">Performance vs. Attendance</div>
                      <div className="mt-2 text-sm">
                        Strong positive correlation (0.78) between attendance and performance across all subjects.
                        Students with attendance above 90% score 15% higher on average.
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-800 bg-gray-900/40 p-4">
                      <div className="font-medium">Subject Correlations</div>
                      <div className="mt-2 text-sm">
                        Students who perform well in Algorithms (CS302) also tend to excel in Data Structures (CS301),
                        with a correlation coefficient of 0.85.
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
