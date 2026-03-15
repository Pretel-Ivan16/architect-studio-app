"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#6b1426]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-[#faf0ef]/60 text-sm tracking-[0.3em] uppercase mb-4">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#faf0ef] font-light leading-tight">
              Let's talk about <br /><span className="italic">your project </span>
            </h2>
            <p className="mt-8 text-[#faf0ef]/80 leading-relaxed mx-w-md">
              Every great project starts with a conversation. Tell us about your vision, and let's explore the possibilities together.
            </p>
            <div className="mt-12 space-y-6">
              <div>
                <p className="text-[#faf0ef]/60 text-sm tracking-wider uppercase mb-2">Direction</p>
                <p className="text-[#faf0ef]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, distinctio.
                  <br />Lorem, ipsum dolor.
                </p>
              </div>
              <div>
                <p className="text-[#faf0ef]/60 text-sm tracking-wider uppercase mb-2">
                  Email
                </p>
                <a href="mailto:hola@stellarq.ar" className="text-[#faf0ef] hover:text-[#faf0ef]/80 transition-colors">hola@stellarq.ar</a>
              </div>
              <div>
                <p className="text-[#faf0ef]/60 text-sm tracking-wider uppercase mb-2">
                  Telephone
                </p>
                <a href="tel:+542964419712" className="text-[#faf0ef] hover:text-[#faf0ef]/80 transition-colors">
                  +54 0 2964 4197 12
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#faf0ef]/60 test-sm tracking-wider uppercase mb-2">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-[#faf0ef]/30 pb-3 text-[#faf0ef] placeholder:text-[#faf0ef]/40 focus:border-[#faf0ef] focus:outline-none transition-colors"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#faf0ef]/60 test-sm tracking-wider uppercase mb-2">
                Email
              </label>
              <input 
                type="text" 
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-[#faf0ef]/30 pb-3 text-[#faf0ef] placeholder:text-[#faf0ef]/40 focus:border-[#faf0ef] focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="project" className="block text-[#faf0ef]/60 test-sm tracking-wider uppercase mb-2">
                Project
              </label>
              <select
                id="project"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full bg-transparent border-b border-[#faf0ef]/30 pb-3 text-[#faf0ef] focus:border-[#faf0ef] focus:outline-none transition-colors cursor-pointer"
                required
              >
                <option value="" className="bg-[#6b1426] text-[#faf0ef] ">Select an option</option>
                <option value="residential" className="bg-[#6b1426] text-[#faf0ef]">Residential</option>
                <option value="commercial" className="bg-[#6b1426] text-[#faf0ef]">Commercial</option>
                <option value="cultural" className="bg-[#6b1426] text-[#faf0ef]">Cultural</option>
                <option value="renovation" className="bg-[#6b1426] text-[#faf0ef]">Renovation</option>
                <option value="other" className="bg-[#6b1426] text-[#faf0ef]">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-[#faf0ef]/60 text-sm tracking-wider uppercase mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b border-[#faf0ef]/30 pb-3 text-[#faf0ef] placeholder:text-[#faf0ef]/40 focus:border-[#faf0ef] focus:outline-none transition-colors resize-none custom-scrollbar"
                placeholder=""
                required
              />
            </div>

            <button 
              type="submit"
              className="inline-flex items-center gap-2 mt-4 text-[#faf0ef] text-sm tracking-widest uppercase border border-[#faf0ef]/30 px-8 py-4 hover:bg-[#faf0ef] hover:text-[#6b1426] transition-all duration-300"
            >
              Send Message
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
