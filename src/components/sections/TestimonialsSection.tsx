
import React from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Akash Kumar",
    role: "Startup Founder",
    company: "Jeevan Jhola",
    content: "Bitnaro turned our vision for Jeevan Jhola into a user-friendly web app that connected underprivileged patients with donors and support organizations. His attention to detail, from the donation forms to the mobile-responsive UI, made a big difference. The platform runs smoothly, and we truly admire his passion for social impact tech.",
    rating: 5,
    avatar: "https://cdn-icons-png.flaticon.com/128/4140/4140037.png"
  },
  {
    name: "Ritika Sharma",
    role: "Project Lead",
    company: "Fundsgro",
    content: "Working with Bitnaro on Fundsgro was an exceptional experience. We needed a modern crowdfunding platform with Razorpay integration and a clean user dashboard — and he delivered exactly that, on time and with quality. The UI is intuitive, and our donors love the dark/light theme toggle. His technical skills and communication made the whole process seamless.",
    rating: 5,
    avatar: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
  },
  {
    name: "Riya Sonik",
    role: "Co-Founder",
    company: "JugadVeda",
    content: "JugadVeda needed a clean, educational, and e-commerce-friendly platform for Ayurvedic solutions, and Bitnaro nailed it! From custom product pages to integrated blog sections, everything feels fast and reliable. His understanding of user behavior and SEO made the site truly effective. Highly recommend him for any full-stack project.",
    rating: 5,
    avatar: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
  },
  {
    name: "Saurav Deshmukh",
    role: "Opearation Head",
    company: "InnovateLab",
    content: "Collaborating with Bitnaro was a game-changer for our internal operations. He built a custom dashboard that automated several of our manual processes, saving us hours every week. What stood out was his clarity in communication, clean code, and deep understanding of both frontend and backend logic. Bitnaro is the kind of developers team every company needs — reliable, skilled, and efficient.",
    rating: 5,
    avatar: "https://cdn-icons-png.flaticon.com/128/4140/4140037.png"
  }
]

export default function TestimonialsSection() {
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
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-semibold text-white text-center mb-4 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          What Our Clients Say
        </h2>
        <p className={`text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Don't just take our word for it. Here's what our satisfied clients have to say about working with Bitnaro.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className={`card-hover bg-black/60 rounded-2xl p-6 shadow-xl group glassmorph relative transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                border: '1px solid rgba(40,125,255,0.07)',
                backdropFilter: 'blur(10px)',
                transitionDelay: `${idx * 0.2 + 0.4}s`
              }}
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote size={32} className="text-blue-400 transform rotate-180" />
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/30 group-hover:border-blue-400/60 transition-colors duration-300"
                />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
