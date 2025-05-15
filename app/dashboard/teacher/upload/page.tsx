"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Upload, FileSpreadsheet, Save, Download } from "lucide-react"

export default function TeacherUpload() {
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedCIE, setSelectedCIE] = useState("cie1")

  const students = [
    { id: 1, name: "John Doe", usn: "1CS19CS001" },
    { id: 2, name: "Aisha Patel", usn: "1CS19CS005" },
    { id: 3, name: "Rahul Sharma", usn: "1CS19CS042" },
    { id: 4, name: "Priya Singh", usn: "1CS19CS038" },
    { id: 5, name: "Vikram Reddy", usn: "1CS19CS062" },
    { id: 6, name: "Neha Gupta", usn: "1CS19CS033" },
    { id: 7, name: "Arjun Kumar", usn: "1CS19CS008" },
    { id: 8, name: "Sneha Verma", usn: "1CS19CS055" },
    { id: 9, name: "Karthik Iyer", usn: "1CS19CS025" },
    { id: 10, name: "Ananya Desai", usn: "1CS19CS003" },
  ]

  const subjects = [
    { id: "cs301", name: "Data Structures", code: "CS301" },
    { id: "cs302", name: "Algorithms", code: "CS302" },
    { id: "cs303", name: "Database Systems", code: "CS303" },
    { id: "cs304", name: "Computer Networks", code: "CS304" },
    { id: "cs305", name: "Operating Systems", code: "CS305" },
  ]

  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Upload Marks</h1>
          <p className="text-muted-foreground">Manage student marks and CGPA records</p>
        </div>

        <Tabs defaultValue="cie">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cie">CIE Marks</TabsTrigger>
            <TabsTrigger value="cgpa">Semester CGPA</TabsTrigger>
          </TabsList>

          <TabsContent value="cie" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload CIE Marks</CardTitle>
                <CardDescription>Enter internal assessment marks for students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject.id} value={subject.id}>
                            {subject.name} ({subject.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cie">CIE</Label>
                    <Select value={selectedCIE} onValueChange={setSelectedCIE}>
                      <SelectTrigger id="cie">
                        <SelectValue placeholder="Select CIE" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cie1">CIE 1</SelectItem>
                        <SelectItem value="cie2">CIE 2</SelectItem>
                        <SelectItem value="cie3">CIE 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max-marks">Maximum Marks</Label>
                    <Input id="max-marks" type="number" defaultValue="20" />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload CSV
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <FileSpreadsheet className="h-4 w-4" />
                    Download Template
                  </Button>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px]">Sl. No</TableHead>
                        <TableHead>USN</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Marks</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student, index) => (
                        <TableRow key={student.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{student.usn}</TableCell>
                          <TableCell>{student.name}</TableCell>
                          <TableCell className="text-right">
                            <Input
                              type="number"
                              className="w-20 text-right"
                              min="0"
                              max="20"
                              defaultValue={Math.floor(Math.random() * 5) + 16}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Marks
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="cgpa" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Semester CGPA</CardTitle>
                <CardDescription>Enter semester-end CGPA for students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="semester">Semester</Label>
                    <Select>
                      <SelectTrigger id="semester">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
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
                  </div>

                  <div className="flex items-end gap-4">
                    <Button variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload CSV
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Template
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px]">Sl. No</TableHead>
                        <TableHead>USN</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">CGPA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student, index) => (
                        <TableRow key={student.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{student.usn}</TableCell>
                          <TableCell>{student.name}</TableCell>
                          <TableCell className="text-right">
                            <Input
                              type="number"
                              className="w-20 text-right"
                              min="0"
                              max="10"
                              step="0.1"
                              defaultValue={(Math.random() * 2 + 8).toFixed(1)}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Save CGPA
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
