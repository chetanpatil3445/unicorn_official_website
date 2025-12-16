import { useState, useEffect } from 'react'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'

const contactMethods = [
  {
    icon: '📞',
    title: 'Sales',
    description: 'Talk to our sales team for pricing and demos.',
    contact: '+91 94208 447251',
    action: '+91 94208 447251',
  },
  {
    icon: '💬',
    title: 'Support',
    description: '24/7 technical support for existing customers.',
    contact: ' Support@unicornteam.in',
    action: 'mailto: Support@unicornteam.in',
  },
  { 
    icon: '💼',
    title: 'Partnerships',
    description: 'Explore business partnership opportunities.',
    contact: ' Support@unicornteam.in',
    action: 'mailto: Support@unicornteam.in',
  },
]

const faqItems = [
  {
    question: 'What are your business hours?',
    answer: 'Our sales team is available Monday to Saturday, 9 AM to 7 PM IST. Technical support is available 24/7.',
  },
  {
    question: 'How quickly can I expect a response?',
    answer: 'We typically respond to inquiries within 2-4 business hours. For urgent matters, please call our hotline.',
  },
  {
    question: 'Do you offer on-site demonstrations?',
    answer: 'Yes! We provide free on-site demos for businesses in major cities. Contact our sales team to schedule.',
  },
]

const ContactUs = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setIsHeroVisible(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
      <Header />  

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c918a]/5 via-transparent to-[#0f2d55]/5" />

        <div className="relative mx-auto max-w-6xl text-center">
          <div
            className={`mx-auto inline-flex items-center gap-2 sm:gap-3 rounded-full border border-[#1c918a]/40 bg-white px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-[#1c918a] shadow-[0_10px_28px_rgba(15,45,85,0.15)] transition-all duration-700 ${
              isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#1c918a] shadow-[0_0_0_3px_rgba(28,145,138,0.18)] sm:shadow-[0_0_0_4px_rgba(28,145,138,0.18)]" />
            <span>Get In Touch</span>
          </div>

          <h1 className={`mt-8 sm:mt-10 md:mt-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0f2d55] transition-all duration-700 delay-150 ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            We're Here to Help
          </h1>

          <p className={`mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-slate-600 transition-all duration-700 delay-300 ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            Have a question, need support, or want to schedule a demo? Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.action}
                className="group rounded-2xl bg-gradient-to-br from-[#fff8ef] to-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-4xl">{method.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {method.title}
                </h3>
                <p className="mt-2 text-slate-600">{method.description}</p>
                <p className="mt-4 font-semibold text-[#1c918a]">{method.contact}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#faf9f7] py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0f2d55]">Send us a message</h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">Fill out the form and we'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-green-50 p-8 text-center">
                <span className="text-5xl">✅</span>
                <h3 className="mt-4 text-xl font-semibold text-green-800">Message Sent!</h3>
                <p className="mt-2 text-green-600">Thank you for reaching out. We'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[#1c918a] focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                      placeholder="Enter Your Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[#1c918a] focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[#1c918a] focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                      placeholder="+91 94208 44725"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[#1c918a] focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                    >
                      <option value="">Select a subject</option>
                      <option value="demo">Request a Demo</option>
                      <option value="pricing">Pricing Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 focus:border-[#1c918a] focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-[#0f2d55] to-[#1c918a] py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
          <p className="mt-3 inline-flex items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base lg:text-lg font-semibold uppercase tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.7em] text-[#1c918a] mb-4 sm:mb-6">
              <span className="h-px w-6 sm:w-8 md:w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                FAQ
              </span>
              <span className="h-px w-6 sm:w-8 md:w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl font-bold text-[#0f2d55]">Common Questions</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl bg-[#f5f0e8] transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#0f2d55]">{item.question}</span>
                  <span className={`text-2xl text-[#1c918a] transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-5 text-slate-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactUs
