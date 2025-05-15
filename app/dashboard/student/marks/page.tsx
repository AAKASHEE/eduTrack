import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function StudentMarks() {
  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Marks & CGPA</h1>
          <p className="text-muted-foreground">View your academic performance across semesters</p>
        </div>

        <Tabs defaultValue="cie">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cie">CIE Marks</TabsTrigger>
            <TabsTrigger value="cgpa">Semester CGPA</TabsTrigger>
          </TabsList>

          <TabsContent value="cie" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Semester Marks</CardTitle>
                <CardDescription>Your internal assessment marks for the current semester</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead className="text-center">CIE 1</TableHead>
                      <TableHead className="text-center">CIE 2</TableHead>
                      <TableHead className="text-center">CIE 3</TableHead>
                      <TableHead className="text-center">Average</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { subject: "Data Structures", code: "CS301", cie1: 18, cie2: 19, cie3: 20, max: 20 },
                      { subject: "Algorithms", code: "CS302", cie1: 17, cie2: 18, cie3: 19, max: 20 },
                      { subject: "Database Systems", code: "CS303", cie1: 19, cie2: 19, cie3: 20, max: 20 },
                      { subject: "Computer Networks", code: "CS304", cie1: 16, cie2: 18, cie3: 19, max: 20 },
                      { subject: "Operating Systems", code: "CS305", cie1: 18, cie2: 17, cie3: 19, max: 20 },
                    ].map((subject, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium">{subject.subject}</div>
                          <div className="text-xs text-muted-foreground">{subject.code}</div>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="font-medium">
                            {subject.cie1}/{subject.max}
                          </div>
                          <Progress value={(subject.cie1 / subject.max) * 100} className="h-2 w-16 mx-auto mt-1" />
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="font-medium">
                            {subject.cie2}/{subject.max}
                          </div>
                          <Progress value={(subject.cie2 / subject.max) * 100} className="h-2 w-16 mx-auto mt-1" />
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="font-medium">
                            {subject.cie3}/{subject.max}
                          </div>
                          <Progress value={(subject.cie3 / subject.max) * 100} className="h-2 w-16 mx-auto mt-1" />
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="font-medium">
                            {Math.round((subject.cie1 + subject.cie2 + subject.cie3) / 3)}/{subject.max}
                          </div>
                          <Progress
                            value={((subject.cie1 + subject.cie2 + subject.cie3) / 3 / subject.max) * 100}
                            className="h-2 w-16 mx-auto mt-1"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Semester</TableHead>
                        <TableHead>CGPA</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { sem: 1, cgpa: 8.2, grade: "A", status: "Completed" },
                        { sem: 2, cgpa: 8.4, grade: "A", status: "Completed" },
                        { sem: 3, cgpa: 8.5, grade: "A", status: "Completed" },
                        { sem: 4, cgpa: 8.75, grade: "A+", status: "Completed" },
                        { sem: 5, cgpa: null, grade: "-", status: "In Progress" },
                        { sem: 6, cgpa: null, grade: "-", status: "Not Started" },
                        { sem: 7, cgpa: null, grade: "-", status: "Not Started" },
                        { sem: 8, cgpa: null, grade: "-", status: "Not Started" },
                      ].map((semester) => (
                        <TableRow key={semester.sem}>
                          <TableCell>Semester {semester.sem}</TableCell>
                          <TableCell>
                            {semester.cgpa ? (
                              <div className="font-medium">{semester.cgpa}</div>
                            ) : (
                              <div className="text-muted-foreground">-</div>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{semester.grade}</div>
                          </TableCell>
                          <TableCell>
                            <div
                              className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                                semester.status === "Completed"
                                  ? "bg-green-500/20 text-green-500"
                                  : semester.status === "In Progress"
                                    ? "bg-blue-500/20 text-blue-500"
                                    : "bg-gray-500/20 text-gray-500"
                              }`}
                            >
                              {semester.status}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
