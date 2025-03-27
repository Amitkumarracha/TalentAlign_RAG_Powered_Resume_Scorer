"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { ResumeUploader } from "@/components/resume-uploader"
import { ResumeAnalysisResult } from "@/components/resume-analysis-result"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface WeightageField {
  name: string
  label: string
  value: number
}

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any[]>([])
  const [jobTitle, setJobTitle] = useState("")
  const [industry, setIndustry] = useState("")

  const [weightageFields, setWeightageFields] = useState<WeightageField[]>([
    { name: "jobTitle", label: "Job Title", value: 80 },
    { name: "industry", label: "Industry", value: 70 },
    { name: "experienceYears", label: "Experience Years", value: 85 },
    { name: "education", label: "Educational Qualification", value: 75 },
    { name: "responsibilities", label: "Key Responsibilities", value: 90 },
    { name: "technicalSkills", label: "Technical Skills", value: 95 },
    { name: "behavioralSkills", label: "Behavioral Skills", value: 65 },
    { name: "certifications", label: "Certifications", value: 60 },
  ])

  const handleFilesAdded = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles])
  }

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
  }

  const updateWeightage = (index: number, value: number[]) => {
    setWeightageFields((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], value: value[0] }
      return updated
    })
  }

  const analyzeResumes = async () => {
    if (files.length === 0) return

    setIsAnalyzing(true)

    const mockResults = []

    for (const file of files) {
      try {
        // In a real application, you would extract text from the resume file
        // and send it to the AI model for analysis
        const resumeText = `Resume for ${file.name.replace(".pdf", "")}`

        // This is a simplified example of how you might use the AI SDK
        // In a production app, you would process the actual resume content
        const { text } = await generateText({
          model: openai("gpt-4o"),
          prompt: `
            Analyze this resume for a ${jobTitle} position in ${industry} with the following weightage criteria:
            ${weightageFields.map((field) => `- ${field.label}: ${field.value}%`).join("\n")}
            
            Resume content: ${resumeText}
            
            Provide a JSON response with the following structure:
            {
              "name": "Candidate Name",
              "matchPercentage": 85,
              "skills": ["Skill 1", "Skill 2", "Skill 3"],
              "experience": "5 years",
              "education": "Bachelor's Degree",
              "strengths": ["Strength 1", "Strength 2"],
              "gaps": ["Gap 1", "Gap 2"]
            }
          `,
        })

        // Parse the AI response
        // In a real app, you'd ensure proper error handling
        const result = JSON.parse(text)
        mockResults.push(result)
      } catch (error) {
        console.error("Error analyzing resume:", error)
        // Fallback to mock data in case of error
        mockResults.push({
          name: file.name.replace(".pdf", ""),
          matchPercentage: Math.floor(Math.random() * 30) + 70,
          skills: ["JavaScript", "React", "Node.js", "UI/UX Design"],
          experience: "4 years",
          education: "Bachelor's Degree",
          strengths: ["Frontend Development", "Responsive Design"],
          gaps: ["Leadership Experience", "Project Management"],
        })
      }
    }

    setAnalysisResults(mockResults)
    setIsAnalyzing(false)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-secondary">Resume Upload & Analysis</h1>
      </div>

      <Tabs defaultValue="upload" className="space-y-4">
        <TabsList className="animate-slide-down">
          <TabsTrigger value="upload" className="transition-all duration-200">
            Upload
          </TabsTrigger>
          <TabsTrigger value="results" disabled={analysisResults.length === 0} className="transition-all duration-200">
            Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-4 animate-scale">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-secondary">Job Requirements</CardTitle>
              <CardDescription>Specify the job requirements and set weightage for different criteria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Select value={jobTitle} onValueChange={setJobTitle}>
                    <SelectTrigger id="jobTitle" className="transition-all duration-200">
                      <SelectValue placeholder="Select job title" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-engineer">Software Engineer</SelectItem>
                      <SelectItem value="product-manager">Product Manager</SelectItem>
                      <SelectItem value="data-scientist">Data Scientist</SelectItem>
                      <SelectItem value="ux-designer">UX Designer</SelectItem>
                      <SelectItem value="marketing-specialist">Marketing Specialist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger id="industry" className="transition-all duration-200">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <textarea
                  id="description"
                  className="w-full min-h-[100px] p-2 border rounded-md bg-muted transition-all duration-200 focus:border-primary"
                  placeholder="Enter detailed job description..."
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-secondary">Criteria Weightage</h3>
                <p className="text-sm text-muted-foreground">
                  Set the importance (1-100) of each criterion for candidate matching
                </p>

                <div className="space-y-6">
                  {weightageFields.map((field, index) => (
                    <div
                      key={field.name}
                      className="space-y-2 animate-slide-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex justify-between">
                        <Label htmlFor={field.name}>{field.label}</Label>
                        <span className="text-sm font-medium text-primary">{field.value}%</span>
                      </div>
                      <Slider
                        id={field.name}
                        min={1}
                        max={100}
                        step={1}
                        value={[field.value]}
                        onValueChange={(value) => updateWeightage(index, value)}
                        className="py-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-secondary">Upload Resumes</CardTitle>
              <CardDescription>Drag and drop resumes or click to browse</CardDescription>
            </CardHeader>
            <CardContent>
              <ResumeUploader onFilesAdded={handleFilesAdded} files={files} onRemoveFile={handleRemoveFile} />

              <div className="mt-4 flex justify-end">
                <Button
                  onClick={analyzeResumes}
                  disabled={files.length === 0 || isAnalyzing || !jobTitle || !industry}
                  className="transition-all duration-300 hover-lift"
                >
                  {isAnalyzing ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Resumes"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-4 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="text-secondary">Analysis Results</CardTitle>
              <CardDescription>AI-powered resume analysis and matching results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {analysisResults.map((result, index) => (
                  <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <ResumeAnalysisResult result={result} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

