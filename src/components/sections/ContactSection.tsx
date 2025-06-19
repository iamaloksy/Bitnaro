
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-[#181e2a] text-white border-b border-white/10" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Contact info/social */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300 mb-6">Get in touch for collaborations, support, or inquiries.</p>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2 text-gray-400">
              <Mail className="text-blue-400" size={18} />
              <span>support@bitnaro.xyz</span>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Follow Us</div>
            <div className="flex gap-4">
              <a className="p-2 rounded-xl bg-gray-900 border border-white/10 hover:bg-blue-900/70 hover:scale-110 transition" href="https://linkedin.com/company/bitnaro" target="_blank" rel="noopener" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a className="p-2 rounded-xl bg-gray-900 border border-white/10 hover:bg-gray-700/60 hover:scale-110 transition" href="https://github.com/bitnaro" target="_blank" rel="noopener" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a className="p-2 rounded-xl bg-gray-900 border border-white/10 hover:bg-blue-400/30 hover:scale-110 transition" href="https://twitter.com/bitnaro" target="_blank" rel="noopener" aria-label="Twitter">
                <Twitter size={22} />
              </a>
              <a className="p-2 rounded-xl bg-gray-900 border border-white/10 hover:bg-blue-400/30 hover:scale-110 transition" href="https://instagram.com/bitnaro" target="_blank" rel="noopener" aria-label="Twitter">
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>
        {/* Right: Simple form (no submission logic) */}
        <div>
          <form 
          action="https://formsubmit.co/kr.alok.sy@gmail.com" 
  method="POST"
          className="bg-black/60 rounded-2xl p-6 shadow space-y-5 glassmorph border border-white/10 max-w-md mx-auto">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://bitnaro.vercel.app/thanks" />


            <div>
              <label className="block mb-1 text-sm font-semibold" htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" name="name" placeholder="Your name" required
                className="w-full bg-[#1c2028] border-[1.5px] border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/60 transition" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold" htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" name="email" placeholder="you@example.com" required
                className="w-full bg-[#1c2028] border-[1.5px] border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/60 transition" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" placeholder="How can we help you?" rows={4} required
                className="w-full bg-[#1c2028] border-[1.5px] border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/60 transition resize-none" />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold py-2 rounded-xl hover:scale-105 transition"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
