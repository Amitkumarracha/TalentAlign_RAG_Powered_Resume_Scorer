"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "@/components/ui/chart"

const data = [
  {
    name: "React",
    value: 24,
  },
  {
    name: "JavaScript",
    value: 22,
  },
  {
    name: "TypeScript",
    value: 18,
  },
  {
    name: "Node.js",
    value: 16,
  },
  {
    name: "UI/UX",
    value: 14,
  },
  {
    name: "Python",
    value: 12,
  },
  {
    name: "SQL",
    value: 10,
  },
  {
    name: "AWS",
    value: 8,
  },
]

export function SkillsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--border))",
              color: "hsl(var(--card-foreground))",
            }}
          />
          <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

