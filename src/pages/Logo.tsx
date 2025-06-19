
import React from "react";

export default function Logo() {
  const [isLoaded, setIsLoaded] = React.useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#11182b] via-[#181d31] to-[#121622] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo visual with enhanced animations */}
        <div className={`transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <img 
            src="/uploads/log.png" 
            alt="Bitnaro Logo" 
            className="h-16 md:h-32 w-auto "
          />
          <img 
            src="/uploads/log1.png" 
            alt="Bitnaro Logo" 
            className="h-16 md:h-32 w-auto "
          />
          <img 
            src="/uploads/log2.png" 
            alt="Bitnaro Logo" 
            className="h-16 md:h-32 w-auto "
          />
          <img 
            src="/uploads/log3.png" 
            alt="Bitnaro Logo" 
            className="h-16 md:h-32 w-auto "
          />
        </div>
        
        {/* Tagline with delayed animation */}
        <div className={`transition-all duration-1000 ease-out delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <span className="text-lg md:text-2xl text-gray-300 font-medium text-center hover:text-gray-200 transition-colors duration-300">
            Break Rules, Don’t Security
          </span>
        </div>

        {/* Floating dots animation */}
        <div className={`flex gap-2 mt-4 transition-all duration-1000 ease-out delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
