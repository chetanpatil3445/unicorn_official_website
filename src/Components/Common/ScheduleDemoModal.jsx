import { useState } from 'react'

const ScheduleDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+91 94208 44725',
    company: '',
    dateTime: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon to schedule your demo.')
    onClose()
    setFormData({ name: '', email: '', phone: '+91 94208 44725', company: '', dateTime: '', message: '' })
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-2xl bg-gradient-to-br from-[#0f2d55] to-[#1a3a5c] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
        >
          ×
        </button>
        
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1c918a] text-2xl">
              📅
            </div>
            <h2 className="text-3xl font-bold text-white">Schedule a Demo</h2>
          </div>
          <p className="ml-16 text-white/80">
            Fill in your details and we'll get back to you shortly
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 transition-all focus:border-[#1c918a] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 transition-all focus:border-[#1c918a] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-white">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 transition-all focus:border-[#1c918a] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                placeholder="+91 94208 44725"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-semibold text-white">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 transition-all focus:border-[#1c918a] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                placeholder="Your jewellery business"
              />
            </div>
          </div>

          <div>
            <label htmlFor="dateTime" className="mb-2 block text-sm font-semibold text-white">
              Preferred Date & Time
            </label>
            <div className="relative">
              <input
                type="text"
                id="dateTime"
                value={formData.dateTime}
                onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 pr-12 text-white placeholder:text-white/50 transition-all focus:border-[#1c918a] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
                placeholder="dd-mm-yyyy --:--"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl">📅</span>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 transition-all focus:border-[#1c918a] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#1c918a]/20"
              placeholder="Tell us about your requirements..."
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>📅</span>
              Request Demo
            </button>
          </div>

          <p className="text-center text-xs text-white/60">
            By submitting, you agree to our{' '}
            <a href="#" className="text-[#1c918a] hover:underline">Privacy Policy</a> and{' '}
            <a href="#" className="text-[#1c918a] hover:underline">Terms & Conditions</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ScheduleDemoModal

