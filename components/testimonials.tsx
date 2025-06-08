"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useState } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with this developer was an absolute pleasure. They delivered our project on time and exceeded our expectations in terms of quality and attention to detail.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateCorp",
      image: "/placeholder.svg?height=100&width=100",
      text: "I was impressed by the level of creativity and technical expertise. Our web application not only looks beautiful but also performs exceptionally well.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director at GrowthLabs",
      image: "/placeholder.svg?height=100&width=100",
      text: "The redesign of our company website transformed our online presence. We've seen a significant increase in user engagement and conversion rates since the launch.",
    },
    {
      name: "David Kim",
      role: "Founder of StartupX",
      image: "/placeholder.svg?height=100&width=100",
      text: "As a startup founder, I needed someone who could understand my vision and bring it to life. This developer did exactly that, and more. Highly recommended!",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Here's what some of my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                initial={false}
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-6 relative">
                            <div className="absolute -top-2 -left-2 w-full h-full bg-primary/10 rounded-full"></div>
                            <Avatar className="w-20 h-20 border-4 border-background">
                              <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="mb-4 text-primary">
                            <Quote className="h-8 w-8 mx-auto opacity-50" />
                          </div>
                          <p className="text-lg mb-6 italic">{testimonial.text}</p>
                          <h4 className="font-bold text-xl">{testimonial.name}</h4>
                          <p className="text-foreground/60">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
