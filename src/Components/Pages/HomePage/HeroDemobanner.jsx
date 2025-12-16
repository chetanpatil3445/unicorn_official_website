import { useEffect, useRef, useState } from 'react'
import demoImage from '../../../assets/image/Demo_img.jpg'

const floatKeyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(247, 160, 71, 0.4); }
    50% { box-shadow: 0 0 40px rgba(241, 99, 56, 0.6); }
  }
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-8px) scale(1.05); }
  }
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`

const HeroDemoBanner = () => {
  const [isVisible, setIsVisible] = useState(false)
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
      { threshold: 0.2 }
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
    <>
      <style>{floatKeyframes}</style>
      <section
        ref={sectionRef}
        className="relative mt-12 bg-gradient-to-b from-[#fff8ef] via-[#fff3e2] to-[#fff8ef] px-6 pb-12 pt-6 lg:mt-16 lg:pt-10"
      >
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-32 max-w-5xl rounded-full bg-[#ffdeba]/60 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl">
        <div
          className={`mb-8 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          {/* Allow pill text to wrap on small screens for better responsiveness */}
          <p className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55] px-8 sm:px-10 py-3 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] text-white shadow-lg shadow-[#1c918a]/40 animate-[bounce-slow_2s_ease-in-out_infinite,glow_2s_ease-in-out_infinite] hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2s_linear_infinite]" />
            <span className="relative h-3 w-3 rounded-full bg-white animate-ping" />
            <span className="relative flex items-center gap-3">
              <svg
                className="h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.8 6.2L18 8L13.8 9.8L12 14L10.2 9.8L6 8L10.2 6.2L12 2Z"
                  fill="currentColor"
                  opacity="0.9"
                />
              </svg>
              <span>Demo Invite</span>
              <svg
                className="h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L13.8 6.2L18 8L13.8 9.8L12 14L10.2 9.8L6 8L10.2 6.2L12 2Z"
                  fill="currentColor"
                  opacity="0.9"
                />
              </svg>
            </span>
          </p>
          <h2 className="mt-3 font-heading text-2xl sm:text-3xl md:text-4xl text-[#0f2d55]">
            Experience Unicorn in 10 Minutes
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Quick showcase of Unicorn jewellery operations, custom workflows, and adoption roadmap.
          </p>
        </div>
        <div className="rounded-[32px] border border-teal-200/70 bg-white shadow-[0_25px_80px_rgba(15,45,85,0.08)]">
          <div className="flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:p-14">
            <div
              className={`flex flex-1 flex-col gap-6 transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-[0.4em] text-[#1c918a] animate-pulse">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#1c918a] animate-ping" />
                  Limited Slots
                </p>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0f2d55]">
                  Jewellery Software Free Demo
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Walk through billing, RFID tracking, and Unicorn Jewellery Software inventory controls with a live expert. Discover
                  how Unicorn adapts to retail stores, wholesale divisions, and service centers without custom code.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Live analytics and business health score',
                  'Handles gold rate, hallmarking, approvals',
                  'WhatsApp-friendly estimates & e-invoicing',
                  'Hardware integrations for weighing & biometrics',
                ].map((point, index) => (
                  <div
                    key={point}
                    className={`flex items-start gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-md hover:border-teal-200 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms' }}
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#0f2d55] animate-pulse" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                {/* Primary CTA – use anchor for navigation instead of button to avoid onClick warning */}
                <a
                  href="#demo-form"
                  className="group relative inline-flex items-center justify-center rounded-full bg-[#0f2d55] px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_15px_40px_rgba(247,160,71,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#1c918a] hover:shadow-[0_20px_50px_rgba(241,99,56,0.5)]"
                >
                  <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                  <span className="relative">Click Here</span>
                </a>
                <a
                  href="tel:+919420844725"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0f2d55] underline-offset-4 hover:underline"
                >
                  or call +91 94208 44725
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M22 12H5m0 0l7-7M5 12l7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className={`flex flex-1 items-center justify-center transition-all duration-700 ${
                isVisible ? 'translate-x-0 opacity-100 delay-150' : 'translate-x-8 opacity-0'
              }`}
            >
              {/* Image card without external blue shadow */}
              <div className="relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] overflow-hidden rounded-[28px] bg-white animate-[float_3s_ease-in-out_infinite]">
                {/* Image fills full card area */}
                <img
                  src={demoImage}
                  alt="Jewellery software demo preview"
                  className="h-full w-full object-cover"
                />

                {/* DEMO pill badge - centered horizontally at the top of the image */}
                <div className="absolute inset-x-0 top-0 flex items-start justify-center pt-3 sm:pt-4">
                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55] px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg">
                    <span className="inline-flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-black/20 flex-shrink-0">
                      🎬
                    </span>
                    <span>Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default HeroDemoBanner

