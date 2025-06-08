import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CursorEffect from "@/components/cursor-effect"
import ParticleBackground from "@/components/particle-background"
import ParallaxEffect from "@/components/parallax-effect"
import AnimatedBackground from "@/components/animated-background"
import SkillsCube from "@/components/3d-skills-cube"
import ScrollColorTransition from "@/components/scroll-color-transition"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CursorEffect />
      <ParticleBackground />
      <AnimatedBackground />
      <ParallaxEffect />
      <ScrollColorTransition />
      <Hero />
      <About />
      <Skills />
      <SkillsCube />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
