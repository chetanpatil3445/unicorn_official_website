import { useEffect, useState, useRef } from 'react'
import screenOne from '../../../assets/image/slide_img1.jpg'
import screenTwo from '../../../assets/image/slide_img2.jpg'
import screenThree from '../../../assets/image/slide_img3.jpg'

const carouselKeyframes = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes slideIn {
    0% { transform: translateX(20px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }
  @keyframes fadeInUp {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
`

const slides = [
  {
    image: screenOne,
    highlight: 'Anytime,',
    title: 'Anywhere, And Any device...',
    subheading: 'Use from anywhere, any place',
    description:
      'Unicorn Jewellery Software keeps your jewellery storefront, workshop, and wholesale counter in sync. Switch between kiosk, tablet, or laptop and keep billing rolling without delays.',
  },
  {
    image: screenTwo,
    highlight: 'Your Stock,',
    title: 'Your Teams, All Connected.',
    subheading: 'Control from sales floor or remote office',
    description:
      'Push real-time approvals, RFID audits, and karigar job cards no matter where you operate. Configure alerts that surface when thresholds or hallmarking checks fail.',
  },
  {
    image: screenThree,
    highlight: 'Insights,',
    title: 'Every Minute, Every Branch.',
    subheading: 'Stay a step ahead of revenue dips',
    description:
      'Leadership dashboards show cash flow, gold rates, and open orders across regions. Approve transfers or allocate stock right from your phone in a few taps.',
  },
]

const HeroExperienceCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

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

  const currentSlide = slides[current]

  return (
    <>
      <style>{carouselKeyframes}</style>
      <section id="videos" ref={sectionRef} className="bg-gradient-to-b from-white via-[#fff8ef] to-white px-4 sm:px-6 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 sm:gap-12 lg:grid-cols-2 rounded-[32px] border border-teal-100 bg-white p-4 sm:p-6 lg:p-10">
        <div className="order-2 space-y-5 lg:order-1">
          {/* Top pill - allow wrapping on very small screens to avoid overflow */}
          <p className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-6 sm:px-8 md:px-9 py-3 text-xs sm:text-sm md:text-base lg:text-xl font-bold uppercase tracking-[0.22em] text-white hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden animate-bounce">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            <span className="relative h-3 w-3 rounded-full bg-white animate-ping" />
            <span className="relative">☁️ Cloud Ready</span>
          </p>
          <h3 className="font-heading text-4xl text-[#0f2d55] transition-all duration-500">
            <span className="text-[#1c918a]">{currentSlide.highlight}</span>
            <br />
            {currentSlide.title}
          </h3>
          <p className="text-lg font-semibold text-slate-500 transition-all duration-300">{currentSlide.subheading}</p>
          {/* Simple divider without glowing shadow */}
          <div className="h-1 w-28 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
          <p className="text-base leading-relaxed text-slate-600 transition-all duration-300">{currentSlide.description}</p>
        </div>

        <div className="order-1 lg:order-2">
          {/* Clean, shadow-free testimonial card that stays responsive */}
          <div className="relative w-full overflow-hidden rounded-[32px] bg-white">
            <div className="rounded-[28px] bg-white p-3 sm:p-4 lg:p-5">
              <div className="relative h-[240px] w-full overflow-hidden rounded-3xl bg-slate-100 sm:h-[300px] md:h-[340px] lg:h-[380px]">
                {slides.map((slide, idx) => (
                  <img
                    key={slide.title}
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                      idx === current 
                        ? 'translate-x-0 opacity-100 scale-100' 
                        : 'translate-x-full opacity-0 scale-105'
                    }`}
                  />
                ))}
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-4 sm:pb-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer hover:scale-150 ${
                          idx === current 
                            ? 'bg-[#1c918a] scale-125' 
                            : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                      />
                    ))}
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

export default HeroExperienceCarousel

