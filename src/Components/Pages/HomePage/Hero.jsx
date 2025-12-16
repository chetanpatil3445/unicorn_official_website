import { useState, useEffect, useRef } from 'react'
import { heroMetrics } from '../../constants/content.js'
import heroImg from '../../../assets/image/Hero_img.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleMetrics, setVisibleMetrics] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Animate metrics one by one
            heroMetrics.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleMetrics((prev) => [...prev, idx])
              }, 800 + idx * 150)
            })
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
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff3e6] to-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#ffe0c4]/60 blur-[120px] animate-pulse" />
        <div className="absolute left-0 top-36 h-72 w-72 rounded-full bg-[#d8f5f1]/60 blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse gap-6 min-[375px]:gap-8 sm:gap-10 md:gap-12 px-3 min-[375px]:px-4 sm:px-6 pt-5 min-[375px]:pt-6 sm:pt-8 pb-10 min-[375px]:pb-12 sm:pb-16 lg:flex-row lg:items-start lg:gap-16 lg:pt-12 lg:pb-24">
        <div className="flex w-full flex-1 flex-col">
          <div
            className={`group relative inline-flex w-fit items-center gap-4 overflow-hidden rounded-full border border-teal-200/70 bg-gradient-to-r from-[#e6fbf7] via-white to-[#e3f2ff] px-5 py-2.5 backdrop-blur-sm shadow-[0_14px_35px_rgba(15,45,85,0.12)] transition-all duration-700 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-[0_18px_45px_rgba(15,45,85,0.2)] ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            <span className="absolute inset-px rounded-full bg-gradient-to-r from-white via-transparent to-white/80 opacity-60" />
            <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f2d55] via-[#157b76] to-[#1c918a] text-white shadow-md shadow-[#0f2d55]/35">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 text-cyan-100 drop-shadow-sm"
              >
                <path
                  d="M5.5 4.75h13L22 9.5l-10 9.75L2 9.5l3.5-4.75Z"
                  fill="currentColor"
                  opacity="0.9"
                />
                <path
                  d="M12 19.25 8.25 9.5l3.25-4.75 3.25 4.75L12 19.25Z"
                  fill="#7ff6ff"
                  opacity="0.95"
                />
              </svg>
            </span>
            <span className="relative flex items-center gap-2">
              <span className="bg-gradient-to-r from-[#0f2d55] to-[#1c918a] bg-clip-text text-[13px] font-extrabold uppercase tracking-[0.22em] text-transparent">
                Cloud Jewellery ERP Software
              </span>
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-[3px] text-[10px] font-semibold text-emerald-700 border border-emerald-100">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Live</span>
              </span>
            </span>
          </div>
          <h1
            className={`relative mt-6 w-fit transition-all duration-700 delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            {/* Main Title */}
            <span className="relative block text-xl min-[375px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1a4a7a] to-[#0f2d55] bg-clip-text text-transparent">
                Billing
              </span>
              <span className="ml-1.5 min-[375px]:ml-2 sm:ml-3 bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent drop-shadow-sm">
                Inventory
              </span>
            </span>

            {/* Subtitle with highlighted keywords */}
            <span className="relative mt-1.5 min-[375px]:mt-2 sm:mt-3 flex flex-wrap items-center gap-1 min-[375px]:gap-1.5 sm:gap-2 text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0f2d55]">
              <span>RFID</span>
              <span className="text-slate-400">&</span>
              <span>ERP</span>
              <span>Gold Loan—All in One</span>
            </span>
            
            {/* Tagline */}
            <span className="mt-1.5 min-[375px]:mt-2 sm:mt-3 md:mt-4 flex flex-wrap items-center gap-1 min-[375px]:gap-1.5 sm:gap-2 text-[10px] min-[375px]:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-slate-500">
              <span className="h-0.5 w-4 min-[375px]:w-6 sm:w-8 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]"></span>
              Powerful Features for Modern Jewellers
              <span className="h-0.5 w-4 min-[375px]:w-6 sm:w-8 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]"></span>
            </span>
            
            {/* Decorative glow */}
            <span
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-4 w-full rounded-full bg-gradient-to-r from-teal-200 via-cyan-100 to-teal-200 opacity-50 blur-xl"
            />
          </h1>
          <p
            className={`mt-2.5 min-[375px]:mt-3 sm:mt-4 md:mt-5 text-[11px] min-[375px]:text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Unicorn Jewellery Software is an all-in-one solution designed to simplify Jewellery business operations. Manage your entire store with advanced stock control, billing, RFID tracking, and mobile accessibility. Create accurate quotations, handle orders, streamline approvals, and generate quick estimations with ease.
          </p>

          <p
            className={`mt-2.5 min-[375px]:mt-3 sm:mt-4 md:mt-5 text-[11px] min-[375px]:text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            The software supports RFID-based stock audits, online catalogue selling, and gold loan management, helping jewelers boost efficiency and customer satisfaction. Integrated cash flow and bank reconciliation ensure smooth financial management, while hardware integrations like biometric devices, signature pads, and weighing scales enhance security and speed.
          </p>

          <div
            className={`mt-5 min-[375px]:mt-6 sm:mt-8 flex flex-col gap-2.5 min-[375px]:gap-3 transition-all duration-700 delay-400 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 min-[375px]:gap-3 sm:gap-4">
              <button className="inline-flex items-center justify-center gap-1.5 min-[375px]:gap-2 rounded-full bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] px-4 min-[375px]:px-5 sm:px-6 md:px-8 py-2 min-[375px]:py-2.5 sm:py-3 text-[10px] min-[375px]:text-xs sm:text-sm font-semibold text-white shadow-[0_18px_30px_rgba(7,29,57,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_26px_46px_rgba(7,29,57,0.6)] active:scale-95 touch-manipulation">
                <span className="flex h-4 w-4 min-[375px]:h-5 min-[375px]:w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/15">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-2.5 w-2.5 min-[375px]:h-3 min-[375px]:w-3 sm:h-3.5 sm:w-3.5"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>Book Free Setup</span>
              </button>
              <button className="inline-flex items-center justify-center gap-1.5 min-[375px]:gap-2 rounded-full border border-[#0f2d55]/30 bg-white px-4 min-[375px]:px-5 sm:px-6 md:px-8 py-2 min-[375px]:py-2.5 sm:py-3 text-[10px] min-[375px]:text-xs sm:text-sm font-semibold text-[#0f2d55] shadow-[0_10px_24px_rgba(7,29,57,0.12)] transition-all duration-300 hover:scale-105 hover:border-[#0f2d55]/60 hover:bg-[#0f2d55]/5 active:scale-95 touch-manipulation">
                <span className="flex h-4 w-4 min-[375px]:h-5 min-[375px]:w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-[#0f2d55]/5 text-[#0f2d55] text-[10px] min-[375px]:text-xs sm:text-sm">
                  ▶
                </span>
                <span>Watch Product Tour</span>
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 min-[375px]:gap-2 sm:gap-3 text-[10px] min-[375px]:text-xs sm:text-sm text-slate-500">
              <div className="inline-flex items-center gap-1 min-[375px]:gap-1.5 sm:gap-2 rounded-full bg-white/80 px-2 min-[375px]:px-2.5 sm:px-3 py-0.5 min-[375px]:py-1 shadow-sm ring-1 ring-slate-200">
                <span className="inline-flex h-1 w-1 min-[375px]:h-1.5 min-[375px]:w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="sm:whitespace-nowrap">Trusted by 100+ jewellers</span>
              </div>
              <span className="hidden sm:inline-block h-1 w-4 sm:w-6 rounded-full bg-slate-200" />
              <div className="inline-flex items-center gap-0.5 min-[375px]:gap-1">
                <span className="text-amber-400 text-sm min-[375px]:text-base sm:text-lg leading-none">★★★★★</span>
                <span className="text-[10px] min-[375px]:text-sm sm:text-base text-slate-500">4.9/5 average rating</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex w-full flex-1 items-start justify-center transition-all duration-700 delay-300 ${
            isVisible
              ? 'translate-x-0 opacity-100 scale-100'
              : 'translate-x-8 opacity-0 scale-95'
          }`}
        >
          <div className="relative w-full max-w-[280px] min-[375px]:max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] mx-auto lg:mx-0 overflow-hidden rounded-[16px] min-[375px]:rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[50px] border border-white/40 bg-white/95 shadow-[0_45px_110px_rgba(12,50,92,0.18)] backdrop-blur transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_55px_130px_rgba(12,50,92,0.25)]">
            <div className="pointer-events-none absolute -inset-3 min-[375px]:-inset-4 sm:-inset-6 rounded-[20px] min-[375px]:rounded-[24px] sm:rounded-[36px] md:rounded-[44px] lg:rounded-[56px] bg-gradient-to-tr from-[#1c918a]/15 via-transparent to-[#f4b893]/30" />
            <img
              src={heroImg}
              alt="Live control tower dashboard preview"
              className="relative w-full object-cover transition-transform duration-700 aspect-[4/5] hover:scale-105"
            />
            <div
              className={`absolute left-2 top-2 min-[375px]:left-3 min-[375px]:top-3 sm:left-6 sm:top-6 md:left-8 md:top-8 rounded-full border border-[#f6c58f] bg-white/90 px-2 py-1 min-[375px]:px-3 min-[375px]:py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 text-[9px] min-[375px]:text-[10px] sm:text-xs font-semibold text-[#0f2d55] shadow-soft transition-all duration-500 hover:scale-110 hover:bg-white ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              ★ Live alerts on mobile
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Box - Centered */}
      <div className="relative mx-auto max-w-7xl px-3 min-[375px]:px-4 sm:px-6 pb-10 min-[375px]:pb-12 sm:pb-16">
        <div
          className={`mx-auto max-w-5xl grid gap-2.5 min-[375px]:gap-3 sm:gap-4 md:gap-6 rounded-lg min-[375px]:rounded-xl sm:rounded-2xl md:rounded-[32px] bg-white p-2.5 min-[375px]:p-3 sm:p-4 md:p-6 lg:p-8 text-center shadow-soft transition-all duration-700 delay-500 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
            isVisible
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-8 opacity-0 scale-95'
          }`}
        >
          {heroMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`transition-all duration-500 ${
                visibleMetrics.includes(idx)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${800 + idx * 150}ms` }}
            >
              <p className="font-heading text-lg min-[375px]:text-xl sm:text-2xl md:text-3xl text-[#0f2d55] transition-colors duration-300 hover:text-[#1c918a]">
                {metric.value}
              </p>
              <p className="mt-0.5 min-[375px]:mt-1 text-[10px] min-[375px]:text-xs sm:text-sm text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero

