import { useState, useEffect, useRef } from 'react'

const ComparisonTable = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const comparisonData = [
    {
      feature: 'Jewellery-Specific Design',
      unicornApps: true,
      otherMarketApps: false,
    },
    {
      feature: 'Offline Mode',
      unicornApps: true,
      otherMarketApps: false,
    },
    {
      feature: 'Multi-App Ecosystem',
      unicornApps: true,
      otherMarketApps: false,
    },
    {
      feature: 'Real-Time Owner Reports',
      unicornApps: true,
      otherMarketApps: 'Limited',
    },
    {
      feature: 'Automatic Scheme/Loan Handling',
      unicornApps: true,
      otherMarketApps: false,
    },
    {
      feature: '12+ Language Support',
      unicornApps: true,
      otherMarketApps: false,
    },
    {
      feature: 'Cloud + Local Hybrid',
      unicornApps: true,
      otherMarketApps: false,
    },
  ]

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

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#fff8ef] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
            <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
            <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
              Comparison
            </span>
            <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
          </p>
          <h2
            className={`mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
            }`}
          >
            Unicorn Apps vs Other Market Apps
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-slate-600 transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
            }`}
          >
            See why Unicorn Apps stands out from the competition with industry-specific features designed for jewellery businesses.
          </p>
        </div>

        <div
          className={`mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,45,85,0.15)] border border-teal-100 transition-all duration-700 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] px-6 py-6">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-left">
                <h3 className="text-lg font-bold text-white">Feature</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">Unicorn Apps</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">Other Market Apps</h3>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-teal-100">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 gap-4 px-6 py-5 transition-all duration-500 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-cyan-50/50 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-[#faf9f7]'
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 0.1}s both` : 'none',
                }}
              >
                {/* Feature Name */}
                <div className="flex items-center">
                  <span className="text-base font-semibold text-[#0f2d55]">{row.feature}</span>
                </div>

                {/* Unicorn Apps */}
                <div className="flex items-center justify-center">
                  {row.unicornApps ? (
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-[#1c918a] to-[#0f2d55] shadow-md">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </div>

                {/* Other Market Apps */}
                <div className="flex items-center justify-center">
                  {row.otherMarketApps === false ? (
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200">
                      <svg
                        className="h-5 w-5 text-slate-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  ) : row.otherMarketApps === 'Limited' ? (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">
                      Limited
                    </span>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-lg text-slate-600">
            <span className="font-semibold text-[#1c918a]">Unicorn Apps</span> is specifically designed for the jewellery industry with features that generic software cannot match.
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default ComparisonTable
