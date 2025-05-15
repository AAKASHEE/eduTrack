"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, Eye, FileText } from "lucide-react"
import Link from "next/link"

export default function TeacherStudents() {
  const [searchQuery, setSearchQuery] = useState("")

  const students = [
    { id: 1, name: "John Doe", usn: "1CS19CS001", semester: 6, cgpa: 8.75, attendance: 92, career: "Placement" },
    { id: 2, name: "Aisha Patel", usn: "1CS19CS005", semester: 6, cgpa: 9.8, attendance: 98, career: "Higher Studies" },
    { id: 3, name: "Rahul Sharma", usn: "1CS19CS042", semester: 6, cgpa: 9.7, attendance: 95, career: "Placement" },
    { id: 4, name: "Priya Singh", usn: "1CS19CS038", semester: 6, cgpa: 9.6, attendance: 96, career: "Placement" },
    {
      id: 5,
      name: "Vikram Reddy",
      usn: "1CS19CS062",
      semester: 6,
      cgpa: 6.2,
      attendance: 75,
      career: "Entrepreneurship",
    },
    { id: 6, name: "Neha Gupta", usn: "1CS19CS033", semester: 6, cgpa: 6.5, attendance: 78, career: "Placement" },
    { id: 7, name: "Arjun Kumar", usn: "1CS19CS008", semester: 6, cgpa: 6.8, attendance: 80, career: "Higher Studies" },
    { id: 8, name: "Sneha Verma", usn: "1CS19CS055", semester: 6, cgpa: 8.9, attendance: 94, career: "Placement" },
    {
      id: 9,
      name: "Karthik Iyer",
      usn: "1CS19CS025",
      semester: 6,
      cgpa: 8.7,
      attendance: 91,
      career: "Entrepreneurship",
    },
    {
      id: 10,
      name: "Ananya Desai",
      usn: "1CS19CS003",
      semester: 6,
      cgpa: 8.5,
      attendance: 89,
      career: "Higher Studies",
    },
  ]

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Management</h1>
          <p className="text-muted-foreground">View and manage student profiles and academic records</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students by name or USN..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
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
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Students</CardTitle>
            <CardDescription>Manage student records for the current semester</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>USN</TableHead>
                  <TableHead className="hidden md:table-cell">CGPA</TableHead>
                  <TableHead className="hidden md:table-cell">Attendance</TableHead>
                  <TableHead className="hidden md:table-cell">Career Goal</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={student.name} />
                          <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-xs text-muted-foreground md:hidden">{student.usn}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{student.usn}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div
                        className={`font-medium ${
                          student.cgpa >= 9.0
                            ? "text-green-500"
                            : student.cgpa >= 8.0
                              ? "text-blue-500"
                              : student.cgpa >= 7.0
                                ? "text-yellow-500"
                                : "text-red-500"
                        }`}
                      >
                        {student.cgpa}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div
                        className={`font-medium ${
                          student.attendance >= 90
                            ? "text-green-500"
                            : student.attendance >= 80
                              ? "text-blue-500"
                              : student.attendance >= 75
                                ? "text-yellow-500"
                                : "text-red-500"
                        }`}
                      >
                        {student.attendance}%
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant="outline">{student.career}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/dashboard/teacher/students/${student.id}`}>
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View Analysis</span>
                          </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">Marks</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
