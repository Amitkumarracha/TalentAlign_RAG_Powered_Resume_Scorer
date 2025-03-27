import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResumeProcessingChart } from "@/components/resume-processing-chart"
import { PipelineChart } from "@/components/pipeline-chart"
import { SkillHeatmap } from "@/components/skill-heatmap"
import { PositionAnalytics } from "@/components/position-analytics"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="positions">Positions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Resume Processing Metrics</CardTitle>
                <CardDescription>Time taken per resume and parsing accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <ResumeProcessingChart />
              </CardContent>
            </Card>

            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Pipeline Visualization</CardTitle>
                <CardDescription>Candidate flow through hiring stages</CardDescription>
              </CardHeader>
              <CardContent>
                <PipelineChart />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Skill Analysis Heatmap</CardTitle>
              <CardDescription>Identify top skills across candidates</CardDescription>
            </CardHeader>
            <CardContent>
              <SkillHeatmap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pipeline" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Pipeline Analytics</CardTitle>
              <CardDescription>In-depth analysis of your hiring pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <PipelineChart detailed />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Skill Analysis</CardTitle>
              <CardDescription>Detailed breakdown of candidate skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px]">
                <SkillHeatmap detailed />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="positions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Position-Specific Analytics</CardTitle>
              <CardDescription>Hiring trends and job performance insights</CardDescription>
            </CardHeader>
            <CardContent>
              <PositionAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

