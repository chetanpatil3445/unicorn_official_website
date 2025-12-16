import { useState, useEffect, useRef } from 'react'
import appImg from '../../../assets/image/App_img.png'

const features = [
  {
    icon: '📸',
    title: 'Digital Catalogue',
    description: 'Virtual try-on sharing & digital product showcase',
    color: 'from-[#0f2d55] to-[#1c918a]',
  },
  {
    icon: '📱',
    title: 'WhatsApp Ready',
    description: 'Instant estimate & receipt PDFs via WhatsApp',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: '🏦',
    title: 'Gold Loan',
    description: 'Cashless doorstep collections & renewals',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: '📶',
    title: 'Offline First',
    description: 'Works offline with automatic cloud sync',
    color: 'from-purple-500 to-pink-500',
  },
]

const MobileApp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const sectionRef = useRef(null)

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

  useEffect(() => {
    if (isVisible) {
      features.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleFeatures((prev) => [...prev, idx])
        }, 500 + idx * 100)
      })
    }
  }, [isVisible])

  return (
    <section id="mobile-app" ref={sectionRef} className="bg-[#fff8ef] py-24">
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section - Textual Information */}
        <div className="mx-auto max-w-4xl text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100 scale-100'
                : '-translate-y-8 opacity-0 scale-95'
            }`}
          >
            <span className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-9 py-3.5 text-lg sm:text-xl font-bold uppercase tracking-[0.22em] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </span>
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              📱 Mobile App
            </span>
          </div>
          <h2
            className={`mt-4 font-heading text-4xl font-bold text-[#0f2d55] transition-all duration-700 delay-200 lg:text-5xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Stay in control from the showroom floor—or anywhere
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed text-slate-600 transition-all duration-700 delay-300 lg:text-lg ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Managers get live feeds, sales reports get instant catalogues, karigars
            get job cards, and loan agents get renewal nudges.
          </p>
        </div>

        {/* Bottom Section - Feature Card and Smartphone */}
        <div className="mx-auto mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Feature Card */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'translate-x-0 opacity-100 scale-100'
                : '-translate-x-8 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="mt-10 rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(15,45,85,0.15)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(15,45,85,0.2)] lg:p-10">
              {/* Feature Boxes Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`group relative overflow-hidden rounded-xl bg-[#fff8ef] p-5 shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-lg hover:-translate-y-1 ${
                      visibleFeatures.includes(idx)
                        ? 'translate-y-0 opacity-100 scale-100'
                        : 'translate-y-4 opacity-0 scale-95'
                    }`}
                    style={{ transitionDelay: `${500 + idx * 100}ms` }}
                  >
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} transition-all duration-500 group-hover:w-full`} />
                    
                    {/* Icon */}
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-2xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {feature.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 className="mb-1 text-base font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                      {feature.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                      {feature.description}
                    </p>
                    
                    {/* Corner decoration */}
                    <div className={`absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-gradient-to-br ${feature.color} opacity-10 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:opacity-20`} />
                  </div>
                ))}
                
                {/* Buttons - Inside Grid */}
                <div
                  className={`col-span-2 flex flex-col gap-3 pt-2 sm:flex-row ${
                    visibleFeatures.length >= 4
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  } transition-all duration-500`}
                  style={{ transitionDelay: '900ms' }}
                >
                  <button
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    📲 Download Android App
                  </button>
                  <button
                    className="flex-1 rounded-xl border-2 border-[#0f2d55] bg-white px-6 py-3.5 text-sm font-bold text-[#0f2d55] transition-all duration-300 hover:scale-105 hover:bg-[#0f2d55] hover:text-white hover:shadow-lg"
                  >
                    🍎 Join TestFlight
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Smartphone Visual */}
          <div
            className={`flex items-center justify-center transition-all duration-700 ${
              isVisible
                ? 'translate-x-0 opacity-100 scale-100'
                : 'translate-x-8 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div
              className="relative"
              style={{
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              {/* Phone Frame */}
              <div className="relative h-[500px] w-[250px] rounded-[3rem] border-8 border-[#0f2d55] bg-[#0f2d55] shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-[0_20px_60px_rgba(15,45,85,0.3)]">
                {/* Screen */}
                <div className="h-full w-full overflow-hidden rounded-[2.5rem]">
                  {/* Screen Content Area with Image */}
                  <img
                    src={appImg}
                    alt="Mobile App Screenshot"
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      isVisible
                        ? 'scale-100 opacity-100'
                        : 'scale-110 opacity-0'
                    }`}
                    style={{ transitionDelay: '800ms' }}
                  />
                </div>
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/50"></div>
              </div>
            </div>
          </div>
       
        </div>
         {/* Header Section */}
         <div className="mx-auto mt-16 flex flex-col items-center justify-center max-w-4xl text-center">
          <div
            className={`flex justify-center transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100 scale-100'
                : '-translate-y-8 opacity-0 scale-95'
            }`}
          >
            <span className="relative inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-6 sm:px-9 py-2.5 sm:py-3.5 text-base sm:text-lg lg:text-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.22em] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              {/* Shimmer effect */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
              <span className="relative flex items-center justify-center gap-3">
                {/* Left spark icon */}
                <svg
                  className="h-5 w-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.5 7L18 8.5L13.5 10L12 15L10.5 10L6 8.5L10.5 7L12 2Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
                <span>🔊 AI Voice Commands</span>
                {/* Right spark icon */}
                <svg
                  className="h-5 w-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.5 7L18 8.5L13.5 10L12 15L10.5 10L6 8.5L10.5 7L12 2Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </span>
            </span>
          </div>
          
          <h2
            className={`mt-4 sm:mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f2d55] transition-all duration-700 delay-200 text-center ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-8 opacity-0'
            }`}
          >
            Control your app with voice.
          </h2>
          
          <p
            className={`mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-slate-600 transition-all duration-700 delay-300 text-center ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-8 opacity-0'
            }`}
          >
            Fast. Hands-free. Intelligent.
          </p>
        </div>
      </div>
      
      {/* CSS for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}

export default MobileApp

