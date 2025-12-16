import { useState, useEffect, useRef } from 'react'
import cloudBackupImg from '../../../assets/image/cloud_img1.jpg'
import biometricImg from '../../../assets/image/cloud_img2.jpg'
import remoteLogoutImg from '../../../assets/image/Product_img3.jpg'

const Security = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const securityFeatures = [
    {
      title: 'Cloud Backup',
      description: 'Your data is always safe and encrypted on the cloud.',
      icon: '🔐',
      image: cloudBackupImg,
      color: 'from-[#0f2d55] to-[#1c918a]',
      accent: '#e5f5f0',
    },
    {
      title: 'App Lock / Biometric',
      description: 'Unlock the app using Face ID or fingerprint.',
      icon: '🧿',
      image: biometricImg,
      color: 'from-blue-500 to-indigo-500',
      accent: '#eff3ff',
    },
    {
      title: 'Remote Logout',
      description: 'Lost your mobile? Logout remotely and protect your data instantly.',
      icon: '🛑',
      image: remoteLogoutImg,
      color: 'from-purple-500 to-pink-500',
      accent: '#fdf0f7',
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
    <section id="security" ref={sectionRef} className="relative bg-white py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-teal-200 to-cyan-100 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-100 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating sparkles */}
        <div className={`absolute top-32 left-[20%] text-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ animationDuration: '3s' }}>🛡️</div>
        <div className={`absolute top-48 right-[25%] text-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ animationDuration: '2.5s' }}>🔒</div>
        <div className={`absolute bottom-32 left-[15%] text-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ animationDuration: '3.5s' }}>🔐</div>
        <div className={`absolute bottom-48 right-[20%] text-xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} style={{ animationDuration: '2.8s' }}>🛡️</div>
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
              <span>Security You Can Trust</span>
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
       
        <p
          className={`mt-8 text-base text-slate-600 transition-all duration-700 delay-300 lg:text-lg max-w-2xl mx-auto ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0'
          }`}
        >
          Your business data is protected with enterprise-grade security features designed to keep your information safe and secure.
        </p>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-6xl gap-6 px-6 sm:grid-cols-1 md:grid-cols-3 lg:gap-8">
        {securityFeatures.map((feature, idx) => (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,45,85,0.15)] ${
              visibleCards.includes(idx)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Icon Badge Overlay */}
              <div className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 backdrop-blur text-3xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-20 transition-opacity duration-500 group-hover:opacity-30`} />
            </div>

            {/* Content Section */}
            <div className="p-6 lg:p-8">
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-all duration-500 group-hover:opacity-[0.05]`} />
              
              {/* Top accent line with animation */}
              <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.color} transition-all duration-700 ease-out group-hover:w-full`} />
              
              {/* Animated side glow */}
              <div className={`absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r ${feature.color} rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-20 group-hover:-left-10`} />
              
              <div className="relative mb-4 flex flex-col items-center text-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0f2d55] transition-all duration-300 group-hover:text-[#1c918a]">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="relative text-center text-sm leading-relaxed text-slate-600 transition-all duration-300 group-hover:text-slate-700 lg:text-base">
                {feature.description}
              </p>
              
              {/* Animated corner decoration */}
              <div className={`absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-gradient-to-br ${feature.color} opacity-10 transition-all duration-700 group-hover:h-32 group-hover:w-32 group-hover:opacity-25`} />
              
              {/* Floating particles on hover */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} opacity-0 transition-all duration-500 group-hover:opacity-60 group-hover:animate-ping`} />
              <div className={`absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} opacity-0 transition-all duration-700 delay-100 group-hover:opacity-50 group-hover:animate-ping`} />
            </div>
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

export default Security
