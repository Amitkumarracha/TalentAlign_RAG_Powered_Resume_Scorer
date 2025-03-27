import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResumeCard } from "@/components/resume-card"
import { SkillsChart } from "@/components/skills-chart"
import { StatsCards } from "@/components/stats-cards"

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-secondary">Dashboard</h1>
      </div>

      <StatsCards />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="animate-slide-down">
          <TabsTrigger value="overview" className="transition-all duration-200">
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" className="transition-all duration-200">
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" className="transition-all duration-200">
            Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 card-hover animate-slide-up">
              <CardHeader>
                <CardTitle className="text-secondary">Recent Resume Uploads</CardTitle>
                <CardDescription>View recently uploaded resumes and their match percentages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ResumeCard
                  name="Sarah Johnson"
                  position="Senior UX Designer"
                  matchPercentage={92}
                  date="2 hours ago"
                />
                <ResumeCard
                  name="Michael Chen"
                  position="Full Stack Developer"
                  matchPercentage={87}
                  date="5 hours ago"
                />
                <ResumeCard name="Emily Rodriguez" position="Product Manager" matchPercentage={78} date="Yesterday" />
                <ResumeCard name="David Kim" position="Data Scientist" matchPercentage={95} date="Yesterday" />
              </CardContent>
            </Card>
            <Card className="col-span-3 card-hover animate-slide-up" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <CardTitle className="text-secondary">Skill Demand Analytics</CardTitle>
                <CardDescription>Top skills in demand based on open positions</CardDescription>
              </CardHeader>
              <CardContent>
                <SkillsChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3 card-hover animate-slide-up" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <CardTitle className="text-secondary">Hiring Pipeline</CardTitle>
                <CardDescription>Current status of candidates in the hiring process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-secondary">New Applications</div>
                    <div className="text-sm text-muted-foreground">24</div>
                  </div>
                  <Progress value={24} max={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-secondary">Screening</div>
                    <div className="text-sm text-muted-foreground">18</div>
                  </div>
                  <Progress value={18} max={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-secondary">Interview</div>
                    <div className="text-sm text-muted-foreground">12</div>
                  </div>
                  <Progress value={12} max={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-secondary">Offer</div>
                    <div className="text-sm text-muted-foreground">5</div>
                  </div>
                  <Progress value={5} max={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-secondary">Hired</div>
                    <div className="text-sm text-muted-foreground">3</div>
                  </div>
                  <Progress value={3} max={100} className="h-2" />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-4 card-hover animate-slide-up" style={{ animationDelay: "300ms" }}>
              <CardHeader>
                <CardTitle className="text-secondary">Open Positions</CardTitle>
                <CardDescription>Current open positions and application status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 text-sm font-medium text-secondary">
                    <div>Position</div>
                    <div>Applications</div>
                    <div>Status</div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4 text-sm">
                    <div>Senior UX Designer</div>
                    <div>12</div>
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      Active
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4 text-sm">
                    <div>Full Stack Developer</div>
                    <div>24</div>
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      Active
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4 text-sm">
                    <div>Product Manager</div>
                    <div>8</div>
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      Active
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4 text-sm">
                    <div>Data Scientist</div>
                    <div>15</div>
                    <div className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                      Active
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4 animate-fade-in">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-secondary">Analytics Content</CardTitle>
              <CardDescription>Detailed analytics about your hiring process</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics dashboard content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4 animate-fade-in">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-secondary">Reports</CardTitle>
              <CardDescription>Generate and view reports about your hiring process</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Reports content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

