"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  GraduationCap,
  Home,
  LineChart,
  LogOut,
  Menu,
  Settings,
  User,
  Users,
  Award,
  Bell,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/lib/auth/auth-context"
import { Badge } from "@/components/ui/badge"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "student" | "teacher" | "hod"
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { logout, user } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  // Update the navigation object to include the correct links for HOD
  const navigation = {
    student: [
      { name: "Dashboard", href: "/dashboard/student", icon: Home },
      { name: "Profile", href: "/dashboard/student/profile", icon: User },
      { name: "Marks & CGPA", href: "/dashboard/student/marks", icon: GraduationCap },
      { name: "Career Plans", href: "/dashboard/student/career", icon: LineChart },
      { name: "Leaderboard", href: "/dashboard/leaderboard", icon: Award },
    ],
    teacher: [
      { name: "Dashboard", href: "/dashboard/teacher", icon: Home },
      { name: "Students", href: "/dashboard/teacher/students", icon: Users },
      { name: "Upload Marks", href: "/dashboard/teacher/upload", icon: GraduationCap },
      { name: "Analytics", href: "/dashboard/teacher/analytics", icon: BarChart3 },
      { name: "Requests", href: "/dashboard/teacher/requests", icon: Bell, badge: 2 },
    ],
    hod: [
      { name: "Dashboard", href: "/dashboard/hod", icon: Home },
      { name: "Department", href: "/dashboard/hod/department", icon: Users },
      { name: "Performance", href: "/dashboard/hod/performance", icon: BarChart3 },
      { name: "Leaderboard", href: "/dashboard/hod/leaderboard", icon: Award },
      { name: "Requests", href: "/dashboard/hod/requests", icon: Bell, badge: 3 },
    ],
  }

  const roleInfo = {
    student: {
      name: user?.name || "John Doe",
      email: user?.email || "john.doe@edutrack.com",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
    },
    teacher: {
      name: user?.name || "Prof. Sarah Johnson",
      email: user?.email || "sarah.johnson@edutrack.com",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
    },
    hod: {
      name: user?.name || "Dr. Robert Smith",
      email: user?.email || "robert.smith@edutrack.com",
      avatar: "/placeholder.svg?height=40&width=40",
      department: "Computer Science",
    },
  }

  const currentUserInfo = roleInfo[role]
  const currentNavigation = navigation[role]

  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-900">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 border-gray-800 bg-gray-900 p-0">
                <div className="flex h-16 items-center border-b border-gray-800 px-6">
                  <Link href={`/dashboard/${role}`} className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span className="font-bold text-white">EduTrack</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-1 p-4">
                  {currentNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                        pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                      {item.badge && (
                        <Badge variant="destructive" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href={`/dashboard/${role}`} className="flex items-center gap-2 md:ml-0">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="hidden font-bold text-white md:inline-block">EduTrack</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUserInfo.avatar || "/placeholder.svg"} alt={currentUserInfo.name} />
                    <AvatarFallback>{currentUserInfo.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{currentUserInfo.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{currentUserInfo.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar (desktop only) */}
        <aside className="hidden w-64 border-r border-gray-800 bg-gray-900 md:block">
          <nav className="flex flex-col gap-1 p-4">
            {currentNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
                {item.badge && (
                  <Badge variant="destructive" className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-950 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
