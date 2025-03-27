"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "@/components/ui/chart"

interface SkillMatchChartProps {
  skills: {
    name: string
    match: number
  }[]
}

export function SkillMatchChart({ skills }: SkillMatchChartProps) {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={skills} layout="vertical">
          <XAxis type="number" domain={[0, 100]} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            dataKey="name"
            type="category"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            width={100}
          />
          <Tooltip formatter={(value) => [`${value}% Match`, "Skill Match"]} labelFormatter={(label) => `${label}`} />
          <Bar dataKey="match" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

