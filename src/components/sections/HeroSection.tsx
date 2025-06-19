
import { Briefcase, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative w-full pt-24 pb-20 px-4 md:px-12 overflow-hidden bg-black/80 backdrop-blur-sm border-b border-white/5">
      {/* Enhanced glass/gradient shape with animation */}
      <br /><h1 
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 tracking-tight text-reveal"
            style={{ 
              fontFamily: "Inter, Sora, Poppins, sans-serif",
              animationDelay: "0.2s"
            }}
          ><span className="bg-gradient-to-r from-blue-400 via-blue-300 to-green-400 bg-clip-text text-transparent animate-gradient-move">
              
            </span>
          </h1><br />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-800/10 via-[#1c234099]/30 to-transparent animate-gradient-move" />
      
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text with staggered animations */}
        <div className="flex-1 text-center md:text-left">
          <h1 
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 tracking-tight text-reveal"
            style={{ 
              fontFamily: "Inter, Sora, Poppins, sans-serif",
              animationDelay: "0.2s"
            }}
          >
            One Brand.<br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-green-400 bg-clip-text text-transparent animate-gradient-move">
              Infinite Possibilities.
            </span>
          </h1>
          
          <p 
            className="mt-2 text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0 text-reveal"
            style={{ animationDelay: "0.4s" }}
          >
            Bitnaro empowers developers, startups, and learners with powerful tools & services.
          </p>
          
          <div 
            className="mt-8 flex items-center justify-center md:justify-start gap-4 text-reveal"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              className="btn-hover bg-gradient-to-r from-blue-500 to-green-400 text-white shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300 px-6 py-2 rounded-xl pulse-glow"
              size="lg"
            >
              <a href="#platforms" className="flex items-center gap-2">
                Explore Our Platforms 
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1"/>
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="btn-hover border-gray-700 bg-gray-800/80 text-white hover:border-blue-400 hover:text-green-300 shadow hover:scale-105 transition-all duration-300"
            >
              <a href="#contact" className="flex items-center gap-2">
                Hire Us 
                <Briefcase size={18} className="transition-transform duration-300 group-hover:rotate-12"/>
              </a>
            </Button>
          </div>
        </div>
        
        {/* Right: Enhanced tech image with floating animation */}
        <div className="flex-1 flex justify-center md:justify-end items-center">
          <div 
            className="w-72 h-44 md:w-96 md:h-60 rounded-2xl bg-gradient-to-br from-blue-400/20 to-gray-900/70 border border-white/10 shadow-xl flex items-center justify-center glassmorph relative overflow-hidden float"
            style={{ animationDelay: "0.8s" }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
              alt="Colorful software or web code on a computer monitor"
              className="object-cover w-full h-full rounded-2xl transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
            
            {/* Enhanced neon/glow effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none ring-2 ring-blue-400/20 transition-all duration-300 hover:ring-blue-400/40" />
            
            {/* Animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-400/5 to-green-400/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
