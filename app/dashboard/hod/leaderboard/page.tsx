"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HodLeaderboard() {
  const [selectedBatch, setSelectedBatch] = useState("2019-2023")
  const [selectedDepartment, setSelectedDepartment] = useState("Computer Science")

  // This would be fetched from the backend in a real implementation
  const batches = ["2019-2023", "2020-2024", "2021-2025", "2022-2026"]
  const departments = ["Computer Science", "Information Science", "Electronics", "Mechanical", "Civil"]

  // Mock data for leaderboards - would be fetched from API
  const cgpaLeaderboard = [
    { rank: 1, name: "Aisha Patel", usn: "1CS19CS005", semester: 6, cgpa: 9.8, department: "Computer Science" },
    { rank: 2, name: "Rahul Sharma", usn: "1CS19CS042", semester: 6, cgpa: 9.7, department: "Computer Science" },
    { rank: 3, name: "Priya Singh", usn: "1CS19CS038", semester: 6, cgpa: 9.6, department: "Computer Science" },
    { rank: 4, name: "Vikram Reddy", usn: "1CS20CS062", semester: 4, cgpa: 9.5, department: "Computer Science" },
    { rank: 5, name: "Neha Gupta", usn: "1CS20CS033", semester: 4, cgpa: 9.5, department: "Computer Science" },
    { rank: 6, name: "Arjun Kumar", usn: "1CS19CS008", semester: 6, cgpa: 9.4, department: "Computer Science" },
    { rank: 7, name: "Sneha Verma", usn: "1CS19CS055", semester: 6, cgpa: 9.3, department: "Computer Science" },
    { rank: 8, name: "Karthik Iyer", usn: "1CS19CS025", semester: 6, cgpa: 9.2, department: "Computer Science" },
    { rank: 9, name: "Ananya Desai", usn: "1CS19CS003", semester: 6, cgpa: 9.1, department: "Computer Science" },
    { rank: 10, name: "Rohan Mehta", usn: "1CS19CS045", semester: 6, cgpa: 9.0, department: "Computer Science" },
  ]

  const skillsLeaderboard = [
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
      usn: "1CS19CS055",
      skills: ["Web Development", "React", "Node.js", "UI/UX"],
      count: 10,
    },
    {
      rank: 3,
      name: "Karthik Iyer",
      usn: "1CS19CS025",
      skills: ["Cloud Computing", "AWS", "DevOps", "Docker"],
      count: 9,
    },
    {
      rank: 4,
      name: "Ananya Desai",
      usn: "1CS19CS003",
      skills: ["Mobile Development", "Flutter", "Firebase", "Kotlin"],
      count: 8,
    },
    {
      rank: 5,
      name: "Rohan Mehta",
      usn: "1CS19CS045",
      skills: ["Cybersecurity", "Ethical Hacking", "Network Security"],
      count: 7,
    },
    {
      rank: 6,
      name: "Aisha Patel",
      usn: "1CS19CS005",
      skills: ["Data Analysis", "Python", "SQL", "Tableau"],
      count: 7,
    },
    {
      rank: 7,
      name: "Rahul Sharma",
      usn: "1CS19CS042",
      skills: ["Blockchain", "Solidity", "Web3", "Smart Contracts"],
      count: 6,
    },
    {
      rank: 8,
      name: "Priya Singh",
      usn: "1CS19CS038",
      skills: ["Game Development", "Unity", "C#", "3D Modeling"],
      count: 6,
    },
    {
      rank: 9,
      name: "Vikram Reddy",
      usn: "1CS20CS062",
      skills: ["IoT", "Embedded Systems", "Arduino", "Raspberry Pi"],
      count: 5,
    },
    {
      rank: 10,
      name: "Neha Gupta",
      usn: "1CS20CS033",
      skills: ["UI/UX Design", "Figma", "Adobe XD", "Prototyping"],
      count: 5,
    },
  ]

  const departmentLeaderboard = [
    { rank: 1, name: "Computer Science", avgCgpa: 8.7, placementRate: 92, researchPapers: 45 },
    { rank: 2, name: "Information Science", avgCgpa: 8.5, placementRate: 90, researchPapers: 38 },
    { rank: 3, name: "Electronics", avgCgpa: 8.3, placementRate: 85, researchPapers: 32 },
    { rank: 4, name: "Mechanical", avgCgpa: 8.1, placementRate: 82, researchPapers: 28 },
    { rank: 5, name: "Civil", avgCgpa: 8.0, placementRate: 80, researchPapers: 25 },
  ]

  return (
    <DashboardLayout role="hod">
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Institutional Leaderboard</h1>
            <p className="text-muted-foreground">Top performing students and departments across the institution</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Select value={selectedBatch} onValueChange={setSelectedBatch}>
              <SelectTrigger>
                <SelectValue placeholder="Select batch" />
              </SelectTrigger>
              <SelectContent>
                {batches.map((batch) => (
                  <SelectItem key={batch} value={batch}>
                    {batch}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All Departments">All Departments</SelectItem>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="cgpa">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cgpa">CGPA Leaderboard</TabsTrigger>
            <TabsTrigger value="skills">Skills Leaderboard</TabsTrigger>
            <TabsTrigger value="departments">Department Rankings</TabsTrigger>
          </TabsList>

          <TabsContent value="cgpa" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>CGPA Leaderboard</CardTitle>
                <CardDescription>Top 10 students by CGPA across all departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {cgpaLeaderboard.slice(0, 3).map((student) => (
                    <div
                      key={student.usn}
                      className={`flex items-center gap-4 rounded-lg border p-4 ${
                        student.rank === 1
                          ? "border-yellow-500 bg-yellow-500/10"
                          : student.rank === 2
                            ? "border-gray-400 bg-gray-400/10"
                            : "border-amber-700 bg-amber-700/10"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          student.rank === 1
                            ? "bg-yellow-500 text-yellow-950"
                            : student.rank === 2
                              ? "bg-gray-400 text-gray-950"
                              : "bg-amber-700 text-amber-50"
                        }`}
                      >
                        {student.rank === 1 ? (
                          <Trophy className="h-6 w-6" />
                        ) : student.rank === 2 ? (
                          <Medal className="h-6 w-6" />
                        ) : (
                          <Award className="h-6 w-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">{student.name}</div>
                          <Badge variant="outline">{student.usn}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {student.department} • Semester {student.semester}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{student.cgpa}</div>
                        <div className="text-xs text-muted-foreground">CGPA</div>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-lg border">
                    <div className="grid grid-cols-12 border-b bg-muted/40 px-4 py-2 text-sm font-medium">
                      <div className="col-span-1">Rank</div>
                      <div className="col-span-7">Student</div>
                      <div className="col-span-2 text-center">Department</div>
                      <div className="col-span-2 text-right">CGPA</div>
                    </div>
                    {cgpaLeaderboard.slice(3).map((student) => (
                      <div key={student.usn} className="grid grid-cols-12 items-center px-4 py-3">
                        <div className="col-span-1 font-medium">{student.rank}</div>
                        <div className="col-span-7">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={student.name} />
                              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{student.name}</div>
                              <div className="text-xs text-muted-foreground">{student.usn}</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">{student.department}</div>
                        <div className="col-span-2 text-right font-medium">{student.cgpa}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Skills Leaderboard</CardTitle>
                <CardDescription>Top 10 students by number of verified skills across all departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {skillsLeaderboard.slice(0, 3).map((student) => (
                    <div
                      key={student.usn}
                      className={`flex items-center gap-4 rounded-lg border p-4 ${
                        student.rank === 1
                          ? "border-yellow-500 bg-yellow-500/10"
                          : student.rank === 2
                            ? "border-gray-400 bg-gray-400/10"
                            : "border-amber-700 bg-amber-700/10"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          student.rank === 1
                            ? "bg-yellow-500 text-yellow-950"
                            : student.rank === 2
                              ? "bg-gray-400 text-gray-950"
                              : "bg-amber-700 text-amber-50"
                        }`}
                      >
                        {student.rank === 1 ? (
                          <Trophy className="h-6 w-6" />
                        ) : student.rank === 2 ? (
                          <Medal className="h-6 w-6" />
                        ) : (
                          <Award className="h-6 w-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">{student.name}</div>
                          <Badge variant="outline">{student.usn}</Badge>
                        </div>
                        <div className="mt-1 flex flex-wrap gap-1">
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
                        <div className="text-2xl font-bold">{student.count}</div>
                        <div className="text-xs text-muted-foreground">Skills</div>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-lg border">
                    <div className="grid grid-cols-12 border-b bg-muted/40 px-4 py-2 text-sm font-medium">
                      <div className="col-span-1">Rank</div>
                      <div className="col-span-7">Student</div>
                      <div className="col-span-2 text-center">Top Skill</div>
                      <div className="col-span-2 text-right">Count</div>
                    </div>
                    {skillsLeaderboard.slice(3).map((student) => (
                      <div key={student.usn} className="grid grid-cols-12 items-center px-4 py-3">
                        <div className="col-span-1 font-medium">{student.rank}</div>
                        <div className="col-span-7">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={student.name} />
                              <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{student.name}</div>
                              <div className="text-xs text-muted-foreground">{student.usn}</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <span className="inline-flex rounded-full bg-gray-800 px-2 py-0.5 text-xs">
                            {student.skills[0]}
                          </span>
                        </div>
                        <div className="col-span-2 text-right font-medium">{student.count}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Department Rankings</CardTitle>
                <CardDescription>Performance comparison across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {departmentLeaderboard.slice(0, 3).map((dept) => (
                    <div
                      key={dept.name}
                      className={`flex items-center gap-4 rounded-lg border p-4 ${
                        dept.rank === 1
                          ? "border-yellow-500 bg-yellow-500/10"
                          : dept.rank === 2
                            ? "border-gray-400 bg-gray-400/10"
                            : "border-amber-700 bg-amber-700/10"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          dept.rank === 1
                            ? "bg-yellow-500 text-yellow-950"
                            : dept.rank === 2
                              ? "bg-gray-400 text-gray-950"
                              : "bg-amber-700 text-amber-50"
                        }`}
                      >
                        {dept.rank === 1 ? (
                          <Trophy className="h-6 w-6" />
                        ) : dept.rank === 2 ? (
                          <Medal className="h-6 w-6" />
                        ) : (
                          <Award className="h-6 w-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{dept.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Placement Rate: {dept.placementRate}% • Research Papers: {dept.researchPapers}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{dept.avgCgpa}</div>
                        <div className="text-xs text-muted-foreground">Avg. CGPA</div>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-lg border">
                    <div className="grid grid-cols-12 border-b bg-muted/40 px-4 py-2 text-sm font-medium">
                      <div className="col-span-1">Rank</div>
                      <div className="col-span-5">Department</div>
                      <div className="col-span-2 text-center">Avg. CGPA</div>
                      <div className="col-span-2 text-center">Placement</div>
                      <div className="col-span-2 text-right">Research</div>
                    </div>
                    {departmentLeaderboard.slice(3).map((dept) => (
                      <div key={dept.name} className="grid grid-cols-12 items-center px-4 py-3">
                        <div className="col-span-1 font-medium">{dept.rank}</div>
                        <div className="col-span-5">
                          <div className="font-medium">{dept.name}</div>
                        </div>
                        <div className="col-span-2 text-center font-medium">{dept.avgCgpa}</div>
                        <div className="col-span-2 text-center">{dept.placementRate}%</div>
                        <div className="col-span-2 text-right">{dept.researchPapers}</div>
                      </div>
                    ))}
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
