
import { Book, Briefcase, Github, FileText, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const platforms = [
  {
    icon: <Briefcase className="text-blue-300" size={26}/>,
    title: "Internship Hub",
    desc: "Apply and grow your real-world skills with industry projects.",
    btn: "Visit Platform",
    link: "https://internship.bitnaro.xyz/",
    comingSoon: false,
  },
  {
    icon: <Book className="text-green-400" size={26}/>,
    title: "Course Platform",
    desc: "Learn tech, coding, and tools with expert-led courses.",
    btn: "Coming Soon",
    link: "#",
    comingSoon: true,
  },
  {
    icon: <Github className="text-blue-300" size={26}/>,
    title: "GitHub Portfolio Generator",
    desc: "Build and showcase your developer profile professionally.",
    btn: "Visit Platform",
    link: "https://portfolio.bitnaro.xyz/",
    comingSoon: false,
  },
  {
    icon: <FileText className="text-green-300" size={26}/>,
    title: "Resume Builder & Analyzer",
    desc: "Create and improve your resume with AI-powered insights.",
    btn: "Visit Platform",
    link: "https://resume.bitnaro.xyz/",
    comingSoon: false,
  },
  {
    icon: <Plus className="text-gray-300" size={26}/>,
    title: "More Tools Coming Soon",
    desc: "Interview Prep, AI Assistant, and other developer tools.",
    btn: "Stay Tuned",
    link: "#",
    comingSoon: true,
  }
]

export default function PlatformsSection() {
  return (
    <section className="py-16 px-4 bg-[#191f2c]/90 border-b border-white/10" id="platforms">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-2">Our Platforms</h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Discover our suite of developer-focused platforms and tools.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-8 mt-8">
          {platforms.map((platf, idx) => (
            <div
              key={platf.title}
              className="relative flex flex-col items-center justify-between rounded-2xl p-6 glassmorph border border-white/10 shadow bg-gradient-to-br from-[#181e2a] to-[#232b3d] hover:shadow-green-400/30 transition hover:scale-105"
            >
              <div>
                <div className="mb-3">{platf.icon}</div>
                <div className="font-semibold text-lg mb-1 text-center">{platf.title}</div>
                <div className="text-gray-300 text-sm text-center mb-6">{platf.desc}</div>
              </div>
              <Button
                asChild
                variant={platf.comingSoon ? "outline" : "default"}
                disabled={platf.comingSoon}
                className={`w-full font-semibold ${platf.comingSoon ? "bg-gray-900 border-gray-700 text-gray-400" : "bg-gradient-to-r from-blue-600 to-green-400 text-white hover:scale-105"}`}
              >
                <a href={platf.link} target="_blank" rel="noopener">
                  {platf.btn}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
