"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function ScrollColorTransition() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Define color stops for the scroll journey
    const colorStops = [
      { position: 0, color: theme === "dark" ? "#8b5cf6" : "#8b5cf6" }, // Purple (primary)
      { position: 0.2, color: theme === "dark" ? "#3b82f6" : "#3b82f6" }, // Blue
      { position: 0.4, color: theme === "dark" ? "#10b981" : "#10b981" }, // Green
      { position: 0.6, color: theme === "dark" ? "#f59e0b" : "#f59e0b" }, // Amber
      { position: 0.8, color: theme === "dark" ? "#ef4444" : "#ef4444" }, // Red
      { position: 1, color: theme === "dark" ? "#8b5cf6" : "#8b5cf6" }, // Back to purple
    ]

    // Find the two color stops that our current scroll position falls between
    let startStop = colorStops[0]
    let endStop = colorStops[1]

    for (let i = 1; i < colorStops.length; i++) {
      if (scrollProgress <= colorStops[i].position) {
        startStop = colorStops[i - 1]
        endStop = colorStops[i]
        break
      }
    }

    // Calculate how far we are between the two stops (0 to 1)
    const range = endStop.position - startStop.position
    const progressInRange = range === 0 ? 0 : (scrollProgress - startStop.position) / range

    // Interpolate between the two colors
    const startColor = hexToRgb(startStop.color)
    const endColor = hexToRgb(endStop.color)

    if (startColor && endColor) {
      const r = Math.round(startColor.r + (endColor.r - startColor.r) * progressInRange)
      const g = Math.round(startColor.g + (endColor.g - startColor.g) * progressInRange)
      const b = Math.round(startColor.b + (endColor.b - startColor.b) * progressInRange)

      // Update CSS variable
      document.documentElement.style.setProperty("--primary", `${r} ${g} ${b}`)
    }
  }, [scrollProgress, theme])

  // Helper function to convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  return null // This component doesn't render anything visible
}
