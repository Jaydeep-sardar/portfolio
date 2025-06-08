"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    // Add event listeners for cursor variants
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => setCursorVariant("link"))
      link.addEventListener("mouseleave", () => setCursorVariant("default"))
    })

    const images = document.querySelectorAll("img")
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => setCursorVariant("image"))
      img.addEventListener("mouseleave", () => setCursorVariant("default"))
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => setCursorVariant("link"))
        link.removeEventListener("mouseleave", () => setCursorVariant("default"))
      })
      images.forEach((img) => {
        img.removeEventListener("mouseenter", () => setCursorVariant("image"))
        img.removeEventListener("mouseleave", () => setCursorVariant("default"))
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(138, 43, 226, 0.2)",
      mixBlendMode: "difference" as const,
    },
    link: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(138, 43, 226, 0.4)",
      mixBlendMode: "difference" as const,
    },
    image: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      mixBlendMode: "difference" as const,
    },
  }

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 z-50 rounded-full pointer-events-none hidden lg:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 z-50 rounded-full border-2 border-primary pointer-events-none hidden lg:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.03 }}
        style={{ height: "32px", width: "32px" }}
      />
    </>
  )
}
