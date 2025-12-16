import { useState, useEffect, useRef } from 'react'

const ElevateBusiness = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const sections = [
    {
      title: 'For Owners',
      description: 'Track every rupee. Every gram. Every order.',
      subDescription: 'Know what\'s happening in your business — even when you\'re not there.',
      icon: '👔',
      color: 'from-[#0f2d55] to-[#1c918a]',
    },
    {
      title: 'For Staff',
      description: 'Easy-to-use screens, faster billing, fewer mistakes, better productivity.',
      subDescription: '',
      icon: '👥',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'For Customers',
      description: 'Buy, browse, inquire, chat, track schemes & loans — everything with convenience.',
      subDescription: '',
      icon: '🛍️',
      color: 'from-purple-500 to-pink-500',
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
    <section ref={sectionRef} className="relative bg-gradient-to-b from-white via-[#fff8ef] to-white py-24 overflow-hidden">
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
        <h2
          className={`mt-6 font-heading text-4xl font-bold text-[#0f2d55] transition-all duration-700 delay-200 lg:text-5xl ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0'
          }`}
        >
          📦 Elevate Every Part of Your Jewellery Business
        </h2>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {sections.map((section, idx) => (
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
            <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 transition-all duration-500 group-hover:opacity-[0.08]`} />
            
            {/* Top accent line with animation */}
            <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${section.color} transition-all duration-700 ease-out group-hover:w-full`} />
            
            {/* Animated side glow */}
            <div className={`absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r ${section.color} rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-20 group-hover:-left-10`} />
            
            <div className="relative mb-4 flex flex-col items-center text-center">
              {/* Animated icon container with floating effect */}
              <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${section.color} text-3xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl mb-4`}>
                {/* Icon glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${section.color} blur-lg opacity-50 transition-all duration-500 group-hover:opacity-80 group-hover:blur-xl`} />
                <span className="relative transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse">
                  {section.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0f2d55] transition-all duration-300 group-hover:text-[#1c918a] mb-3">
                {section.title}
              </h3>
            </div>
            <div className="relative text-center">
              <p className="text-sm leading-relaxed text-slate-600 transition-all duration-300 group-hover:text-slate-700 lg:text-base font-medium mb-2">
                {section.description}
              </p>
              {section.subDescription && (
                <p className="text-sm leading-relaxed text-slate-500 transition-all duration-300 group-hover:text-slate-600 lg:text-base">
                  {section.subDescription}
                </p>
              )}
            </div>
            
            {/* Animated corner decoration */}
            <div className={`absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br ${section.color} opacity-10 transition-all duration-700 group-hover:h-32 group-hover:w-32 group-hover:opacity-25`} />
            
            {/* Floating particles on hover */}
            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${section.color} opacity-0 transition-all duration-500 group-hover:opacity-60 group-hover:animate-ping`} />
            <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${section.color} opacity-0 transition-all duration-700 delay-100 group-hover:opacity-50 group-hover:animate-ping`} />
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

export default ElevateBusiness
