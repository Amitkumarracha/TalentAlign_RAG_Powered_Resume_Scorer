"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SkillMatchChart } from "@/components/skill-match-chart"
import { Calendar, Mail, Phone, User } from "lucide-react"

// Mock candidate data
const mockCandidates = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    position: "Senior UX Designer",
    matchPercentage: 92,
    status: "shortlisted",
    skills: ["UI/UX", "Figma", "User Research", "Prototyping", "Wireframing", "Design Systems"],
    skillMatches: [
      { name: "UI/UX", match: 95 },
      { name: "Figma", match: 100 },
      { name: "User Research", match: 90 },
      { name: "Prototyping", match: 85 },
      { name: "Wireframing", match: 95 },
      { name: "Design Systems", match: 80 },
    ],
    experience: [
      {
        title: "UX Designer",
        company: "Tech Solutions Inc.",
        duration: "2018-2023",
        description: "Led design for multiple products, conducted user research, and created design systems.",
      },
      {
        title: "UI Designer",
        company: "Creative Agency",
        duration: "2016-2018",
        description: "Designed interfaces for web and mobile applications.",
      },
    ],
    education: [
      {
        degree: "Master's in Human-Computer Interaction",
        institution: "Stanford University",
        year: "2016",
      },
      {
        degree: "Bachelor's in Graphic Design",
        institution: "Rhode Island School of Design",
        year: "2014",
      },
    ],
    strengths: ["Strong portfolio", "Excellent communication", "Design systems expertise"],
    gaps: ["Limited experience with AR/VR", "No management experience"],
    interviewQuestions: [
      "Can you describe your process for creating a design system?",
      "How do you balance user needs with business requirements?",
      "Tell me about a challenging design problem you solved recently.",
      "How do you collaborate with developers to ensure design implementation?",
    ],
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    phone: "+1 (555) 987-6543",
    position: "Full Stack Developer",
    matchPercentage: 87,
    status: "new",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "TypeScript", "GraphQL"],
    skillMatches: [
      { name: "JavaScript", match: 95 },
      { name: "React", match: 90 },
      { name: "Node.js", match: 85 },
      { name: "MongoDB", match: 80 },
      { name: "TypeScript", match: 75 },
      { name: "GraphQL", match: 70 },
    ],
    experience: [
      {
        title: "Frontend Developer",
        company: "Web Solutions Ltd.",
        duration: "2019-2023",
        description: "Developed responsive web applications using React and TypeScript.",
      },
      {
        title: "Junior Developer",
        company: "Tech Startup",
        duration: "2017-2019",
        description: "Built and maintained full-stack applications.",
      },
    ],
    education: [
      {
        degree: "Bachelor's in Computer Science",
        institution: "University of California, Berkeley",
        year: "2017",
      },
    ],
    strengths: ["Strong technical skills", "Open source contributor", "Quick learner"],
    gaps: ["Limited experience with cloud services", "No enterprise experience"],
    interviewQuestions: [
      "Explain your approach to state management in React applications.",
      "How do you handle API error states in your applications?",
      "Describe a complex technical challenge you've overcome.",
      "How do you stay updated with the latest web development trends?",
    ],
  },
]

export default function CandidateDetailsPage() {
  const params = useParams();
  const candidateId = params.id as string;
  
  // Find the candidate with the matching ID
  const candidate = mockCandidates.find(c => c.id === candidateId) || mockCandidates[0];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">{candidate.name}</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Interview
          </Button>
          <Button size="sm">Update Status</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Candidate Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{candidate.name}</h3>
                <p className="text-sm text-muted-foreground">{candidate.position}</p>
              </div>
            </div>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{candidate.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                <span className="text-sm">{candidate.phone}</span>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Match Score</span>
                <span className="text-sm font-medium">{candidate.matchPercentage}%</span>
              </div>
              <Progress value={candidate.matchPercentage} className="h-2" />
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">Status</h4>
              <Badge className="capitalize">{candidate.status}</Badge>
            </div>
            
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader className="p-4">
            <Tabs defaultValue="skills">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="interview">Interview</TabsTrigger>
              </TabsList>
            </CardHeader>
          
          <CardContent>
            <TabsContent value="skills" className="space-y-4 mt-0">
              <div>
                <h3 className="text-lg font-medium mb-4">Skill Matching Analysis</h3>
                <SkillMatchChart skills={candidate.skillMatches} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="text-md font-medium mb-2">Strengths</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {candidate.strengths.map((strength, index) => (
                      <li key={index} className="text-sm">{strength}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-medium mb-2">Gaps</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {candidate.gaps.map((gap, index) => (
                      <li key={index} className="text-sm">{gap}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="experience" className="mt-0">
              <h3 className="text-lg font-medium mb-4">Work Experience</h3>
              <div className="space-y-6">
                {candidate.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4 pb-2">
                    <h4 className="text-md font-medium">{exp.title}</h4>
                    <div className="flex justify-between">
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                    <p className="text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="mt-0">
              <h3 className="text-lg font-medium mb-4">Education</h3>
              <div className="space-y-6">
                {candidate.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4 pb-2">
                    <h4 className="text-md font-medium">{edu.degree}</h4>
                    <div className="flex justify-between">
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="interview" className="mt-0">
              <h3 className="text-lg font-medium mb-4">AI-Generated Interview Questions</h3>
              <div className="space-y-4">
                {candidate.interviewQuestions.map((question, index) => (
                  <div key={index} className="p-3 bg-muted rounded-md">
                    <p className="text-sm">{question}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

