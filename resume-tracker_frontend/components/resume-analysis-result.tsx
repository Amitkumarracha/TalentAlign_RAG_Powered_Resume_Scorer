import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

interface ResumeAnalysisResultProps {
  result: {
    name: string
    matchPercentage: number
    skills: string[]
    experience: string
    education: string
    strengths: string[]
    gaps: string[]
  }
}

export function ResumeAnalysisResult({ result }: ResumeAnalysisResultProps) {
  return (
    <Card className="card-hover overflow-hidden border-muted">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">{result.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {result.experience} • {result.education}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{result.matchPercentage}%</div>
                <p className="text-xs text-muted-foreground">Match Score</p>
              </div>
            </div>

            <div>
              <Progress
                value={result.matchPercentage}
                className="h-2"
                indicatorClassName={
                  result.matchPercentage >= 90
                    ? "bg-primary"
                    : result.matchPercentage >= 75
                      ? "bg-amber-500"
                      : "bg-destructive"
                }
              />
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2 text-secondary">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {result.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-accent text-accent-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-[300px] space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2 text-secondary">Strengths</h4>
              <ul className="text-sm space-y-1">
                {result.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary text-lg leading-tight">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2 text-secondary">Gaps</h4>
              <ul className="text-sm space-y-1">
                {result.gaps.map((gap, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-destructive text-lg leading-tight">•</span>
                    <span>{gap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full mt-4 transition-all duration-200 hover-lift">Download Analysis</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

