"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp, Github, Linkedin, Mail, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/Jaydeep-sardar",
      ariaLabel: "GitHub",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/jaydeep-sardar-9a5ba9312/",
      ariaLabel: "LinkedIn",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-4 w-4" />,
      href: "https://www.instagram.com/_._theuntouchedlight?igsh=MTRrYTdwZjlrdmM0Mw==",
      ariaLabel: "Instagram",
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:jaydeepsardarmails@gmail.com",
      ariaLabel: "Email",
    },
  ]

  return (
    <footer className="bg-muted/50 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-5">
            <Link href="#home" className="text-2xl font-bold text-primary inline-block mb-4">
              Portfolio
            </Link>
            <p className="text-foreground/70 max-w-md mb-6">
              Passionate Computer Applications student with expertise in modern web technologies and software
              development. Creating elegant, responsive, and high-performance applications.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="rounded-full shadow-sm hover:shadow-md transition-all"
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                      {link.icon}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors relative inline-block group"
                  >
                    <span>{link.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:jaydeepsardarmails@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span>jaydeepsardarmails@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Jaydeep-sardar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-4 w-4 text-primary" />
                  </div>
                  <span>github.com/Jaydeep-sardar</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jaydeep-sardar-9a5ba9312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                  <span>linkedin.com/in/jaydeep-sardar</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_._theuntouchedlight?igsh=MTRrYTdwZjlrdmM0Mw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Instagram className="h-4 w-4 text-primary" />
                  </div>
                  <span>Instagram: _._theuntouchedlight</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-primary/80 mr-2"></div>
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Jaydeep Sardar. All rights reserved.
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
