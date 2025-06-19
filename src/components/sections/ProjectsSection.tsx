
import React from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
{
  title: "Fundsgro – Crowdfunding Platform",
  description: "A modern crowdfunding web app with Razorpay integration. Users can create and manage campaigns with statistics, login via Clerk, and switch dark/light themes.",
  image: "https://kralok.vercel.app/fg/4.png",
  tech: ["Next.js", "Tailwind CSS", "Clerk Auth", "Razorpay", "MongoDB"],
  demoUrl: "https://fundsgro.vercel.app",
  githubUrl: "https://github.com/iamaloksy/Fundsgro"
},
{
  title: "LX GPT – AI Chatbot Website",
  description: "AI-powered chatbot interface that enables freeform conversations. Built with Gemini API, offering smooth UX/UI for engaging user interaction.",
  image: "https://kralok.vercel.app/lx/1.png",
  tech: ["JavaScript", "Gemini API", "HTML", "CSS", "Figma"],
  demoUrl: "https://iamaloksy.github.io/LX_GPT/",
  githubUrl: "https://github.com/iamaloksy/LX_GPT"
},
{
  title: "Meet-Me – Online Meeting Platform",
  description: "A collaborative web application for scheduling and managing online meetings. Built with Next.js and Clerk Auth, supports Stream API for real-time calls.",
  image: "https://kralok.vercel.app/meet/1.png",
  tech: ["Next.js", "TypeScript", "Clerk", "Stream API", "Tailwind CSS"],
  demoUrl: "https://orgmeet.vercel.app",
  githubUrl: "https://github.com/iamaloksy/Meet_Me"
}
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-[#0f1420]/90 py-16 px-4 border-b border-white/10" 
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-semibold text-white text-center mb-4 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Our Projects & Case Studies
        </h2>
        <p className={`text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Explore our portfolio of successful projects that showcase our expertise in building scalable, innovative solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`card-hover bg-black/60 rounded-2xl overflow-hidden shadow-xl group glassmorph transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                border: '1px solid rgba(40,125,255,0.07)',
                backdropFilter: 'blur(10px)',
                transitionDelay: `${idx * 0.2 + 0.4}s`
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-green-400 hover:scale-105 transition-transform duration-300"
                  >
                    <a href={project.demoUrl} className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-gray-600 hover:border-blue-400 hover:scale-105 transition-all duration-300"
                  >
                    <a href={project.githubUrl} className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
