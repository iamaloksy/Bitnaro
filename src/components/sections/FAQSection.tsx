
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Bitnaro offer?",
    answer: "Bitnaro offers comprehensive web development services including custom web applications, e-commerce platforms, learning management systems, API development, UI/UX design, and ongoing maintenance and support."
  },
  // {
  //   question: "How long does a typical project take?",
  //   answer: "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
  // },
  // {
  //   question: "What technologies do you specialize in?",
  //   answer: "We specialize in modern web technologies including React, Vue.js, Node.js, Express, MongoDB, PostgreSQL, TypeScript, and cloud platforms like AWS and Vercel. We stay current with the latest industry trends and best practices."
  // },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We provide different support packages to meet your specific needs and budget."
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Absolutely! We have extensive experience working with legacy systems and existing codebases. We can help modernize your application, fix bugs, add new features, or completely refactor your codebase while maintaining functionality."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology with regular check-ins and iterations. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support. We believe in transparent communication throughout the entire process."
  },
  {
    question: "Do you offer custom integrations?",
    answer: "Yes, we specialize in custom integrations with third-party services including payment gateways, CRM systems, marketing tools, analytics platforms, and APIs. We ensure seamless data flow and optimal performance."
  }
  // {
  //   question: "What are your pricing models?",
  //   answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and specific requirements. We provide detailed quotes after understanding your needs."
  // }
]

export default function FAQSection() {
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
      className="bg-[#0f1420]/90 py-16 px-4 border-b border-white/10" 
      id="faq"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-semibold text-white text-center mb-4 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Frequently Asked Questions
        </h2>
        <p className={`text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Find answers to common questions about our services, process, and how we can help bring your ideas to life.
        </p>
        
        <div className={`transition-all duration-800 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-black/60 rounded-xl border border-white/10 glassmorph hover:border-blue-400/30 transition-all duration-300"
                style={{
                  backdropFilter: 'blur(10px)',
                }}
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-blue-300 transition-colors duration-300 hover:no-underline">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
