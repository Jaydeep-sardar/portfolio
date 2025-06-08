"use client"

import { useEffect } from "react"
import { useAnimation } from "framer-motion"

export default function EnhancedAnimations() {
  const controls = useAnimation()

  useEffect(() => {
    // Add scroll-based animations to elements with data-animate attribute
    const animateOnScroll = () => {
      const elements = document.querySelectorAll("[data-animate]")

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.8

        if (isVisible) {
          element.classList.add("animate-visible")
        }
      })
    }

    // Add hover animations to buttons and links
    const addHoverEffects = () => {
      const buttons = document.querySelectorAll("button:not([data-no-hover]), a:not([data-no-hover])")

      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          button.classList.add("hover-effect")
        })

        button.addEventListener("mouseleave", () => {
          button.classList.remove("hover-effect")
        })
      })
    }

    // Add subtle animations to section headings
    const animateHeadings = () => {
      const headings = document.querySelectorAll("h2, h3")

      headings.forEach((heading) => {
        heading.classList.add("heading-animate")
      })
    }

    // Initialize animations
    animateOnScroll()
    addHoverEffects()
    animateHeadings()

    // Update on scroll
    window.addEventListener("scroll", animateOnScroll)

    return () => {
      window.removeEventListener("scroll", animateOnScroll)
    }
  }, [])

  return null // This component just adds effects, doesn't render anything
}
