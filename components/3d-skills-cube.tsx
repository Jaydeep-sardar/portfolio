"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { useTheme } from "next-themes"

export default function SkillsCube() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const { theme } = useTheme()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const frontSkills = ["React", "Next.js", "TypeScript"]
  const backSkills = ["Node.js", "Express", "MongoDB"]
  const leftSkills = ["HTML", "CSS", "Tailwind"]
  const rightSkills = ["Git", "Docker", "AWS"]
  const topSkills = ["Figma", "UI/UX", "Design"]
  const bottomSkills = ["Testing", "SEO", "Performance"]

  const cubeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills in 3D</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Explore my technical skills from different perspectives
          </p>
        </motion.div>

        <motion.div
          variants={cubeVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center items-center h-[500px]"
        >
          <div className="cube-container perspective-[1000px] w-[300px] h-[300px] relative">
            <motion.div
              className="cube relative w-full h-full transform-style-3d"
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              {/* Front face */}
              <div
                className={`cube-face absolute w-full h-full flex flex-col items-center justify-center rounded-lg ${
                  theme === "dark" ? "bg-primary/20" : "bg-primary/10"
                } backdrop-blur-sm border border-primary/20 p-6 transform-style-3d`}
                style={{
                  transform: "translateZ(150px)",
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary">Frontend</h3>
                <ul className="space-y-2">
                  {frontSkills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back face */}
              <div
                className={`cube-face absolute w-full h-full flex flex-col items-center justify-center rounded-lg ${
                  theme === "dark" ? "bg-blue-500/20" : "bg-blue-500/10"
                } backdrop-blur-sm border border-blue-500/20 p-6 transform-style-3d`}
                style={{
                  transform: "rotateY(180deg) translateZ(150px)",
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-blue-500">Backend</h3>
                <ul className="space-y-2">
                  {backSkills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Left face */}
              <div
                className={`cube-face absolute w-full h-full flex flex-col items-center justify-center rounded-lg ${
                  theme === "dark" ? "bg-orange-500/20" : "bg-orange-500/10"
                } backdrop-blur-sm border border-orange-500/20 p-6 transform-style-3d`}
                style={{
                  transform: "rotateY(-90deg) translateZ(150px)",
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-orange-500">Markup</h3>
                <ul className="space-y-2">
                  {leftSkills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right face */}
              <div
                className={`cube-face absolute w-full h-full flex flex-col items-center justify-center rounded-lg ${
                  theme === "dark" ? "bg-green-500/20" : "bg-green-500/10"
                } backdrop-blur-sm border border-green-500/20 p-6 transform-style-3d`}
                style={{
                  transform: "rotateY(90deg) translateZ(150px)",
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-green-500">DevOps</h3>
                <ul className="space-y-2">
                  {rightSkills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top face */}
              <div
                className={`cube-face absolute w-full h-full flex flex-col items-center justify-center rounded-lg ${
                  theme === "dark" ? "bg-pink-500/20" : "bg-pink-500/10"
                } backdrop-blur-sm border border-pink-500/20 p-6 transform-style-3d`}
                style={{
                  transform: "rotateX(90deg) translateZ(150px)",
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-pink-500">Design</h3>
                <ul className="space-y-2">
                  {topSkills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-pink-500 mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom face */}
              <div
                className={`cube-face absolute w-full h-full flex flex-col items-center justify-center rounded-lg ${
                  theme === "dark" ? "bg-violet-500/20" : "bg-violet-500/10"
                } backdrop-blur-sm border border-violet-500/20 p-6 transform-style-3d`}
                style={{
                  transform: "rotateX(-90deg) translateZ(150px)",
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-violet-500">Optimization</h3>
                <ul className="space-y-2">
                  {bottomSkills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-violet-500 mr-2"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-foreground/70 max-w-2xl mx-auto">
            This 3D cube represents the multifaceted nature of my skill set, showcasing my ability to work across the
            entire development stack.
          </p>
        </div>
      </div>
    </section>
  )
}
