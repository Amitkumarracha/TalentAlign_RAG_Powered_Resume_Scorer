"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    date: "Jan",
    "Processing Time": 2.5,
    Accuracy: 85,
  },
  {
    date: "Feb",
    "Processing Time": 2.2,
    Accuracy: 87,
  },
  {
    date: "Mar",
    "Processing Time": 1.9,
    Accuracy: 89,
  },
  {
    date: "Apr",
    "Processing Time": 1.7,
    Accuracy: 91,
  },
  {
    date: "May",
    "Processing Time": 1.5,
    Accuracy: 92,
  },
  {
    date: "Jun",
    "Processing Time": 1.2,
    Accuracy: 94,
  },
]

export function ResumeProcessingChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis
            yAxisId="left"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{ value: "Time (s)", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            label={{ value: "Accuracy (%)", angle: 90, position: "insideRight" }}
            domain={[80, 100]}
          />
          <Tooltip />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Processing Time"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Accuracy"
            stroke="hsl(var(--destructive))"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

