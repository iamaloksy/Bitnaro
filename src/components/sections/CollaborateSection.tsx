
import { Button } from "@/components/ui/button"

export default function CollaborateSection() {
  return (
    <section className="py-16 px-4 bg-black/80 backdrop-blur-sm border-b border-white/10 text-center" id="collaborate">
      <h2 className="text-3xl md:text-4xl font-semibold mb-3">Join Us &amp; Collaborate</h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Whether you&apos;re a student, developer, mentor, or organization &mdash; let&#39;s build the future together.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-7 w-full">
        <Button asChild className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold px-7 py-2 rounded-xl hover:scale-105 transition">
          <a href="#contact">Become a Partner</a>
        </Button>
        <Button asChild variant="outline" className="font-semibold border-blue-400 bg-gray-900/90 text-white hover:border-green-400 transition">
          <a href="https://github.com/bitnaro" target="_blank" rel="noopener">Contribute to Bitnaro</a>
        </Button>
      </div>
    </section>
  )
}
