import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileText } from "lucide-react"

interface ResumeCardProps {
  name: string
  position: string
  matchPercentage: number
  date: string
}

export function ResumeCard({ name, position, matchPercentage, date }: ResumeCardProps) {
  return (
    <Card className="hover:bg-accent/30 transition-all duration-300 hover-lift">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-secondary">{name}</h4>
              <span className="text-xs text-muted-foreground">{date}</span>
            </div>
            <p className="text-sm text-muted-foreground">{position}</p>
            <div className="pt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs">Match Score</span>
                <span className="text-xs font-medium">{matchPercentage}%</span>
              </div>
              <Progress
                value={matchPercentage}
                className="h-1.5"
                indicatorClassName={
                  matchPercentage >= 90 ? "bg-primary" : matchPercentage >= 75 ? "bg-amber-500" : "bg-destructive"
                }
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

