import { useState, useEffect, useRef } from 'react'

const ModuleShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visiblePoints, setVisiblePoints] = useState([])
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

  const leftCardPoints = [
    'Live karat conversion and bullion hedging assistant',
    'Smart alerts for stock mismatch and pilferage',
    'Unified ledger for retail, wholesale and branches',
  ]

  const rightCardFeatures = [
    'Instant valuation sheet for purity & melt value',
    'Digital pledge cards with barcode tagging',
    'Auto interest calculator & reminder workflows',
    'Branch vault reconciliation and CCTV logs',
  ]

  // Move these outside useEffect to avoid dependency issues
  useEffect(() => {
    if (isVisible) {
      leftCardPoints.forEach((_, idx) => {
        setTimeout(() => {
          setVisiblePoints((prev) => [...prev, idx])
        }, 500 + idx * 150)
      })
      rightCardFeatures.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleFeatures((prev) => [...prev, idx])
        }, 700 + idx * 100)
      })
    }
  }, [isVisible])

  return (
    <section id="module-showcase" ref={sectionRef} className="bg-[#faf9f7] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Card - Dark Blue Theme */}
          <div
            className={`rounded-3xl bg-[#0f2d55] p-8 shadow-[0_8px_30px_rgba(15,45,85,0.15)] transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(15,45,85,0.2)] lg:p-10 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-8 opacity-0'
            }`}
          >
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100 scale-100'
                  : '-translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </span>
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                🇮🇳 India's Best Jewellery OS
              </span>
            </div>
            <h2
              className={`mt-4 text-2xl font-bold leading-tight text-white transition-all duration-500 lg:text-3xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              A single screen to manage gold, diamond, polki, silver and loans.
            </h2>
            <ul className="mt-6 space-y-3">
              {leftCardPoints.map((point, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-3 text-base text-white transition-all duration-500 ${
                    visiblePoints.includes(idx)
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${500 + idx * 150}ms` }}
                >
                  <span className="mt-1 text-[#1c918a] transition-transform duration-300 hover:scale-125">
                    •
                  </span>
                  <span className="transition-colors duration-300 hover:text-[#1c918a]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0f2d55] transition-all duration-500 hover:scale-105 hover:shadow-lg hover:bg-[#1c918a] hover:text-white ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '950ms' }}
            >
              Explore Module Map
            </button>
          </div>

          {/* Right Card - Light Cream Theme */}
          <div
            className={`rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(15,45,85,0.15)] transition-all duration-700 delay-200 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(15,45,85,0.2)] lg:p-10 ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-8 opacity-0'
            }`}
          >
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? 'translate-y-0 opacity-100 scale-100'
                  : '-translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </span>
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                🏦 Gold Loan Software
              </span>
            </div>
            <h2
              className={`mt-4 text-2xl font-bold leading-tight text-[#0f2d55] transition-all duration-500 lg:text-3xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              Gold loan cockpit for lending desks
            </h2>
            <p
              className={`mt-4 text-base leading-relaxed text-slate-600 transition-all duration-500 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              RBI-compliant KYC, valuation, risk scoring and mobile collections with selfie proof.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {rightCardFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl bg-white p-4 shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-md hover:border-2 hover:border-[#1c918a] ${
                    visibleFeatures.includes(idx)
                      ? 'translate-y-0 opacity-100 scale-100'
                      : 'translate-y-4 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${700 + idx * 100}ms` }}
                >
                  <p className="text-sm leading-relaxed text-slate-700 transition-colors duration-300 hover:text-[#0f2d55]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
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

export default ModuleShowcase

