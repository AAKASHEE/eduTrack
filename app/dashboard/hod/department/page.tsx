"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Download, Mail, Phone, Eye } from "lucide-react"
import Link from "next/link"

export default function HodDepartment() {
  const [searchQuery, setSearchQuery] = useState("")

  const faculty = [
    {
      id: 1,
      name: "Prof. Sarah Johnson",
      designation: "Associate Professor",
      specialization: "Machine Learning",
      experience: 8,
      email: "sarah.johnson@edutrack.com",
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "Dr. Amit Sharma",
      designation: "Professor",
      specialization: "Database Systems",
      experience: 15,
      email: "amit.sharma@edutrack.com",
      phone: "+91 9876543211",
    },
    {
      id: 3,
      name: "Prof. Priya Patel",
      designation: "Assistant Professor",
      specialization: "Computer Networks",
      experience: 5,
      email: "priya.patel@edutrack.com",
      phone: "+91 9876543212",
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      designation: "Professor",
      specialization: "Artificial Intelligence",
      experience: 12,
      email: "rajesh.kumar@edutrack.com",
      phone: "+91 9876543213",
    },
    {
      id: 5,
      name: "Prof. Neha Gupta",
      designation: "Associate Professor",
      specialization: "Software Engineering",
      experience: 7,
      email: "neha.gupta@edutrack.com",
      phone: "+91 9876543214",
    },
    {
      id: 6,
      name: "Dr. Vikram Singh",
      designation: "Professor",
      specialization: "Cybersecurity",
      experience: 10,
      email: "vikram.singh@edutrack.com",
      phone: "+91 9876543215",
    },
  ]

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

  const filteredFaculty = faculty.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <DashboardLayout role="hod">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Department Management</h1>
          <p className="text-muted-foreground">Manage faculty and students in the Computer Science department</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, USN, or specialization..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
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

        <Tabs defaultValue="faculty">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>

          <TabsContent value="faculty" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Members</CardTitle>
                <CardDescription>Manage faculty in the Computer Science department</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className="hidden md:table-cell">Designation</TableHead>
                      <TableHead className="hidden md:table-cell">Specialization</TableHead>
                      <TableHead className="hidden md:table-cell">Experience</TableHead>
                      <TableHead className="text-right">Contact</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredFaculty.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={member.name} />
                              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="text-xs text-muted-foreground md:hidden">{member.designation}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{member.designation}</TableCell>
                        <TableCell className="hidden md:table-cell">{member.specialization}</TableCell>
                        <TableCell className="hidden md:table-cell">{member.experience} years</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" title={member.email}>
                              <Mail className="h-4 w-4" />
                              <span className="sr-only">Email</span>
                            </Button>
                            <Button variant="ghost" size="icon" title={member.phone}>
                              <Phone className="h-4 w-4" />
                              <span className="sr-only">Phone</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Students</CardTitle>
                <CardDescription>View and analyze student performance</CardDescription>
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
                        <TableCell className="hidden md:table-cell">{student.career}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" asChild>
                            <Link href={`/dashboard/hod/students/${student.id}`}>
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View Analysis</span>
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
