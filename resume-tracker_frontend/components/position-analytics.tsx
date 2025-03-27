"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const positions = ["Senior UX Designer", "Full Stack Developer", "Product Manager", "Data Scientist"]

const timeToHireData = [
  {
    name: "Jan",
    "Senior UX Designer": 45,
    "Full Stack Developer": 38,
    "Product Manager": 52,
    "Data Scientist": 42,
  },
  {
    name: "Feb",
    "Senior UX Designer": 42,
    "Full Stack Developer": 35,
    "Product Manager": 48,
    "Data Scientist": 40,
  },
  {
    name: "Mar",
    "Senior UX Designer": 40,
    "Full Stack Developer": 32,
    "Product Manager": 45,
    "Data Scientist": 38,
  },
  {
    name: "Apr",
    "Senior UX Designer": 38,
    "Full Stack Developer": 30,
    "Product Manager": 42,
    "Data Scientist": 35,
  },
  {
    name: "May",
    "Senior UX Designer": 35,
    "Full Stack Developer": 28,
    "Product Manager": 40,
    "Data Scientist": 32,
  },
  {
    name: "Jun",
    "Senior UX Designer": 32,
    "Full Stack Developer": 25,
    "Product Manager": 38,
    "Data Scientist": 30,
  },
]

const applicantsData = [
  {
    name: "Senior UX Designer",
    value: 24,
  },
  {
    name: "Full Stack Developer",
    value: 38,
  },
  {
    name: "Product Manager",
    value: 18,
  },
  {
    name: "Data Scientist",
    value: 27,
  },
]

export function PositionAnalytics() {
  const [selectedPosition, setSelectedPosition] = useState("all")

  return (
    <div className="space-y-4">
      <Tabs defaultValue="time-to-hire">
        <TabsList>
          <TabsTrigger value="time-to-hire">Time to Hire</TabsTrigger>
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="conversion">Conversion Rate</TabsTrigger>
        </TabsList>

        <TabsContent value="time-to-hire" className="space-y-4">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeToHireData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  label={{ value: "Days", angle: -90, position: "insideLeft" }}
                />
                <Tooltip />
                {positions.map((position, index) => {
                  const colors = [
                    "hsl(var(--primary))",
                    "hsl(var(--destructive))",
                    "hsl(var(--warning))",
                    "hsl(var(--secondary))",
                  ]
                  return (
                    <Line
                      key={position}
                      type="monotone"
                      dataKey={position}
                      stroke={colors[index % colors.length]}
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                  )
                })}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="applicants">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applicantsData}>
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="conversion">
          <div className="flex items-center justify-center h-[300px]">
            <p className="text-muted-foreground">Conversion rate data will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

