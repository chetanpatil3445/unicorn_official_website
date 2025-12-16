import { useState, useEffect, useRef } from 'react'

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const features = [
    {
      title: '24×7 Support',
      description: 'Our jewellery software provides reliable 24×7 support to ensure smooth, secure business operations daily.',
      icon: '📦',
      color: 'from-[#0f2d55] to-[#1c918a]',
    },
    {
      title: '100% Customizable',
      description: 'Our jewellery software is 100% customizable, allowing businesses to tailor every feature to their needs.',
      icon: '📋',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Secure & Scalable',
      description: 'Our jewellery software is secure and scalable, ensuring safe growth for every business.',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Used by 100+ Jewellers',
      description: 'Our jewellery software is trusted and used by over 100 jewellers across the industry.',
      icon: '💎',
      color: 'from-green-500 to-teal-500',
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

  useEffect(() => {
    const cardObservers = cardRefs.current.map((ref, idx) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => [...prev, idx])
            }
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      cardObservers.forEach((observer) => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  return (
    <section id="why-us" ref={sectionRef} className="relative bg-[#faf9f7] py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-teal-200 to-cyan-100 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-100 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating sparkles */}
        <div className={`absolute top-32 left-[20%] text-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ animationDuration: '3s' }}>✨</div>
        <div className={`absolute top-48 right-[25%] text-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ animationDuration: '2.5s' }}>💎</div>
        <div className={`absolute bottom-32 left-[15%] text-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ animationDuration: '3.5s' }}>⭐</div>
        <div className={`absolute bottom-48 right-[20%] text-xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ animationDuration: '2.8s' }}>🌟</div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? 'translate-y-0 opacity-100 scale-100'
              : '-translate-y-8 opacity-0 scale-95'
          }`}
        >
          <span className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-9 py-3.5 text-lg sm:text-xl font-bold uppercase tracking-[0.22em] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            {/* Shimmer effect */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
            <span className="relative flex items-center gap-3">
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
              <span>Why Choose Us ?</span>
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
          className={`mt-6 font-heading text-4xl font-bold text-[#0f2d55] transition-all duration-700 delay-200 lg:text-5xl ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0'
          }`}
        >
          Modern tooling for nimble jewellery houses
        </h2>
        <p
          className={`mt-4 text-base text-slate-600 transition-all duration-700 delay-300 lg:text-lg max-w-2xl mx-auto ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0'
          }`}
        >
          Designed with store owners, karigars and accountants across India to match the way your teams actually work.
        </p>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 p-6 shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,45,85,0.15)] lg:p-8 ${
              visibleCards.includes(idx)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Animated gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-all duration-500 group-hover:opacity-[0.08]`} />
            
            {/* Top accent line with animation */}
            <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} transition-all duration-700 ease-out group-hover:w-full`} />
            
            {/* Animated side glow */}
            <div className={`absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r ${feature.color} rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-20 group-hover:-left-10`} />
            
            <div className="relative mb-4 flex items-start gap-4">
              {/* Animated icon container with floating effect */}
              <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-3xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl`}>
                {/* Icon glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-lg opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:blur-xl`} />
                <span className="relative transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse">
                  {feature.icon}
                </span>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-bold text-[#0f2d55] transition-all duration-300 group-hover:text-[#1c918a] group-hover:translate-x-1">
                  {feature.title}
                </h3>
              </div>
            </div>
            <p className="relative ml-20 text-sm leading-relaxed text-slate-600 transition-all duration-300 group-hover:text-slate-700 lg:text-base">
              {feature.description}
            </p>
            
            {/* Animated corner decoration */}
            <div className={`absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br ${feature.color} opacity-10 transition-all duration-700 group-hover:h-32 group-hover:w-32 group-hover:opacity-25`} />
            
            {/* Floating particles on hover */}
            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} opacity-0 transition-all duration-500 group-hover:opacity-60 group-hover:animate-ping`} />
            <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} opacity-0 transition-all duration-700 delay-100 group-hover:opacity-50 group-hover:animate-ping`} />
          </div>
        ))}
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

export default WhyUs

