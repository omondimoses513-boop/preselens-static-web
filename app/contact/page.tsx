'use client'

import HeroSection from '@/components/HeroSection'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'info@praecellens.ke',
      link: 'mailto:info@praecellens.ke',
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+254 20 XXXX XXXX',
      link: 'tel:+254XXXXXXXXXX',
    },
    {
      icon: '📍',
      title: 'Address',
      details: 'Nairobi, Kenya',
      link: '#',
    },
    {
      icon: '🕐',
      title: 'Business Hours',
      details: 'Mon-Fri: 8am-5pm EAT',
      link: '#',
    },
  ]

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Us"
        description="Have a project in mind? Let&apos;s discuss how we can help bring your vision to life"
      />

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Contact Information</h2>
              <p className="text-lg text-gray mb-8 leading-relaxed">
                Whether you have a specific project in mind or want to discuss your engineering needs, our team is ready to help. Contact us today for a consultation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="bg-light rounded-xl p-6">
                    <div className="text-4xl mb-3">{info.icon}</div>
                    <h3 className="text-lg font-bold text-primary mb-2">{info.title}</h3>
                    {info.link.startsWith('http') || info.link.startsWith('mailto') || info.link.startsWith('tel') ? (
                      <a
                        href={info.link}
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray">{info.details}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✓ Thank you! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="">Select a project type</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="electrical">Electrical Engineering</option>
                    <option value="mechanical">Mechanical Engineering</option>
                    <option value="energy">Energy Solutions</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-primary mb-12">Find Us</h2>
          <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl mb-2">📍</p>
              <p className="text-gray">Nairobi, Kenya</p>
              <p className="text-sm text-gray mt-2">Map integration available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
