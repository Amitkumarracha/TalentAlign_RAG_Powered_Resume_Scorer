import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, ChevronRight, Mail } from "lucide-react"
import Link from "next/link"

interface CandidateCardProps {
  candidate: {
    id: string
    name: string
    position: string
    matchPercentage: number
    status: string
    skills: string[]
    experience: string
    education: string
  }
}

export function CandidateCard({ candidate }: CandidateCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500"
      case "shortlisted":
        return "bg-amber-500"
      case "interviewed":
        return "bg-purple-500"
      case "hired":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{candidate.name}</h3>
                  <Badge className={`${getStatusColor(candidate.status)} text-white capitalize`}>
                    {candidate.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{candidate.position}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">{candidate.matchPercentage}%</div>
                <p className="text-xs text-muted-foreground">Match</p>
              </div>
            </div>

            <div className="mt-2">
              <Progress
                value={candidate.matchPercentage}
                className="h-1.5"
                indicatorClassName={
                  candidate.matchPercentage >= 90
                    ? "bg-green-500"
                    : candidate.matchPercentage >= 75
                      ? "bg-amber-500"
                      : "bg-red-500"
                }
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {candidate.skills.slice(0, 4).map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
              {candidate.skills.length > 4 && <Badge variant="outline">+{candidate.skills.length - 4} more</Badge>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 md:w-auto">
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </Button>
            <Button asChild size="sm">
              <Link href={`/candidates/${candidate.id}`}>
                View
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

