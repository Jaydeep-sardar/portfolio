"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { useRef } from "react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/80 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div className="container mx-auto px-4 z-10" style={{ y, opacity }}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Hi, I'm <span className="text-foreground">JAYDEEP SARDAR</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-12 md:h-16"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Mobile App Developer",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-2xl md:text-3xl font-medium text-foreground/80"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg mb-8 text-foreground/70 max-w-xl">
                I build elegant, responsive, and high-performance web applications with modern technologies. Let's
                create something amazing together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 shadow-lg hover:shadow-xl transition-all group overflow-hidden relative"
              >
                <Link href="#contact">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-primary/70 group-hover:scale-105 transition-transform duration-300"></span>
                  <span className="relative flex items-center">
                    Contact Me <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 group hover:border-primary/50 transition-colors"
              >
                <Link href="#projects">
                  <span className="group-hover:text-primary transition-colors">View My Work</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex mt-12 gap-6"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/50 hover:bg-background/80"
                  asChild
                >
                  <a
                    href="https://github.com/Jaydeep-sardar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/50 hover:bg-background/80"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/jaydeep-sardar-9a5ba9312/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/50 hover:bg-background/80"
                  asChild
                >
                  <a href="mailto:jaydeepsardarmails@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Decorative circle */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Photo frame */}
              <div className="relative rounded-full overflow-hidden border-4 border-background shadow-2xl w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/profile-selfie.jpg"
                  alt="Jaydeep Sardar Profile"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />

                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                ></motion.div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute top-0 -right-4 w-16 h-16 bg-primary/10 rounded-full z-0"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-full z-0"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>

              {/* Orbiting elements */}
              <motion.div
                className="absolute w-8 h-8 rounded-full bg-primary/20 z-0"
                animate={{
                  x: [0, 60, 0, -60, 0],
                  y: [60, 0, -60, 0, 60],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              ></motion.div>
              <motion.div
                className="absolute w-6 h-6 rounded-full bg-primary/30 z-0"
                animate={{
                  x: [0, -40, 0, 40, 0],
                  y: [-40, 0, 40, 0, -40],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
