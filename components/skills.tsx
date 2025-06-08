"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", logo: "/logos/react.png" },
        { name: "Next.js", logo: "/logos/nextjs.png" },
        { name: "HTML5", logo: "/logos/html5.png" },
        { name: "CSS3", logo: "/logos/css3.png" },
        { name: "JavaScript", logo: "/logos/javascript.png" },
        { name: "TypeScript", logo: "/logos/typescript.png" },
        { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", logo: "/logos/nodejs.png" },
        { name: "Express", logo: "/logos/express.png" },
        { name: "MongoDB", logo: "/logos/mongodb.png" },
        { name: "REST API", logo: "/logos/api.png" },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git", logo: "/logos/git.png" },
        { name: "GitHub", logo: "/logos/github.png" },
        { name: "Docker", logo: "/logos/docker.png" },
        { name: "CI/CD", logo: "/logos/cicd.png" },
        { name: "Vercel", logo: "/logos/vercel.png" },
        { name: "Netlify", logo: "/logos/netlify.png" },
      ],
      color: "from-orange-500 to-amber-500",
    },
    {
      category: "UI/UX",
      items: [
        { name: "Figma", logo: "/logos/figma.png" },
        { name: "Adobe XD", logo: "/logos/adobexd.png" },
        { name: "Responsive Design", logo: "/logos/responsive.png" },
        { name: "Wireframing", logo: "/logos/wireframe.png" },
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      category: "Mobile",
      items: [
        { name: "React Native", logo: "/logos/reactnative.png" },
        { name: "Progressive Web Apps", logo: "/logos/pwa.png" },
      ],
      color: "from-green-500 to-emerald-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.7,
      },
    },
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* 3D Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>

        {/* 3D floating elements */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-16 h-16 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateX(10deg) rotateY(10deg)",
          }}
        />

        <motion.div
          className="absolute bottom-[30%] left-[10%] w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1000px) rotateX(-15deg) rotateY(-15deg)",
          }}
        />
      </div>

      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="h-full"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3, type: "spring", stiffness: 400 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full overflow-hidden group relative">
                {/* 3D Card Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary)/0.7))`,
                    transform: "translateZ(-10px)",
                  }}
                ></div>
                <div className="absolute inset-[1px] bg-card rounded-lg z-0 group-hover:shadow-inner transition-all duration-500"></div>

                <CardContent className="p-6 relative z-10">
                  <motion.div
                    className="flex items-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      className={`p-3 rounded-full bg-gradient-to-r ${skill.color} text-white mr-3 shadow-lg`}
                      initial={{ boxShadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)` }}
                      animate={{
                        boxShadow: [
                          `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                          `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
                          `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        {skill.category === "Frontend" && (
                          <>
                            <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"></path>
                            <path d="m4 9 4 4-4 4"></path>
                            <path d="m20 9-4 4 4 4"></path>
                            <path d="m12 7 4 10"></path>
                          </>
                        )}
                        {skill.category === "Backend" && (
                          <>
                            <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"></path>
                            <path d="M6 11V7"></path>
                            <path d="M18 11V7"></path>
                            <path d="M12 19v-2"></path>
                            <path d="M12 7V5"></path>
                          </>
                        )}
                        {skill.category === "Tools & DevOps" && (
                          <>
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"></path>
                          </>
                        )}
                        {skill.category === "UI/UX" && (
                          <>
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                          </>
                        )}
                        {skill.category === "Mobile" && (
                          <>
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12.01" y2="18"></line>
                          </>
                        )}
                      </svg>
                    </motion.div>
                    <h3 className="text-xl font-bold">{skill.category}</h3>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    {skill.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        className="flex items-center p-2 rounded-lg hover:bg-muted/50 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 * itemIndex + 0.3,
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(var(--primary), 0.1)",
                          transition: { type: "spring", stiffness: 400, damping: 10 },
                        }}
                      >
                        <div className="w-8 h-8 mr-3 flex items-center justify-center bg-background rounded-md shadow-sm p-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-full w-full text-primary"
                          >
                            {item.name === "React.js" && (
                              <>
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 8v8"></path>
                                <path d="M8 12h8"></path>
                              </>
                            )}
                            {item.name === "Next.js" && (
                              <>
                                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                                <path d="m7 7 5 5"></path>
                              </>
                            )}
                            {item.name === "HTML5" && (
                              <>
                                <path d="m13 2-3.5 20-7-4"></path>
                                <path d="m13 2 3.5 20 7-4"></path>
                                <path d="M13 16V8"></path>
                                <path d="M8 12h10"></path>
                              </>
                            )}
                            {item.name === "CSS3" && (
                              <>
                                <path d="M20 4h-4l-2 12.5L10 4H4"></path>
                                <path d="M4 8h16"></path>
                                <path d="M20 12H8"></path>
                                <path d="M10 16h10"></path>
                              </>
                            )}
                            {item.name === "JavaScript" && (
                              <>
                                <path d="M20 17V7H4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"></path>
                                <path d="M8 12v4"></path>
                                <path d="M12 12v4"></path>
                                <path d="M16 12v4"></path>
                                <path d="M8 12h8"></path>
                              </>
                            )}
                            {item.name === "TypeScript" && (
                              <>
                                <path d="M20 17V7H4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"></path>
                                <path d="M12 7v8"></path>
                                <path d="M8 11h8"></path>
                                <path d="M8 15h8"></path>
                              </>
                            )}
                            {item.name === "Tailwind CSS" && (
                              <>
                                <path d="M6.5 6.5h11"></path>
                                <path d="M6.5 12h11"></path>
                                <path d="M6.5 17.5h11"></path>
                              </>
                            )}
                            {item.name === "Node.js" && (
                              <>
                                <path d="M12 22v-5"></path>
                                <path d="M9 8V5.5a2.5 2.5 0 0 1 5 0V8"></path>
                                <path d="M6 12V8h12v4"></path>
                                <path d="M6 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"></path>
                              </>
                            )}
                            {item.name === "Express" && (
                              <>
                                <path d="M21 12V7H3v10h18"></path>
                                <path d="M3 8h18"></path>
                                <path d="M21 11H3"></path>
                                <path d="M21 16H3"></path>
                              </>
                            )}
                            {item.name === "MongoDB" && (
                              <>
                                <path d="M12 3v19"></path>
                                <path d="M5 8h14"></path>
                                <path d="M5 12h14"></path>
                                <path d="M5 16h14"></path>
                              </>
                            )}
                            {item.name === "REST API" && (
                              <>
                                <path d="M18 20V4m-9 16V4"></path>
                                <path d="M14 9h-4"></path>
                                <path d="M14 15h-4"></path>
                              </>
                            )}
                            {item.name === "Git" && (
                              <>
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-3a2.5 2.5 0 0 0-5 0V12"></path>
                                <path d="M8 12v1.5a2.5 2.5 0 0 1-5 0v-3a2.5 2.5 0 0 1 5 0V12"></path>
                              </>
                            )}
                            {item.name === "GitHub" && (
                              <>
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                              </>
                            )}
                            {item.name === "Docker" && (
                              <>
                                <path d="M22 12.5a2.5 2.5 0 0 0-2.5-2.5H6.5a2.5 2.5 0 0 0 0 5H19"></path>
                                <path d="M6 10V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"></path>
                                <path d="M18 8h1"></path>
                              </>
                            )}
                            {item.name === "CI/CD" && (
                              <>
                                <path d="M12 22v-5"></path>
                                <path d="M9 8V5.5a2.5 2.5 0 0 1 5 0V8"></path>
                                <path d="M6 12V8h12v4"></path>
                                <path d="M6 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"></path>
                              </>
                            )}
                            {item.name === "Vercel" && (
                              <>
                                <polygon points="12 2 20 20 4 20"></polygon>
                              </>
                            )}
                            {item.name === "Netlify" && (
                              <>
                                <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path>
                                <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path>
                              </>
                            )}
                            {item.name === "Figma" && (
                              <>
                                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                              </>
                            )}
                            {item.name === "Adobe XD" && (
                              <>
                                <path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"></path>
                                <path d="M9 11h6"></path>
                                <path d="M12 8v6"></path>
                                <path d="M3 15h6"></path>
                                <path d="M3 11h2v4"></path>
                              </>
                            )}
                            {item.name === "Responsive Design" && (
                              <>
                                <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                                <path d="M2 10h20"></path>
                              </>
                            )}
                            {item.name === "Wireframing" && (
                              <>
                                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                <path d="M3 9h18"></path>
                                <path d="M9 21V9"></path>
                              </>
                            )}
                            {item.name === "React Native" && (
                              <>
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 8v8"></path>
                                <path d="M8 12h8"></path>
                              </>
                            )}
                            {item.name === "Progressive Web Apps" && (
                              <>
                                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                                <path d="M7 7h.01"></path>
                              </>
                            )}
                          </svg>
                        </div>
                        <span className="text-sm font-medium group-hover:text-foreground transition-colors duration-300">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill level indicator */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${70 + Math.random() * 30}%` } : { width: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + index * 0.1,
                          ease: [0.34, 1.56, 0.64, 1], // Custom spring-like easing
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3D Floating Skills Cloud */}
      <div className="mt-20 relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {skills.flatMap((category) =>
            category.items.map((item, i) => (
              <motion.div
                key={`${category.category}-${item.name}`}
                className="absolute text-primary/80 font-medium px-3 py-1 rounded-full bg-primary/5 backdrop-blur-sm shadow-sm"
                initial={{
                  x: Math.random() * 600 - 300,
                  y: Math.random() * 300 - 150,
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: 0.7,
                  rotate: Math.random() * 20 - 10,
                }}
                animate={{
                  x: Math.random() * 600 - 300,
                  y: Math.random() * 300 - 150,
                  scale: Math.random() * 0.5 + 0.5,
                  opacity: [0.5, 0.7, 0.5],
                  rotate: [Math.random() * 10 - 5, Math.random() * -10 + 5, Math.random() * 10 - 5],
                  boxShadow: ["0 1px 2px rgba(0,0,0,0.1)", "0 4px 8px rgba(0,0,0,0.1)", "0 1px 2px rgba(0,0,0,0.1)"],
                  transition: {
                    duration: 15 + Math.random() * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.3,
                  opacity: 1,
                  rotate: 0,
                  zIndex: 10,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transform: `perspective(1000px) rotateX(${Math.random() * 20 - 10}deg) rotateY(${Math.random() * 20 - 10}deg)`,
                }}
              >
                {item.name}
              </motion.div>
            )),
          )}
        </div>
      </div>
    </section>
  )
}
