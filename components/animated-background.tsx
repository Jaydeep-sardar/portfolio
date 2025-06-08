"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Draw gradient wave background
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = theme === "dark"
      const colorStart = isDark ? "rgba(30, 30, 30, 0)" : "rgba(255, 255, 255, 0)"
      const colorEnd = isDark ? "rgba(80, 30, 120, 0.1)" : "rgba(138, 43, 226, 0.05)"

      // Create multiple waves
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop(0, colorStart)
        gradient.addColorStop(0.5, colorEnd)
        gradient.addColorStop(1, colorStart)

        ctx.fillStyle = gradient
        ctx.beginPath()

        // Draw wave
        ctx.moveTo(0, canvas.height)

        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            Math.sin((x / canvas.width) * Math.PI * 4 + time + i) * 50 +
            Math.sin((x / canvas.width) * Math.PI * 8 + time * 0.8 + i) * 20

          const baseY = canvas.height - 100 - i * 50 + y
          ctx.lineTo(x, baseY)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.closePath()
        ctx.fill()
      }

      time += 0.005
      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    handleResize()
    window.addEventListener("resize", handleResize)

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 opacity-70" />
}
