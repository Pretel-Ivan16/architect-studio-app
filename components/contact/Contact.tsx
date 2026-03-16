"use client"

import { useState } from "react"
import { ContactHeader } from './ContactHeader'
import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'
import { contactContent } from '@/data/contact'

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
            <ContactHeader
              subtitle={contactContent.subtitle}
              title={contactContent.title}
              titleHighlight={contactContent.titleHighlight}
              description={contactContent.description}
            />
            <ContactInfo
              direction={contactContent.direction}
              email={contactContent.email}
              phone={contactContent.phone}
            />
          </div>
          <ContactForm
            formData={formData}
            onFormDataChange={setFormData}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
