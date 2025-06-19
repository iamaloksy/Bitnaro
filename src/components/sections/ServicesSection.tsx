
import { Pen, Code, Briefcase, FileText, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Pen className="text-blue-400" size={28}/>,
    title: "AI Tool Development",
    desc: "Custom AI solutions tailored to your specific business needs and requirements.",
    cta: "Request Quote",
  },
  {
    icon: <Code className="text-green-400" size={28}/>,
    title: "Web & App Development",
    desc: "Full-stack solutions using modern technologies and best practices.",
    cta: "Request Quote",
  },
  {
    icon: <Briefcase className="text-blue-200" size={28}/>,
    title: "Product Prototyping",
    desc: "Transform your concepts into functional MVPs with rapid prototyping.",
    cta: "Request Quote",
  },
  {
    icon: <FileText className="text-green-300" size={28}/>,
    title: "API Integration & SaaS",
    desc: "Build scalable APIs and SaaS tools for your business growth.",
    cta: "Request Quote",
  },
  {
    icon: <MessageSquare className="text-blue-300" size={28}/>,
    title: "Tech Consultancy",
    desc: "Strategic guidance for developers, startups, and educational institutes.",
    cta: "Request Quote",
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-black/70 backdrop-blur-sm border-b border-white/10" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-2">Our Services</h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Comprehensive tech solutions for startups, creators, and businesses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-8 mt-8">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className="flex flex-col items-center rounded-2xl border border-white/10 p-6 glassmorph shadow-lg bg-gradient-to-br from-[#141826] to-[#20293a] hover:shadow-blue-400/30 group transition hover:scale-105"
            >
              <div className="mb-4">{svc.icon}</div>
              <div className="font-semibold text-lg mb-1 text-center">{svc.title}</div>
              <div className="text-gray-300 text-sm text-center mb-6">{svc.desc}</div>
              <Button asChild
                className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white shadow-md hover:scale-105 transition font-semibold"
              >
                <a href="#contact">{svc.cta} →</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
