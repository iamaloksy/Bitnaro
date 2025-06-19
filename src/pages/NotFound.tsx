import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    setIsLoaded(true);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#11182b] via-[#181d31] to-[#121622] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
        {/* 3D 404 Text */}
        <div className={`transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text mb-4 icon-3d animate-gradient-move">
            404
          </h1>
        </div>

        {/* 3D Graphics Container */}
        <div className={`transition-all duration-1000 ease-out delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="relative mb-8">
            {/* 3D Cube Animation */}
            <div className="icon-3d icon-float-3d mx-auto mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl flex items-center justify-center">
                <Search className="text-white icon-pulse-3d" size={32} />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -top-2 -right-6 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 left-4 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 ease-out delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className={`transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 btn-hover"
            >
              <ArrowLeft size={20} />
              Go Back
            </Button>
            <Button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 btn-hover"
            >
              <Home size={20} />
              Go Home
            </Button>
          </div>
        </div>

        {/* Additional 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
