import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../../assets/image/Logo.png'

const navItems = [
  { name: 'Home', primary: 'Home', path: '/' },
  { name: 'Jewellery Software', primary: 'Jewellery Software', path: '/jewellery-software' },
  { name: 'Gold Loan Software', primary: 'Gold Loan Software', path: '/gold-loan-software' },
  { name: 'E-commerce', primary: 'E-commerce', path: '/e-commerce' },
  { name: 'Mobile App', primary: 'Mobile App', path: '/mobile-app' },
  { name: 'Videos', primary: 'Videos', path: '/videos' },
  { name: 'Contact Us', primary: 'Contact Us', path: '/contact-us' },
]

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
]

const softwarePackages = [
  'Jewellery Software',
  'Gold Loan Software',
  'E-commerce Solution',
  'Mobile App',
  'Complete Package'
]

const Header = () => {
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showForgotModal, setShowForgotModal] = useState(false)
  const [forgotStep, setForgotStep] = useState(1) // 1: email, 2: otp, 3: new password
  const [isSignUp, setIsSignUp] = useState(false)
  const [smsConsent, setSmsConsent] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isVisible = true
  const location = useLocation()

  // Auto open Request Demo popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDemoModal(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    alert('Demo request submitted successfully! Our team will contact you soon.')
    setShowDemoModal(false)
  }

  const handleSignInSubmit = (e) => {
    e.preventDefault()
    alert(isSignUp ? 'Account created successfully!' : 'Signed in successfully!')
    setShowSignInModal(false)
  }

  const handleForgotSubmit = (e) => {
    e.preventDefault()
    if (forgotStep === 1) {
      setForgotStep(2)
    } else if (forgotStep === 2) {
      setForgotStep(3)
    } else {
      alert('Password reset successfully!')
      setShowForgotModal(false)
      setForgotStep(1)
      setShowSignInModal(true)
    }
  }

  const openForgotPassword = () => {
    setShowSignInModal(false)
    setShowForgotModal(true)
    setForgotStep(1)
  }

  const backToSignIn = () => {
    setShowForgotModal(false)
    setForgotStep(1)
    setShowSignInModal(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-gradient-to-r from-white via-blue-50/80 to-white shadow-sm transition-all duration-300" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
        <div className="flex w-full items-center justify-between px-2 min-[375px]:px-3 sm:px-4 md:px-6 py-2.5 min-[375px]:py-3 sm:py-4 lg:px-12">
          <Link
            to="/"
            className={`flex items-center gap-1.5 min-[375px]:gap-2 sm:gap-3 md:gap-4 transition-all duration-700 focus:outline-none focus:ring-0 active:bg-transparent ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
            }`}
          >
            <img
              src={Logo}
              alt="Unicorn logo"
              className="h-7 w-7 min-[375px]:h-8 min-[375px]:w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg min-[375px]:rounded-xl object-cover shadow-none animate-logo-entrance animate-logo-float hover:scale-110 hover:rotate-3 hover:shadow-lg hover:shadow-[#0f2d55]/30 transition-all duration-300 pointer-events-none"
            />
            <div className="flex flex-col">
              <p className="text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#0f2d55] to-[#1c918a] bg-clip-text text-transparent animate-text-fade-in animate-gradient-shimmer leading-tight">
                Unicorn
              </p>
              <span className="text-[8px] min-[375px]:text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] font-semibold tracking-[0.1em] min-[375px]:tracking-[0.15em] sm:tracking-[0.2em] text-slate-500 uppercase animate-text-fade-in-delay leading-tight">
                Jewellery Software
              </span>
            </div>
          </Link>

          <nav
            className={`hidden items-center gap-1 transition-all duration-700 delay-200 lg:flex ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            {navItems.map((item, idx) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group relative rounded-xl px-3 xl:px-5 py-2 xl:py-3 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#0f2d55] to-[#1c918a] shadow-lg shadow-blue-200' 
                      : 'hover:bg-gradient-to-r hover:from-[#0f2d55] hover:to-[#1c918a]'
                  }`}
                  style={{ transitionDelay: `${300 + idx * 50}ms` }}
                >
                  <span className={`text-xs xl:text-sm font-bold whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-slate-700 group-hover:text-white'
                  }`}>{item.primary}</span>
                </Link>
              )
            })}
          </nav>

          <div
            className={`flex items-center gap-1 min-[375px]:gap-1.5 sm:gap-2 md:gap-4 transition-all duration-700 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
          >
            <button
              onClick={() => setShowDemoModal(true)}
              className="hidden rounded-xl border-2 border-[#0f2d55] px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 text-xs sm:text-sm font-bold text-[#0f2d55] transition-all duration-300 hover:bg-[#0f2d55] hover:text-white hover:shadow-lg md:block touch-manipulation"
            >
              Request Demo
            </button>
            <button
              onClick={() => { setShowSignInModal(true); setIsSignUp(false); }}
              className="rounded-lg min-[375px]:rounded-xl bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-2.5 py-1.5 min-[375px]:px-3 min-[375px]:py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 text-[10px] min-[375px]:text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0f2d55]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#0f2d55]/50 touch-manipulation min-w-[60px] min-[375px]:min-w-[70px] sm:min-w-[80px]"
            >
              Sign In
            </button>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-9 h-9 min-[375px]:w-10 min-[375px]:h-10 sm:w-11 sm:h-11 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors touch-manipulation"
              aria-label="Toggle menu"
            >
              <span className={`block w-4 min-[375px]:w-5 h-0.5 bg-[#0f2d55] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-4 min-[375px]:w-5 h-0.5 bg-[#0f2d55] mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-4 min-[375px]:w-5 h-0.5 bg-[#0f2d55] mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-3 min-[375px]:px-4 sm:px-6 py-3 min-[375px]:py-4 border-t border-blue-100 bg-white">
            <nav className="flex flex-col gap-1.5 min-[375px]:gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-lg min-[375px]:rounded-xl px-3 py-2.5 min-[375px]:px-4 min-[375px]:py-3 text-xs min-[375px]:text-sm sm:text-base font-semibold transition-all duration-300 touch-manipulation active:scale-95 ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#0f2d55] to-[#1c918a] text-white' 
                        : 'text-slate-700 hover:bg-gradient-to-r hover:from-[#0f2d55] hover:to-[#1c918a] hover:text-white active:bg-gradient-to-r active:from-[#0f2d55] active:to-[#1c918a] active:text-white'
                    }`}
                  >
                    {item.primary}
                  </Link>
                )
              })}
              <button
                onClick={() => { setShowDemoModal(true); setIsMobileMenuOpen(false); }}
                className="mt-1.5 min-[375px]:mt-2 rounded-lg min-[375px]:rounded-xl border-2 border-[#0f2d55] px-3 py-2.5 min-[375px]:px-4 min-[375px]:py-3 text-xs min-[375px]:text-sm sm:text-base font-bold text-[#0f2d55] transition-all duration-300 hover:bg-[#0f2d55] hover:text-white active:bg-[#0f2d55] active:text-white active:scale-95 touch-manipulation"
              >
                Request Demo
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Request Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center overflow-y-auto p-2 min-[375px]:p-3 sm:p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowDemoModal(false)}
          />

          {/* Modal card - responsive width + internal scroll so full form is always reachable */}
          <div className="relative mt-6 mb-6 w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto animate-modalSlide rounded-xl min-[375px]:rounded-2xl sm:rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute right-2 top-2 min-[375px]:right-3 min-[375px]:top-3 sm:right-4 sm:top-4 z-10 flex h-8 w-8 min-[375px]:h-9 min-[375px]:w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-slate-200 hover:text-slate-700 active:bg-slate-300 touch-manipulation"
            >
              <svg className="h-3.5 w-3.5 min-[375px]:h-4 min-[375px]:w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-3 min-[375px]:px-4 sm:px-6 md:px-8 py-3 min-[375px]:py-4 sm:py-5 md:py-6 text-center text-white">
              <h2 className="text-lg min-[375px]:text-xl sm:text-2xl font-bold">Request Demo</h2>
              <p className="mt-1 text-[10px] min-[375px]:text-xs sm:text-sm text-white/80">Fill the form and our team will schedule a personalized demo</p>
            </div>

            <form onSubmit={handleDemoSubmit} className="p-3 min-[375px]:p-4 sm:p-6 md:p-8">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Name<span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter Name" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Phone No.<span className="text-red-500">*</span></label>
                    <div className="flex">
                      <span className="flex items-center rounded-l-lg border border-r-0 border-slate-200 bg-slate-100 px-3 text-sm">🇮🇳</span>
                      <input type="tel" placeholder="Enter Phone No." className="w-full rounded-r-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Email ID<span className="text-red-500">*</span></label>
                    <input type="email" placeholder="Enter Email ID" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Business Name<span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter Business Name" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">City<span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter City" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">State<span className="text-red-500">*</span></label>
                    <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required>
                      <option value="">Select State</option>
                      {states.map((state) => (<option key={state} value={state}>{state}</option>))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Interested In<span className="text-red-500">*</span></label>
                    <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required>
                      <option value="">Select Software Package</option>
                      {softwarePackages.map((pkg) => (<option key={pkg} value={pkg}>{pkg}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Preferred Demo Time</label>
                    <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20">
                      <option value="">Select Time Slot</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-600">Message (Optional)</label>
                  <textarea placeholder="Tell us about your requirements..." rows={3} className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" />
                </div>

                <label className="flex cursor-pointer items-center gap-2">
                  <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-[#0f2d55] focus:ring-[#0f2d55]" />
                  <span className="text-sm text-slate-600">I agree to receive updates via SMS/WhatsApp.</span>
                </label>

                <div className="flex flex-col sm:flex-row gap-2 min-[375px]:gap-3 pt-2">
                  <button type="button" onClick={() => setShowDemoModal(false)} className="flex-1 rounded-lg border border-slate-200 py-2.5 min-[375px]:py-3 text-xs min-[375px]:text-sm sm:text-base font-semibold text-slate-600 transition-all hover:bg-slate-50 active:bg-slate-100 touch-manipulation">Cancel</button>
                  <button type="submit" className="flex-1 rounded-lg bg-gradient-to-r from-[#0f2d55] to-[#1c918a] py-2.5 min-[375px]:py-3 text-xs min-[375px]:text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#0f2d55]/30 transition-all hover:shadow-xl active:shadow-lg touch-manipulation">Submit Request</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Sign In / Sign Up Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 min-[375px]:p-3 sm:p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSignInModal(false)}
          />
          
          <div className={`relative max-h-[95vh] min-[375px]:max-h-[90vh] w-full animate-modalSlide overflow-y-auto rounded-xl min-[375px]:rounded-2xl sm:rounded-3xl bg-white shadow-2xl transition-all duration-300 ${isSignUp ? 'max-w-3xl' : 'max-w-md'}`}>
            <button
              onClick={() => setShowSignInModal(false)}
              className="absolute right-2 top-2 min-[375px]:right-3 min-[375px]:top-3 sm:right-4 sm:top-4 z-10 flex h-8 w-8 min-[375px]:h-9 min-[375px]:w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/80 text-slate-500 transition-all hover:bg-white hover:text-slate-700 active:bg-slate-100 touch-manipulation"
            >
              <svg className="h-3.5 w-3.5 min-[375px]:h-4 min-[375px]:w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-3 min-[375px]:px-4 sm:px-6 md:px-8 py-3 min-[375px]:py-4 sm:py-5 md:py-6 text-center text-white">
              <h2 className="text-lg min-[375px]:text-xl sm:text-2xl font-bold">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
              <p className="mt-1 text-[10px] min-[375px]:text-xs sm:text-sm text-white/80 px-1 min-[375px]:px-2">
                {isSignUp ? 'All in one solution for Jewellery Accounting & Billing Software' : 'Welcome back! Please sign in to continue'}
              </p>
            </div>

            <div className="p-3 min-[375px]:p-4 sm:p-6 md:p-8">
              {/* Toggle Tabs */}
              <div className="mb-6 flex rounded-xl bg-slate-100 p-1">
                <button
                  onClick={() => setIsSignUp(false)}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all duration-300 ${!isSignUp ? 'bg-white text-[#0f2d55] shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsSignUp(true)}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all duration-300 ${isSignUp ? 'bg-white text-[#0f2d55] shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  Sign Up
                </button>
              </div>

              <form onSubmit={handleSignInSubmit}>
                {isSignUp ? (
                  /* Sign Up Form */
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Name<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Enter Name" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Phone No.<span className="text-red-500">*</span></label>
                        <div className="flex">
                          <span className="flex items-center rounded-l-lg border border-r-0 border-slate-200 bg-slate-100 px-3 text-sm">🇮🇳</span>
                          <input type="tel" placeholder="Enter Phone No." className="w-full rounded-r-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Email ID<span className="text-red-500">*</span></label>
                        <input type="email" placeholder="Enter Email ID" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-[#0f2d55]">Jewellersapp Code</label>
                        <input type="text" placeholder="Enter Unique Code" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Billing Name<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Billing Name" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-[#0f2d55]">GST No. (Optional)</label>
                        <input type="text" placeholder="GST No." className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-600">Address</label>
                        <input type="text" placeholder="Enter Address" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">State<span className="text-red-500">*</span></label>
                        <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required>
                          <option value="">Select State</option>
                          {states.map((state) => (<option key={state} value={state}>{state}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Country<span className="text-red-500">*</span></label>
                        <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required>
                          <option value="India">India</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">City<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Enter City" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Pincode<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Enter Pincode" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">User / Login ID<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Enter Login ID" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Password<span className="text-red-500">*</span></label>
                        <input type="password" placeholder="********" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Software Packages</label>
                        <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20">
                          <option value="">Select Software Packages</option>
                          {softwarePackages.map((pkg) => (<option key={pkg} value={pkg}>{pkg}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-slate-600">Staff Code</label>
                        <input type="text" placeholder="Staff Code" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 font-mono text-lg tracking-widest">
                          <span className="italic text-blue-600">I</span>
                          <span className="text-red-500">r</span>
                          <span className="font-bold text-green-600">P</span>
                          <span className="text-purple-600">u</span>
                        </div>
                        <input type="text" placeholder="Enter Captcha" className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                      </div>
                    </div>

                    <label className="flex cursor-pointer items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#0f2d55] focus:ring-[#0f2d55]" />
              <span className="text-sm text-slate-600">
                I agree to receive free SMS messages from Unicorn Jewellery Software.
              </span>
              <button
                type="button"
                onClick={() => { window.location.href = '/terms-and-conditions' }}
                className="text-xs font-semibold text-[#0f2d55] underline underline-offset-4 decoration-[#1c918a]/70 hover:decoration-[#1c918a] hover:text-[#1c918a] transition-colors"
              >
                Terms &amp; Conditions
              </button>
                    </label>

                    <button type="submit" className="mt-2 w-full rounded-lg bg-gradient-to-r from-[#0f2d55] to-[#1c918a] py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#0f2d55]/30 transition-all hover:shadow-xl active:shadow-lg touch-manipulation">
                      Submit
                    </button>
                  </div>
                ) : (
                  /* Sign In Form */
                  <div className="space-y-5">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-600">Email / Login ID<span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter Email or Login ID" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-slate-600">Password<span className="text-red-500">*</span></label>
                      <input type="password" placeholder="Enter Password" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex cursor-pointer items-center gap-2">
                        <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#0f2d55] focus:ring-[#0f2d55]" />
                        <span className="text-slate-600">Remember me</span>
                      </label>
                      <button type="button" onClick={openForgotPassword} className="font-medium text-[#0f2d55] hover:underline">Forgot Password?</button>
                    </div>

                    <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-[#0f2d55] to-[#1c918a] py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#0f2d55]/30 transition-all hover:shadow-xl active:shadow-lg touch-manipulation">
                      Sign In
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 min-[375px]:p-3 sm:p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => { setShowForgotModal(false); setForgotStep(1); }}
          />
          
          <div className="relative w-full max-w-md animate-modalSlide rounded-xl min-[375px]:rounded-2xl sm:rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => { setShowForgotModal(false); setForgotStep(1); }}
              className="absolute right-2 top-2 min-[375px]:right-3 min-[375px]:top-3 sm:right-4 sm:top-4 z-10 flex h-8 w-8 min-[375px]:h-9 min-[375px]:w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/80 text-slate-500 transition-all hover:bg-white hover:text-slate-700 active:bg-slate-100 touch-manipulation"
            >
              <svg className="h-3.5 w-3.5 min-[375px]:h-4 min-[375px]:w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-3 min-[375px]:px-4 sm:px-6 md:px-8 py-3 min-[375px]:py-4 sm:py-5 md:py-6 text-center text-white">
              <h2 className="text-lg min-[375px]:text-xl sm:text-2xl font-bold">
                {forgotStep === 1 && 'Forgot Password'}
                {forgotStep === 2 && 'Verify OTP'}
                {forgotStep === 3 && 'Reset Password'}
              </h2>
              <p className="mt-1 text-[10px] min-[375px]:text-xs sm:text-sm text-white/80">
                {forgotStep === 1 && 'Enter your email to receive OTP'}
                {forgotStep === 2 && 'Enter the OTP sent to your email'}
                {forgotStep === 3 && 'Create your new password'}
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-1 min-[375px]:gap-1.5 sm:gap-2 px-3 min-[375px]:px-4 sm:px-6 md:px-8 pt-3 min-[375px]:pt-4 sm:pt-6">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${forgotStep >= 1 ? 'bg-[#0f2d55] text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
              <div className={`h-1 w-12 rounded ${forgotStep >= 2 ? 'bg-[#0f2d55]' : 'bg-slate-200'}`} />
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${forgotStep >= 2 ? 'bg-[#0f2d55] text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
              <div className={`h-1 w-12 rounded ${forgotStep >= 3 ? 'bg-[#0f2d55]' : 'bg-slate-200'}`} />
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${forgotStep >= 3 ? 'bg-[#0f2d55] text-white' : 'bg-slate-200 text-slate-500'}`}>3</div>
            </div>

            <form onSubmit={handleForgotSubmit} className="p-3 min-[375px]:p-4 sm:p-6 md:p-8">
              {forgotStep === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Email / Login ID<span className="text-red-500">*</span></label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <input type="text" placeholder="Enter Email or Login ID" className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-[#0f2d55] to-[#1c918a] py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#0f2d55]/30 transition-all hover:shadow-xl active:shadow-lg touch-manipulation">
                    Send OTP
                  </button>
                </div>
              )}

              {forgotStep === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Enter OTP<span className="text-red-500">*</span></label>
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="h-12 w-12 rounded-lg border border-slate-200 bg-slate-50 text-center text-lg font-semibold transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20"
                          required
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-sm text-slate-500">
                    Didn't receive OTP? <button type="button" className="font-medium text-[#0f2d55] hover:underline">Resend</button>
                  </p>
                  <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-[#0f2d55] to-[#1c918a] py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#0f2d55]/30 transition-all hover:shadow-xl active:shadow-lg touch-manipulation">
                    Verify OTP
                  </button>
                </div>
              )}

              {forgotStep === 3 && (
                <div className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">New Password<span className="text-red-500">*</span></label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </span>
                      <input type="password" placeholder="Enter New Password" className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-slate-600">Confirm Password<span className="text-red-500">*</span></label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                      <input type="password" placeholder="Confirm New Password" className="w-full rounded-lg border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm transition-all focus:border-[#0f2d55] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2d55]/20" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-[#0f2d55] to-[#1c918a] py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#0f2d55]/30 transition-all hover:shadow-xl active:shadow-lg touch-manipulation">
                    Reset Password
                  </button>
                </div>
              )}

              <button
                type="button"
                onClick={backToSignIn}
                className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#0f2d55]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Sign In
              </button>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes modalSlide {
            from { opacity: 0; transform: scale(0.95) translateY(-20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-modalSlide { animation: modalSlide 0.3s ease-out; }
          
          @keyframes logoEntrance {
            0% { 
              opacity: 0; 
              transform: scale(0.8) translateY(-10px) rotate(-10deg); 
              filter: blur(4px);
            }
            60% { 
              opacity: 1; 
              transform: scale(1.05) translateY(0px) rotate(5deg); 
              filter: blur(0px);
            }
            100% { 
              opacity: 1; 
              transform: scale(1) translateY(0px) rotate(0deg); 
              filter: blur(0px);
            }
          }
          .animate-logo-entrance { 
            animation: logoEntrance 1s cubic-bezier(0.34, 1.56, 0.64, 1); 
          }
          
          @keyframes logoFloat {
            0%, 100% { 
              transform: translateY(0px) scale(1);
              filter: brightness(1) drop-shadow(0 0 0px rgba(15, 45, 85, 0));
            }
            50% { 
              transform: translateY(-5px) scale(1.02);
              filter: brightness(1.1) drop-shadow(0 4px 12px rgba(15, 45, 85, 0.3));
            }
          }
          .animate-logo-float { 
            animation: logoFloat 3s ease-in-out infinite; 
          }
          
          @keyframes textFadeIn {
            0% { 
              opacity: 0; 
              transform: translateY(10px); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          .animate-text-fade-in { 
            animation: textFadeIn 0.8s ease-out 0.3s both; 
          }
          .animate-text-fade-in-delay { 
            animation: textFadeIn 0.8s ease-out 0.6s both; 
          }
          
          @keyframes gradientShimmer {
            0%, 100% {
              filter: brightness(1);
              text-shadow: 0 0 0px rgba(15, 45, 85, 0);
            }
            50% {
              filter: brightness(1.2);
              text-shadow: 0 0 8px rgba(28, 145, 138, 0.4);
            }
          }
          .animate-gradient-shimmer {
            animation: gradientShimmer 3s ease-in-out infinite;
          }
        `}
      </style>
    </>
  )
}

export default Header
