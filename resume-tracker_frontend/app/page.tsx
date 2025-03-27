import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart3, FileText, Search, Upload } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 flex flex-col items-center text-center space-y-8 animate-fade-in">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-secondary">
            Smart Hiring Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">AI-Powered Resume Analysis and Insights</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="gap-2 animate-slide-up hover-lift">
            <Link href="/upload">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="animate-slide-up hover-lift delay-100">
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center text-secondary">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Search className="h-10 w-10" />}
            title="AI Matching"
            description="Automatically match candidates to job descriptions with advanced AI algorithms."
            delay={0}
          />
          <FeatureCard
            icon={<FileText className="h-10 w-10" />}
            title="Resume Analysis"
            description="Extract key skills, experience, and qualifications from resumes instantly."
            delay={100}
          />
          <FeatureCard
            icon={<Upload className="h-10 w-10" />}
            title="Smart Weightage"
            description="Customize importance of different criteria for precise candidate matching."
            delay={200}
          />
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10" />}
            title="HR Analytics"
            description="Gain insights into your hiring process with detailed analytics."
            delay={300}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground rounded-lg p-8 md:p-12 text-center space-y-6 animate-scale">
        <h2 className="text-3xl font-bold">Revolutionize Your Hiring Process Today!</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Join hundreds of HR professionals who have streamlined their hiring process with our AI-powered platform.
        </p>
        <Button asChild size="lg" variant="secondary" className="hover-lift">
          <Link href="/upload">Try Demo</Link>
        </Button>
      </section>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) {
  return (
    <Card className={`card-hover animate-slide-up hover:border-primary/50`} style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="pt-6 text-center space-y-4">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit text-primary">{icon}</div>
        <h3 className="text-xl font-semibold text-secondary">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

