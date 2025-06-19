
export default function SiteFooter() {
  return (
    <footer className="w-full bg-black border-t border-white/10 pt-10 pb-6 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-4">
        {/* Logo with tagline + brand text */}
        <div className="flex flex-col gap-2 md:gap-1">
          <div className="flex items-center gap-3">
            <img 
              src="/uploads/logo1.png" 
              alt="Bitnaro Logo" 
              className="h-32 md:h-40 lg:h-48 w-auto filter brightness-2 invert transition-all duration-300 hover:scale-105"

            />
            
          </div>
          <span className="text-gray-400 text-sm max-w-xs">
            Break Rules, Don’t Security.
          </span>
        </div>
        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-7 text-sm">
          <div className="flex flex-col gap-1 px-2">
            <div className="font-semibold mb-1">Sections</div>
            <a href="#"
              className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          <div className="flex flex-col gap-1 px-2">
            <div className="font-semibold mb-1">Platforms</div>
            <a href="https://internship.bitnaro.xyz/" target="_blank" rel="noopener" className="hover:text-green-400 transition">Internship Hub</a>
            <a href="https://portfolio.bitnaro.xyz/" target="_blank" rel="noopener" className="hover:text-green-400 transition">Portfolio Generator</a>
            <a href="https://resume.bitnaro.xyz/" target="_blank" rel="noopener" className="hover:text-green-400 transition">Resume Builder</a>
          </div>
          <div className="flex flex-col gap-1 px-2">
            <div className="font-semibold mb-1">Legal</div>
            <a href="#" className="hover:text-gray-200 transition">Privacy</a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Bitnaro. All rights reserved.
      </div>
    </footer>
  )
}
