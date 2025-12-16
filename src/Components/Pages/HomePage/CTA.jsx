import { useState, useEffect, useRef } from 'react'

const CTA = () => {
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
    <section id="demo" ref={sectionRef} className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] p-12 shadow-[0_20px_60px_rgba(15,45,85,0.3)] transition-all duration-1000 lg:p-16 ${
            isVisible
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-12 opacity-0 scale-95'
          }`}
        >
          {/* Header Label */}
          <div
            className={`text-center transition-all duration-700 delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100 scale-100'
                : '-translate-y-8 opacity-0 scale-95'
            }`}
          >
            <span className="relative inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 text-base sm:text-lg font-bold uppercase tracking-[0.22em] text-white shadow-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/30">
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </span>
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              🚀 Ready to Go Live?
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className={`mt-6 text-center font-heading text-3xl font-bold text-white transition-all duration-700 delay-300 lg:text-5xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Launch your jewellery OS in under 7 days
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/90 transition-all duration-700 delay-400 lg:text-lg ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Our onboarding squad sets up masters, trains staff and maps your
            end-to-end workflows.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mx-auto mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Talk to Solutions Team Button */}
            <button className="w-full rounded-xl border-2 border-[#1c918a] bg-white px-8 py-4 text-base font-semibold text-[#0f2d55] transition-all duration-300 hover:scale-105 hover:bg-[#fff8ef] hover:shadow-lg sm:w-auto">
              Talk to Solutions Team
            </button>

            {/* Download Deck Button */}
            <button className="w-full rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-lg sm:w-auto">
              Download Desk
            </button>
          </div>

          {/* Footer Text */}
          <p
            className={`mt-10 text-center text-sm text-white/80 transition-all duration-700 delay-600 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            Avg. implementation rating: 4.9/5. Dedicated success coach for
            every store
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

export default CTA;

