import { useEffect, useState } from "react";
import { Check, Home, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Thanks = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => setShowConfetti(true), 800);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#11182b] via-[#181d31] to-[#121622] overflow-hidden relative">
   
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

     
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
      
        <div className={`transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="relative mb-8">
            <div className="icon-3d icon-pulse-3d mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden">
                <Check className="text-white animate-bounce" size={40} />
              
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-emerald-600/30 rounded-full animate-ping"></div>
              </div>
            </div>
            
          
            <div className="absolute -top-4 -left-8 w-4 h-4 bg-green-400 rounded-full animate-bounce icon-float-3d" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -top-2 -right-6 w-3 h-3 bg-emerald-400 rounded-full animate-bounce icon-float-3d" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce icon-float-3d" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

 
        <div className={`transition-all duration-1000 ease-out delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text mb-4 animate-gradient-move">
            Thank You!
          </h1>
        </div>

        <div className={`transition-all duration-1000 ease-out delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Message Sent Successfully
          </h2>
          <p className="text-lg text-gray-300 mb-4 max-w-lg mx-auto leading-relaxed">
            Your message has been received! We appreciate you reaching out to us.
          </p>
          <p className="text-md text-gray-400 mb-8 max-w-lg mx-auto">
            Our team will get back to you within 24 hours. Keep an eye on your inbox!
          </p>
        </div>

   
        <div className={`transition-all duration-1000 ease-out delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-lg mx-auto">
            <div className="glassmorph p-4 rounded-xl border border-white/10 card-hover">
              <Mail className="text-blue-400 mx-auto mb-2 icon-3d" size={24} />
              <p className="text-sm text-gray-300">Check your email</p>
              <p className="text-xs text-gray-400">for confirmation</p>
            </div>
            <div className="glassmorph p-4 rounded-xl border border-white/10 card-hover">
              <ArrowRight className="text-green-400 mx-auto mb-2 icon-3d" size={24} />
              <p className="text-sm text-gray-300">Response time</p>
              <p className="text-xs text-gray-400">within 24 hours</p>
            </div>
          </div>
        </div>

      
        <div className={`transition-all duration-1000 ease-out delay-900 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 btn-hover"
            >
              <Home size={20} />
              Back to Home
            </Button>
            <Button
              onClick={() => window.location.href = '/#contact'}
              className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 btn-hover"
            >
              Send Another Message
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-green-400 rounded-full animate-ping icon-float-3d" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-blue-400 rounded-full animate-ping icon-float-3d" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 left-1/12 w-1 h-1 bg-emerald-400 rounded-full animate-ping icon-float-3d" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;