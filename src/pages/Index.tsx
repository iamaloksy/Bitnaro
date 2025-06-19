
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FAQSection from "@/components/sections/FAQSection"
import PlatformsSection from "@/components/sections/PlatformsSection"
import CollaborateSection from "@/components/sections/CollaborateSection"
import ContactSection from "@/components/sections/ContactSection"
import SiteFooter from "@/components/sections/SiteFooter"
import Navbar from "@/components/sections/Navbar"

const Index = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#11182b] via-[#181d31] to-[#121622] text-white">
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <div className="h-16 md:h-14" id="home" />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <PlatformsSection />
        <CollaborateSection />
        <ContactSection />
        <SiteFooter />
      </div>
    </main>
  )
}

export default Index
