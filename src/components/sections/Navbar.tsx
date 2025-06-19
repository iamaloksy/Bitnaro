
import React from "react";
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#platforms", label: "Platforms" },
  { href: "#collaborate", label: "Join" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-lg bg-gradient-to-r from-[#171e30d0] via-[#141a25c0] to-[#181e2ad0] glassmorph border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
       
        <a 
          href="#" 
          className="flex items-center gap-2 font-bold text-xl md:text-2xl text-white tracking-widest select-none transform transition-all duration-300 hover:scale-105"
          onClick={(e) => smoothScroll(e, "#home")}
        >
          <img 
            src="/uploads/logo1.png" 
            alt="Bitnaro Logo" 
            className="h-20 md:h-28 w-auto filter brightness-2 invert transition-all duration-300 hover:scale-105"

          />
        </a>
        
        {/* Desktop links with smooth animations */}
        <div className="hidden lg:flex items-center gap-3">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="nav-item text-gray-200 hover:text-blue-400 px-2 py-1 rounded transition-all duration-300 font-medium focus:outline-none focus:text-green-300 transform hover:scale-105 text-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile burger with smooth rotation */}
        <button
          className="lg:hidden p-2 rounded hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <div className="transition-transform duration-300">
            {open ? <X className="text-white" /> : <Menu className="text-white" />}
          </div>
        </button>
      </div>
      
      {/* Mobile menu with smooth slide animation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-2 space-y-2 max-h-64 overflow-y-auto">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="block text-gray-100 hover:text-blue-400 py-2 px-3 rounded font-medium transition-all duration-300 transform hover:translate-x-2 hover:bg-white/5"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: open ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.1}s`
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav> 
  )
}
