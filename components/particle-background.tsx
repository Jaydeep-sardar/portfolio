"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const mousePosition = { x: 0, y: 0 }
    let isMouseMoving = false
    let mouseTimer: NodeJS.Timeout

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
      isMouseMoving = true

      // Add particles on mouse move
      for (let i = 0; i < 2; i++) {
        particles.push(createParticle(mousePosition.x, mousePosition.y, true))
      }

      clearTimeout(mouseTimer)
      mouseTimer = setTimeout(() => {
        isMouseMoving = false
      }, 100)
    }

    // Create a particle
    const createParticle = (x: number, y: number, isMouseParticle = false): Particle => {
      const baseColor = theme === "dark" ? "255, 255, 255" : "138, 43, 226"
      const alpha = isMouseParticle ? 0.8 : Math.random() * 0.5 + 0.1

      return {
        x: x || Math.random() * canvas.width,
        y: y || Math.random() * canvas.height,
        size: isMouseParticle ? Math.random() * 4 + 1 : Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        color: `rgba(${baseColor}, ${alpha})`,
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 9000), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle())
      }
    }

    // Update and draw particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.speedX
        p.y += p.speedY

        // Boundary check
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          // Remove mouse particles that go out of bounds
          if (particles.length > 100) {
            particles.splice(i, 1)
            i--
            continue
          } else {
            // Reset regular particles
            p.x = Math.random() * canvas.width
            p.y = Math.random() * canvas.height
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Connect particles
        connectParticles(p, i)
      }

      // Limit the number of particles
      if (particles.length > 200) {
        particles = particles.slice(0, 200)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // Connect nearby particles with lines
    const connectParticles = (p: Particle, index: number) => {
      for (let j = index + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)

        if (distance < 120) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(138, 43, 226, ${0.2 * (1 - distance / 120)})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    // Initialize
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(mouseTimer)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-70" />
}
