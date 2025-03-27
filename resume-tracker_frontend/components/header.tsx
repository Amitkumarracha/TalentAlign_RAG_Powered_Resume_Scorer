"use client"

import { useState } from "react"
import { Bell, ChevronDown, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <SidebarTrigger />

      {showSearch ? (
        <div className="flex-1 md:grow-0 md:w-80">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full bg-background pl-8 md:w-[300px]" />
          </div>
        </div>
      ) : (
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setShowSearch(true)}>
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      )}

      <div className="hidden md:flex md:flex-1">
        <div className="relative w-full md:w-auto md:flex-1 lg:flex-initial lg:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full bg-background pl-8" />
        </div>
      </div>

      <div className="flex items-center gap-2 md:ml-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
              <span className="sr-only">Notifications</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>Recent notifications and updates</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="border-l-4 border-primary p-3 bg-muted">
                <h4 className="font-medium text-sm">New Resume Uploaded</h4>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <div className="border-l-4 border-primary p-3 bg-muted">
                <h4 className="font-medium text-sm">Interview Scheduled</h4>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
              <div className="border-l-4 border-primary p-3 bg-muted">
                <h4 className="font-medium text-sm">Candidate Status Updated</h4>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-1">
              <User className="h-4 w-4" />
              <span className="hidden md:inline-flex">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

