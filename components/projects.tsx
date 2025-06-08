"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState("All")

  // Custom projects as specified
  const projects = [
    {
      title: "DriveEase",
      description:
        "A comprehensive car rental platform that simplifies the vehicle rental process. Features include user authentication, advanced vehicle browsing with filters, real-time booking management, secure payment processing, and responsive design for seamless mobile experience.",
      image: "/project-images/driveease.png",
      tags: ["React.js", "CSS3", "React Router", "ES6+", "Responsive Design"],
      category: "Web App",
      liveLink: "https://drive-ease-six.vercel.app/",
      githubLink: "https://github.com/Jaydeep-sardar/DriveEase",
      techStack:
        "⚛️ React.js (Component-based architecture), 🎨 CSS3 (Custom styling with animations), 🔄 React Router (Client-side routing), 🎯 Modern JavaScript (ES6+ features), 📱 Responsive Design (Mobile-first approach), 🎨 CSS Grid & Flexbox (Advanced layouts)",
    },
    {
      title: "EduSync",
      description:
        "A modern educational platform designed to synchronize learning experiences. Features include course management, student progress tracking, interactive learning modules, real-time collaboration tools, and comprehensive analytics dashboard for educators.",
      image: "/project-images/edusync.png",
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      category: "Education Platform",
      liveLink: "https://edusync-ashy.vercel.app/",
      githubLink: "https://github.com/Jaydeep-sardar/EduSync",
      techStack:
        "⚛️ React.js (Frontend framework), ⚡ Next.js (Full-stack framework), 🔷 TypeScript (Type safety), 🎨 Tailwind CSS (Utility-first styling), 🟢 Node.js (Backend runtime), 📊 Real-time data synchronization, 🔐 Authentication & Authorization",
    },
    {
      title: "Vitality Health Dashboard",
      description:
        "A comprehensive health monitoring dashboard that provides real-time insights into patient data, medical records, appointment scheduling, and health analytics. Features include interactive charts, patient management, and secure data handling.",
      image: "/project-images/vitality-health-dashboard.png",
      tags: ["React.js", "TypeScript", "Chart.js", "Material-UI", "REST API"],
      category: "Healthcare",
      liveLink: "https://vitality-health-dashboard.vercel.app/",
      githubLink: "https://github.com/Jaydeep-sardar/Vitality-Health-Dashboard",
      techStack:
        "⚛️ React.js (Component architecture), 🔷 TypeScript (Type-safe development), 📊 Chart.js (Data visualization), 🎨 Material-UI (Component library), 🔗 REST API (Data integration), 📱 Responsive Design, 🔐 Secure data handling",
    },
    {
      title: "Real Time Language Translator",
      description:
        "An advanced translation application that provides instant language translation with speech recognition capabilities. Features include support for 50+ languages, text-to-speech functionality, conversation mode, and offline translation capabilities.",
      image: "/project-images/translator.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Google Translate API", "Speech Recognition"],
      category: "Tool",
      liveLink: "#",
      githubLink: "https://github.com/Jaydeep-sardar/Real-Time-Language-Translator",
      techStack:
        "💡 HTML5 (Semantic structure), 🎨 CSS3 (Modern styling with variables), 🧠 JavaScript (Vanilla JS with ES6+), ⚡ Google Translate API (Translation service), 🎤 Speech Recognition API, 🔊 Text-to-Speech API",
    },
    {
      title: "Instagram Clone",
      description:
        "A feature-rich social media platform replicating Instagram's core functionality. Includes user profiles, photo uploads with filters, real-time likes and comments, story features, direct messaging, and explore page with trending content.",
      image: "/project-images/instagram-clone.png",
      tags: ["HTML5", "TailwindCSS", "JavaScript", "Font Awesome", "Local Storage"],
      category: "Social Media",
      liveLink: "#",
      githubLink: "https://github.com/Jaydeep-sardar/Instagram-Clone",
      techStack:
        "📝 HTML5 (Semantic markup), 🎨 TailwindCSS (Utility-first styling), ⚙️ JavaScript (Dynamic interactions), 🧪 Font Awesome (Icon library), 💾 Local Storage (Data persistence), 📱 Mobile-responsive design",
    },
    {
      title: "Brew Time Coffee Shop",
      description:
        "A modern e-commerce website for a premium coffee shop featuring online ordering system, menu management, customer loyalty program, and integrated payment processing. Includes coffee customization options and delivery tracking.",
      image: "/project-images/brew-time.png",
      tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
      category: "E-Commerce",
      liveLink: "#",
      githubLink: "https://github.com/Jaydeep-sardar/Brew-Time-Coffee-Shop",
      techStack:
        "📝 HTML5 (Semantic structure), 🎨 CSS3 (Custom animations & styling), 🧩 Bootstrap 5 (Responsive framework), ⚡ JavaScript (Interactive features), 🛒 E-commerce functionality, 📱 Mobile-optimized design",
    },
    {
      title: "Butter Bliss",
      description:
        "An elegant bakery website featuring online ordering system, custom cake design tools, delivery scheduling, and customer reviews. Includes product catalog with detailed descriptions, nutritional information, and special occasion packages.",
      image: "/project-images/butter-bliss.png",
      tags: ["HTML5", "CSS3", "Bootstrap 5", "jQuery"],
      category: "E-Commerce",
      liveLink: "#",
      githubLink: "https://github.com/Jaydeep-sardar/Butter-Bliss",
      techStack:
        "✅ HTML5 (Semantic markup), 🎨 CSS3 (Custom styling & animations), ⚙️ Bootstrap 5 (Responsive grid system), 💫 jQuery (Enhanced interactions), 🛒 Online ordering system",
    },
  ]

  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  }

  // Function to get a color for a tag
  const getTagColor = (tag: string) => {
    const tagColors: Record<string, string> = {
      JavaScript: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300",
      "ES6+": "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300",
      "React.js": "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300",
      "React Router": "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300",
      HTML5: "bg-orange-500/20 text-orange-700 dark:text-orange-300",
      CSS3: "bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
      Python3: "bg-blue-500/20 text-blue-700 dark:text-blue-300",
      "Google Translate API": "bg-blue-500/20 text-blue-700 dark:text-blue-300",
      TailwindCSS: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300",
      "Font Awesome": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
      "Bootstrap 5": "bg-purple-500/20 text-purple-700 dark:text-purple-300",
      TypeScript: "bg-blue-500/20 text-blue-700 dark:text-blue-300",
      "Chart.js": "bg-green-500/20 text-green-700 dark:text-green-300",
      "Material-UI": "bg-red-500/20 text-red-700 dark:text-red-300",
      "REST API": "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300",
      jQuery: "bg-purple-500/20 text-purple-700 dark:text-purple-300",
      "Speech Recognition": "bg-green-500/20 text-green-700 dark:text-green-300",
      "Responsive Design": "bg-pink-500/20 text-pink-700 dark:text-pink-300",
      "Next.js": "bg-gray-500/20 text-gray-700 dark:text-gray-300",
      "Node.js": "bg-green-500/20 text-green-700 dark:text-green-300",
    }

    return tagColors[tag] || "bg-primary/10 text-primary"
  }

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* 3D decoration */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 overflow-hidden">
        <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M10,30 C20,10 30,10 50,20 C70,30 80,30 90,20"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M10,50 C20,30 30,30 50,40 C70,50 80,50 90,40"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M10,70 C20,50 30,50 50,60 C70,70 80,70 90,60"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Here are my featured projects. Each one represents a different challenge and showcases various skills and
            technologies.
          </p>

          {/* Category filters */}
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category ? "bg-primary text-white shadow-md" : "bg-background hover:bg-primary/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title + index}
              variants={itemVariants}
              className="h-full"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="overflow-hidden h-full border-none shadow-lg group relative bg-transparent">
                {/* Card background with blur effect */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg z-0"></div>

                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity z-10 p-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button asChild size="sm" variant="secondary" className="rounded-full">
                            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button asChild size="sm" variant="secondary" className="rounded-full">
                            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 bg-background/50 backdrop-blur-sm relative -mt-6 mx-3 rounded-lg">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`text-xs px-3 py-1 rounded-full ${getTagColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-3 border-t border-border">
                      <h4 className="text-xs font-semibold text-foreground/60 mb-1">TECH STACK</h4>
                      <p className="text-xs text-foreground/70">{project.techStack}</p>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 shadow-md hover:shadow-lg group">
            <Link href="https://github.com/Jaydeep-sardar" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              <span className="group-hover:text-primary transition-colors">View More on GitHub</span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
