"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed text-lg max-w-4xl mx-auto">
              Passionate 2nd-year BCA student with a flair for crafting engaging web experiences using HTML, CSS,
              JavaScript, React, and MERN. Proficient in Python, C, and C++, I thrive on solving complex problems and
              building efficient solutions. Eager to bring creativity and technical expertise to freelance projects that
              make a difference.
            </p>
          </motion.div>

          {/* Personal Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background/50 p-6 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-primary mb-2">Name:</h4>
              <p className="text-foreground/80">Jaydeep Sardar</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background/50 p-6 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-primary mb-2">Email:</h4>
              <p className="text-foreground/80">jaydeep.sardar.official@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background/50 p-6 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-primary mb-2">Location:</h4>
              <p className="text-foreground/80">Bansdroni, Kolkata</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background/50 p-6 rounded-lg shadow-sm"
            >
              <h4 className="font-bold text-primary mb-2">Availability:</h4>
              <p className="text-foreground/80">Available for hire</p>
            </motion.div>
          </div>

          {/* Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <Button className="rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all text-lg" asChild>
              <a href="/resume/jaydeep-sardar-resume.pdf" download="Jaydeep_Sardar_Resume.pdf">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </a>
            </Button>
            <p className="text-sm text-foreground/60 mt-4">Open to relocation for work opportunities</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
