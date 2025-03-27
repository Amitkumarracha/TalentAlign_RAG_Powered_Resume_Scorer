"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { FileText, Upload, X } from "lucide-react"

interface ResumeUploaderProps {
  onFilesAdded: (files: File[]) => void
  files: File[]
  onRemoveFile: (index: number) => void
}

export function ResumeUploader({ onFilesAdded, files, onRemoveFile }: ResumeUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Filter for PDF files
      const pdfFiles = acceptedFiles.filter((file) => file.type === "application/pdf")
      onFilesAdded(pdfFiles)
    },
    [onFilesAdded],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: true,
  })

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${
          isDragActive
            ? "border-primary bg-primary/10"
            : "border-muted-foreground/20 hover:border-primary/50 hover:bg-muted/50"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2 animate-pulse-subtle">
          <Upload className="h-10 w-10 text-primary" />
          <h3 className="font-medium text-lg text-secondary">Drag & drop resumes here</h3>
          <p className="text-sm text-muted-foreground">or click to browse (PDF files only)</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2 animate-slide-up">
          <h4 className="font-medium text-secondary">Uploaded Resumes ({files.length})</h4>
          <div className="grid gap-2 max-h-[300px] overflow-y-auto p-1">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between p-3 bg-muted rounded-md transition-all duration-200 hover:bg-accent animate-scale"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium truncate max-w-[200px] md:max-w-[400px]">{file.name}</span>
                  <span className="text-xs text-muted-foreground">({(file.size / 1024).toFixed(0)} KB)</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemoveFile(index)}
                  className="transition-all duration-200 hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove file</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

