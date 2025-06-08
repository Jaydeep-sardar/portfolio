"use client"

import { useEffect, useState } from "react"

export default function ParallaxEffect() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add parallax effect to elements with data-parallax attribute
    const parallaxElements = document.querySelectorAll("[data-parallax]")

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null // This component just adds the effect, doesn't render anything
}
