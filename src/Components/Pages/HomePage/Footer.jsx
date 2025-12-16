import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import LogoImage from '../../../assets/image/footer_logo.png'
import MakeInIndiaLogo from '../../../assets/image/Make_img.jpeg'
import ScheduleDemoModal from '../../Common/ScheduleDemoModal'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showCopyrightModal, setShowCopyrightModal] = useState(false)
  const sectionRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const helpfulLinks = [
    'Jewellery Software', 'Gold Loan Software', 'Jewellery App',
    'Accounting Software', 'GST Billing Software', 'E-Way Bill Software',
    'E-Invoicing Software', 'Invoicing Software', 'Quotation Software',
    'Lead Management Software', 'CRM Lead To Quote', 'Expense Management',
    'Invoicing API', 'Online Invoice Generator', 'Quotation Generator'
  ]

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    
    // If not on home page, navigate to home first, then scroll
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation and DOM update before scrolling
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
          const element = document.getElementById(sectionId)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }, 300)
    } else {
      // Already on home page, just scroll
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }

  const quickLinks = [
    { name: 'Home', href: '/', scrollTo: 'top' },
    { name: 'Jewellery Software', href: '/jewellery-software', page: true },
    { name: 'Gold Loan Software', href: '/gold-loan-software', page: true },
    { name: 'E-commerce', href: '/e-commerce', page: true },
    { name: 'Mobile App', href: '/mobile-app', page: true },
    { name: 'Videos', href: '/videos', page: true },
    { name: 'Contact Us', href: '/contact-us', page: true },
    { name: 'Demo invite', href: '/#demo', scrollTo: 'demo' },
    { name: 'Cloud Ready', href: '/#videos', scrollTo: 'videos' },
    { name: 'Jewellery buisness OS', href: '/#jewellery-software', scrollTo: 'jewellery-software' },
    { name: 'Why Choose Us', href: '/#why-us', scrollTo: 'why-us' },
    { name: 'Mobile App Section', href: '/#mobile-app', scrollTo: 'mobile-app' },
    { name: 'Social Proof', href: '/#social-proof', scrollTo: 'social-proof' },
    { name: 'Ready to Go', href: '/#demo', scrollTo: 'demo' },
    { name: 'FAQ', href: '/#faq', scrollTo: 'faq' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions', page: true },
    { name: 'Privacy Policy', href: '/privacy-policy', page: true },
  ]

  const contactInfo = [
    { label: 'Sales', numbers: ['+91 94208 44725', '+91 91731 42660'], color: 'text-emerald-400' },
    { label: 'Support', numbers: ['+91 95112 34218', '+91 94208 44725'], color: 'text-blue-400' },
    { label: 'Sr. Operations', numbers: ['+91 94208 44725'], color: 'text-teal-400' }
  ]

  return (
    <footer ref={sectionRef} className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2847] via-[#0D3C6F] to-[#0a2847]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[150px]"></div>
        </div>
        {/* Decorative Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {/* Column 1: Brand & CTA */}
              <div className={`lg:col-span-1 transition-all duration-700 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] rounded-xl blur opacity-30"></div>
                    <img
                      src={LogoImage}
                      alt="Unicorn Logo"
                      className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-xl object-cover shadow-lg"
                    />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">Unicorn</h2>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-teal-400/80 font-medium uppercase">
                      Jewellery Software
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 leading-relaxed">
                  Made in India for jewellers worldwide. Empowering your jewellery business with cutting-edge software solutions.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <button 
                    onClick={() => setShowDemoModal(true)}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(15,45,85,0.4)] hover:-translate-y-0.5 active:scale-95 touch-manipulation">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Schedule Demo
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1c918a] to-[#0f2d55] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <a 
                    href="https://wa.me/919420844725?text=Hello%2C%20I%20am%20interested%20in%20Unicorn%20Jewellery%20Software.%20Please%20provide%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl border-2 border-[#0f2d55] bg-white px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#0f2d55] shadow-lg transition-all duration-300 hover:bg-[#0f2d55] hover:text-white hover:shadow-xl active:scale-95 touch-manipulation text-center"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp Support
                    </span>
                  </a>
                </div>
              </div>

              {/* Column 2: Contact Information */}
              <div className={`transition-all duration-700 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-[#1c918a] to-transparent"></span>
                  Contact Us
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="group">
                      <p className={`text-xs font-semibold ${item.color} mb-1.5 uppercase tracking-wider`}>
                        {item.label}
                      </p>
                      <div className="space-y-1">
                        {item.numbers.map((number, idx) => (
                          <a
                            key={idx}
                            href={`tel:${number.replace(/\s/g, '')}`}
                            className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-200"
                          >
                            <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {number}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  {/* Email */}
                  <div className="group">
                    <p className="text-xs font-semibold text-rose-400 mb-1.5 uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:info@unicornsoftware.com"
                      className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-200"
                    >
                      <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Support@unicornteam.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 3: Quick Links */}
              <div className={`transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-[#1c918a] to-transparent"></span>
                  Quick Links
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-2 sm:gap-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          if (link.page) {
                            navigate(link.href)
                            window.scrollTo(0, 0)
                          } else if (link.scrollTo) {
                            scrollToSection(e, link.scrollTo)
                          } else {
                            // Fallback: navigate to href if no page or scrollTo specified
                            navigate(link.href)
                            window.scrollTo(0, 0)
                          }
                        }}
                        className="group flex items-center gap-1.5 text-xs sm:text-sm text-white/70 hover:text-teal-400 transition-all duration-200"
                      >
                        <svg className="w-3 h-3 text-teal-400/50 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all duration-200" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Social & Payment */}
              <div className={`transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                {/* Social Media */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-3 sm:mb-4 md:mb-6 flex items-center gap-2">
                  <span className="w-4 sm:w-6 md:w-8 h-0.5 bg-gradient-to-r from-[#1c918a] to-transparent"></span>
                  Follow Us
                </h3>
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/team-unicorn-787954376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-lg shadow-[#0A66C2]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#0A66C2]/40 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1F5zmjD2ft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#1877F2]/40 hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/unicorn__ucs?igsh=MmdodW5peWx3NDk3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@unicorn-o6j?si=irjyU3DRRUGkgAUo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#FF0000] text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-1"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>

                </div>

                {/* Payment Partners */}
                <h4 className="text-xs sm:text-sm font-semibold text-white/80 mb-3 sm:mb-4">Payment Partners</h4>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {/* VISA */}
                  <div className="flex h-7 sm:h-9 items-center justify-center rounded-lg bg-[#1A1F71] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider italic">VISA</span>
                  </div>
                  {/* UPI */}
                  <div className="flex h-7 sm:h-9 items-center justify-center rounded-lg bg-[#4B9F4C] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span className="text-[10px] sm:text-xs font-bold text-white">UPI</span>
                  </div>
                  {/* Mastercard */}
                  <div className="flex h-7 sm:h-9 items-center justify-center rounded-lg bg-[#2B2B2B] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="flex items-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#EB001B]"></div>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#F79E1B] -ml-1 sm:-ml-1.5"></div>
                    </div>
                  </div>
                  {/* RuPay */}
                  <div className="flex h-7 sm:h-9 items-center justify-center rounded-lg bg-gradient-to-r from-[#097969] to-[#228B22] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <span className="text-[10px] sm:text-xs font-bold text-white">RuPay</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Divider with Helpful Links */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className={`transition-all duration-700 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <h4 className="text-xs sm:text-sm font-semibold text-white/60 mb-3 sm:mb-4 uppercase tracking-wider">
                Helpful Links
              </h4>
              <div className="flex flex-wrap gap-x-1 sm:gap-x-1.5 gap-y-1.5 sm:gap-y-2">
                {helpfulLinks.map((link, index) => (
                  <span key={index} className="flex items-center">
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-teal-400 transition-colors duration-200 px-2 py-1"
                    >
                      {link}
                    </a>
                    {index < helpfulLinks.length - 1 && (
                      <span className="text-white/20">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className={`flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              {/* Copyright */}
              <div className="flex flex-col items-center md:items-start gap-1.5 sm:gap-2">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-white/50">
                  <span>© 2025</span>
                  <span className="text-teal-400/80 font-semibold">Unicorn</span>
                  <span className="hidden xs:inline">JEWELLERY SOFTWARE</span>
                  <span className="xs:hidden">JEWELLERY</span>
                  <span className="hidden sm:inline">|</span>
                  <button
                    type="button"
                    onClick={() => setShowCopyrightModal(true)}
                    className="text-teal-300 hover:text-teal-200 underline underline-offset-2 sm:underline-offset-4 decoration-teal-400/70 hover:decoration-teal-300 transition-colors duration-200 touch-manipulation"
                  >
                    All Rights Reserved
                  </button>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-white/40">
                  <span>Developed by</span>
                  <a 
                    href="tel:+919876543210" 
                    className="text-teal-400/70 hover:text-teal-400 transition-colors duration-200 font-medium touch-manipulation"
                  >
                    Swati Patel
                  </a>
                  <span>|</span>
                  <a 
                    href="https://wa.me/917203060213?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20demo%20for%20Unicorn%20Jewellery%20Software%20and%20I%20also%20want%20to%20design%20website%20and%20software.%20Please%20share%20more%20details." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400/70 hover:text-green-400 transition-colors duration-200 flex items-center gap-1 touch-manipulation"
                  >
                    Contact
                  </a>
                </div>
              </div>

              {/* Make with india */}
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/40">
                <span>Make in</span>
                <img 
                  src={MakeInIndiaLogo} 
                  alt="Make in India" 
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                />
                  <span> India </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Scheduling Modal */}
      <ScheduleDemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />

      {/* Copyright Detail Modal */}
      {showCopyrightModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowCopyrightModal(false)}
          ></div>

          {/* Modal */}
          <div className="relative w-full max-w-2xl transform transition-all duration-300 animate-[modalSlideIn_0.3s_ease-out]">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0D3C6F] to-[#0a2847] shadow-2xl border border-white/10 max-h-[80vh]">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>

              {/* Close Button */}
              <button
                onClick={() => setShowCopyrightModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative px-6 pt-8 pb-6 text-left text-white/80 overflow-y-auto">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Copyright Notice
                </h3>
                <p className="text-xs text-white/60 mb-4">
                  © 2025 Unicorn Jewellery Software. All Rights Reserved.
                </p>

                <div className="space-y-3 text-sm leading-relaxed">
                  <p>
                    No part of this software, its code, design, database structure, or related materials may be
                    reproduced, distributed, or transmitted in any form or by any means, including copying,
                    recording, or other electronic or mechanical methods, without prior written permission from
                    the copyright holder, except in the case of brief quotations used in reviews or permitted
                    under applicable copyright law.
                  </p>
                  <p>
                    Unauthorized use, duplication, modification, or distribution of this software is strictly
                    prohibited and may result in civil and criminal penalties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Animation Styles */}
      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </footer>
  )
}
export default Footer
