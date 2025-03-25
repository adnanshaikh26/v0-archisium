"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projectsData } from "@/lib/data"

export default function ProjectDetailsPage() {
  const { id } = useParams()
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const foundProject = projectsData.find((p) => p.id === id)
      if (foundProject) {
        setProject(foundProject)
      } else {
        // If project not found, redirect to projects page
        router.push("/projects")
      }
      setLoading(false)
    }
  }, [id, router])

  if (loading) {
    return (
      <div className="pt-20 flex items-center justify-center min-h-[70vh]">
        <div className="animate-pulse">Loading project details...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="pt-20 flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Find next and previous projects for navigation
  const currentIndex = projectsData.findIndex((p) => p.id === id)
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length]
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <Image
          src={project.coverImage || "/placeholder.svg?height=1200&width=800"}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container px-4 sm:px-6 lg:px-8 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">{project.title}</h1>
              <p className="text-xl text-white/80">{project.category}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                {project.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Year</dt>
                    <dd>{project.year}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Size</dt>
                    <dd>{project.size}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">Client</dt>
                    <dd>{project.client}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Services Provided</h3>
                <ul className="space-y-2">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Project Gallery
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image || "/placeholder.svg?height=800&width=800"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-12 md:py-20 bg-background border-t">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Button asChild variant="outline" className="mb-4 sm:mb-0">
              <Link href={`/projects/${prevProject.id}`} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous Project
              </Link>
            </Button>

            <Button asChild>
              <Link href="/projects" className="flex items-center gap-2">
                All Projects
              </Link>
            </Button>

            <Button asChild variant="outline" className="mt-4 sm:mt-0">
              <Link href={`/projects/${nextProject.id}`} className="flex items-center gap-2">
                Next Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

