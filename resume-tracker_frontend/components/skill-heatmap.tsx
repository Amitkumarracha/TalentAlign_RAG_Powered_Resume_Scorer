"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SkillHeatmapProps {
  detailed?: boolean
}

export function SkillHeatmap({ detailed = false }: SkillHeatmapProps) {
  const [selectedRole, setSelectedRole] = useState("all")

  // This would be dynamic data in a real application
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "AWS",
    "UI/UX",
    "Figma",
    "Product Management",
    "Agile",
    "Data Analysis",
    "Machine Learning",
    "Communication",
    "Leadership",
  ]

  const getRandomValue = () => Math.floor(Math.random() * 10) + 1

  const getColor = (value: number) => {
    if (value >= 8) return "bg-green-500"
    if (value >= 5) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-4">
      {detailed && (
        <div className="flex justify-end">
          <Select value={selectedRole} onValueChange={setSelectedRole}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="developer">Developer</SelectItem>
              <SelectItem value="designer">Designer</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="analyst">Analyst</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="grid grid-cols-5 gap-2">
        {skills.map((skill) => {
          const value = getRandomValue()
          return (
            <Card key={skill} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-3 text-center">
                  <div className="text-sm font-medium truncate">{skill}</div>
                  <div
                    className={`mt-2 mx-auto w-8 h-8 rounded-full flex items-center justify-center text-white ${getColor(value)}`}
                  >
                    {value}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

