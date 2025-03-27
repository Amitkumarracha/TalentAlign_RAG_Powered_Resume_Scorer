"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "@/components/ui/chart"

interface PipelineChartProps {
  detailed?: boolean
}

const simpleData = [
  {
    name: "New",
    value: 24,
  },
  {
    name: "Screening",
    value: 18,
  },
  {
    name: "Interview",
    value: 12,
  },
  {
    name: "Offer",
    value: 5,
  },
  {
    name: "Hired",
    value: 3,
  },
]

const detailedData = [
  {
    name: "New",
    Developer: 10,
    Designer: 6,
    Manager: 4,
    Analyst: 4,
  },
  {
    name: "Screening",
    Developer: 8,
    Designer: 5,
    Manager: 3,
    Analyst: 2,
  },
  {
    name: "Interview",
    Developer: 6,
    Designer: 3,
    Manager: 2,
    Analyst: 1,
  },
  {
    name: "Offer",
    Developer: 3,
    Designer: 1,
    Manager: 1,
    Analyst: 0,
  },
  {
    name: "Hired",
    Developer: 2,
    Designer: 1,
    Manager: 0,
    Analyst: 0,
  },
]

export function PipelineChart({ detailed = false }: PipelineChartProps) {
  const data = detailed ? detailedData : simpleData

  if (!detailed) {
    return (
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Developer" stackId="a" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Designer" stackId="a" fill="hsl(var(--destructive))" />
          <Bar dataKey="Manager" stackId="a" fill="hsl(var(--warning))" />
          <Bar dataKey="Analyst" stackId="a" fill="hsl(var(--secondary))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

