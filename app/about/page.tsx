"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  {
    name: "Zoher Siamwala",
    role: "Principal Architect",
    bio: "With over 15 years of experience, Zoher leads our design team with a focus on sustainable urban architecture.",
    image: "/images/siamwala.jpg",
  },
  // {
  //   name: "David Chen",
  //   role: "Design Director",
  //   bio: "David brings a unique perspective to each project, blending modern aesthetics with functional design principles.",
  //   image: "/placeholder.svg?height=400&width=400",
  // },
  // {
  //   name: "Maria Rodriguez",
  //   role: "Project Manager",
  //   bio: "Maria ensures that every project is delivered on time and exceeds client expectations through meticulous planning.",
  //   image: "/placeholder.svg?height=400&width=400",
  // },
  // {
  //   name: "James Wilson",
  //   role: "Sustainability Specialist",
  //   bio: "James focuses on incorporating eco-friendly solutions and sustainable materials into our architectural designs.",
  //   image: "/placeholder.svg?height=400&width=400",
  // },
]

export default function AboutPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">About The Archisium</h1>
            <p className="text-xl text-muted-foreground">Founded in the mid-1960s by the visionary architect Yusuf Siamwala, The Archisium is a premier architectural consultancy firm based in Mumbai, Maharashtra. With a legacy of excellence spanning over five decades.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square"
            >
              <Image
                // src="/placeholder.svg?height=800&width=800"
                src="/images/azamImg.jpeg"
                alt="The Archisium studio"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Expertise</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                With a team of seasoned professionals, we deliver projects that encompass:
                </p>
                <p>
                Residential Townships: Large-scale townships in India and internationally (e.g., Aga Jari, Iran).
                </p>
                <p>
                Commercial and Industrial Developments: Office towers, guest houses, and factories.
                </p>
                <p>
                Restoration Projects: Revitalizing historic structures and landscapes.
                </p>
                <p>
                Educational Facilities: Campus planning for institutions like Miami University, USA.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground">
              At The Archisium, we believe that great architecture goes beyond aesthetics. It's about creating spaces
              that inspire, function beautifully, and stand the test of time.
              
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace new ideas, technologies, and approaches to push the boundaries of what's possible in architectural design.",
              },
              {
                title: "Sustainability",
                description:
                  "Environmental responsibility is at the core of our practice. We design with the future in mind, prioritizing sustainable materials and energy-efficient solutions.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of collaboration. By working closely with clients, engineers, and contractors, we create designs that exceed expectations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Our diverse team of architects and designers brings passion, expertise, and creativity to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-lg mb-10 text-gray-300">
              Ready to start your architectural journey with The Archisium? We'd love to hear about your project.
            </p>
            <Button asChild size="lg" className="rounded-full bg-white text-black hover:bg-gray-200">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

