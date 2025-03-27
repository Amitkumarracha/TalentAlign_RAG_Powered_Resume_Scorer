"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CandidateCard } from "@/components/candidate-card"

// Mock candidate data
const mockCandidates = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "Senior UX Designer",
    matchPercentage: 92,
    status: "shortlisted",
    skills: ["UI/UX", "Figma", "User Research", "Prototyping"],
    experience: "7 years",
    education: "Master's in HCI",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Full Stack Developer",
    matchPercentage: 87,
    status: "new",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    experience: "5 years",
    education: "Bachelor's in Computer Science",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    position: "Product Manager",
    matchPercentage: 78,
    status: "interviewed",
    skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping"],
    experience: "6 years",
    education: "MBA",
  },
  {
    id: "4",
    name: "David Kim",
    position: "Data Scientist",
    matchPercentage: 95,
    status: "new",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    experience: "4 years",
    education: "PhD in Statistics",
  },
  {
    id: "5",
    name: "Jessica Taylor",
    position: "Marketing Specialist",
    matchPercentage: 82,
    status: "shortlisted",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    experience: "3 years",
    education: "Bachelor's in Marketing",
  },
]

export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [positionFilter, setPositionFilter] = useState("all")

  // Filter candidates based on search query and filters
  const filteredCandidates = mockCandidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesStatus = statusFilter === "all" || candidate.status === statusFilter
    const matchesPosition = positionFilter === "all" || candidate.position === positionFilter

    return matchesSearch && matchesStatus && matchesPosition
  })

  // Get unique positions for the filter
  const uniquePositions = Array.from(new Set(mockCandidates.map((c) => c.position)))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Candidate Management</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search and Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Input
                placeholder="Search by name, position, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interviewed">Interviewed</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={positionFilter} onValueChange={setPositionFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Positions</SelectItem>
                  {uniquePositions.map((position) => (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Candidates</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
          <TabsTrigger value="interviewed">Interviewed</TabsTrigger>
          <TabsTrigger value="hired">Hired</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {filteredCandidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
            {filteredCandidates.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No candidates found matching your criteria.</p>
              </div>
            )}
          </div>
        </TabsContent>

        {["new", "shortlisted", "interviewed", "hired"].map((status) => (
          <TabsContent key={status} value={status} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {filteredCandidates
                .filter((candidate) => candidate.status === status)
                .map((candidate) => (
                  <CandidateCard key={candidate.id} candidate={candidate} />
                ))}
              {filteredCandidates.filter((candidate) => candidate.status === status).length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No candidates found with this status.</p>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

