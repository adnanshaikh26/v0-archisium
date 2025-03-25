"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Home, Landmark, PenTool, Trees, Users } from "lucide-react"

const services = [
  {
    icon: <PenTool className="h-10 w-10" />,
    title: "Architectural Design",
    description:
      "From concept to completion, we create innovative designs that balance aesthetics, functionality, and sustainability.",
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Residential Architecture",
    description: "Custom homes, renovations, and multi-family housing designed to enhance the way people live.",
  },
  {
    icon: <Building2 className="h-10 w-10" />,
    title: "Commercial Architecture",
    description:
      "Office buildings, retail spaces, and hospitality projects that support business goals and user experience.",
  },
  {
    icon: <Landmark className="h-10 w-10" />,
    title: "Public & Cultural",
    description: "Museums, educational facilities, and civic buildings that serve communities and inspire visitors.",
  },
  {
    icon: <Trees className="h-10 w-10" />,
    title: "Landscape Integration",
    description: "Seamlessly blending architecture with the natural environment to create harmonious outdoor spaces.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Consultation Services",
    description: "Expert advice on feasibility studies, site analysis, and regulatory compliance for your project.",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive architectural solutions tailored to your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive range of architectural services is designed to meet the unique needs of each client and
              project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted/30 p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              We follow a collaborative, client-centered approach to bring your architectural vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Discovery & Concept",
                    description:
                      "We begin by understanding your vision, needs, and constraints through in-depth consultation and site analysis.",
                  },
                  {
                    number: "02",
                    title: "Schematic Design",
                    description:
                      "We develop preliminary design concepts that explore spatial relationships, scale, and form.",
                  },
                  {
                    number: "03",
                    title: "Design Development",
                    description:
                      "The chosen concept is refined with detailed drawings, material selections, and technical specifications.",
                  },
                  {
                    number: "04",
                    title: "Construction Documentation",
                    description:
                      "We prepare comprehensive drawings and specifications for permitting, bidding, and construction.",
                  },
                  {
                    number: "05",
                    title: "Construction Administration",
                    description:
                      "We oversee the construction process to ensure the project is built according to design intent and quality standards.",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="text-3xl font-bold text-primary">{step.number}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4]"
            >
              <Image
                src="/images/processImg.jpg"
                alt="Our design process"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-10 text-gray-300">
              Contact us today to schedule a consultation and discuss how our services can bring your architectural
              vision to life.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-gray-200">
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

