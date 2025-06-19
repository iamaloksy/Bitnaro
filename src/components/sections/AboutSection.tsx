
import { Book, Code, ArrowUp, ArrowRight } from "lucide-react"
import React from "react"

const values = [
  {
    icon: <ArrowUp size={26} className="text-blue-400" />,
    label: "Innovation",
    desc: "Pushing boundaries with cutting-edge solutions.",
    animation: "icon-float-3d"
  },
  {
    icon: <Book size={26} className="text-green-400" />,
    label: "Simplicity",
    desc: "Clean, intuitive, and user-focused design.",
    animation: "icon-bounce"
  },
  {
    icon: <Code size={26} className="text-blue-300" />,
    label: "Developer-First",
    desc: "Built by developers, for developers.",
    animation: "icon-pulse-3d"
  },
  {
    icon: <ArrowRight size={26} className="text-green-300" />,
    label: "Speed",
    desc: "Fast delivery without compromising quality.",
    animation: "icon-float-3d"
  }
]

export default function AboutSection() {
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
      className="bg-[#181e2a]/90 py-16 px-4 border-b border-white/10" 
      id="about"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-semibold text-white text-center mb-2 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          About Bitnaro
        </h2>
        <p className={`text-lg md:text-xl text-gray-300 text-center mb-8 transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Unifying innovation, learning, and tech growth through developer-first solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {values.map((val, idx) => (
            <div
              key={val.label}
              className={`card-hover bg-black/60 rounded-2xl p-6 flex flex-col items-center gap-2 shadow group glassmorph transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                border: '1px solid rgba(40,125,255,0.07)',
                backdropFilter: 'blur(10px)',
                transitionDelay: `${idx * 0.1 + 0.4}s`
              }}
            >
              <div className={`mb-2 transition-transform duration-300 group-hover:scale-110 ${val.animation}`}>
                {val.icon}
              </div>
              <div className="text-lg font-semibold transition-colors duration-300 group-hover:text-blue-300">
                {val.label}
              </div>
              <div className="text-sm text-gray-400 text-center transition-colors duration-300 group-hover:text-gray-300">
                {val.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
