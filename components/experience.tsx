"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Experience() {
  const education = [
    {
      title: "Bachelor of Computer Applications",
      company: "Netaji Subhash Engineering College",
      period: "August 2023 - Present",
      description:
        "Currently pursuing a Bachelor's degree in Computer Applications, focusing on software development, web technologies, and computer science fundamentals.",
      type: "education",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="h-6 w-6" />
      default:
        return <GraduationCap className="h-6 w-6" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "education":
        return "Education"
      default:
        return "Education"
    }
  }

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            My educational background that has shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 relative"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex">
                  <div className="mr-6 flex-shrink-0">
                    <div className="p-3 rounded-full bg-green-500/10 text-green-500">{getIcon(item.type)}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="inline-block px-2 py-1 text-xs rounded-full mt-1 bg-green-500/10 text-green-500">
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                      <span className="text-sm text-foreground/60 mt-1 sm:mt-0">{item.period}</span>
                    </div>
                    <h4 className="text-primary font-medium mb-2">{item.company}</h4>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
