import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    location: 'Mumbai',
    company: 'K. Mehta & Sons',
    quote:
      'We run 8 stores and gold loan desks from a single dashboard. The accuracy and speed are unmatched.',
  },
  {
    location: 'Jaipur',
    company: 'Mannat Jewels',
    quote:
      'Festive campaigns, WhatsApp billing and RFID counts helped us grow 37% YoY without extra staff.',
  },
  {
    location: 'Coimbatore',
    company: 'Crown Bullion',
    quote:
      'We love the bullion hedging and instant GST returns. Audits that took weeks now close in days.',
  },
]

const badges = [
  { text: 'BEST RETAIL TECH 2025', icon: '🏆', color: 'from-[#0f2d55] to-[#1c918a]' },
  { text: 'INDIA SME 50 AWARDS', icon: '🥇', color: 'from-[#1c918a] to-[#0f2d55]' },
  { text: 'AWS ISV INNOVATOR', icon: '☁️', color: 'from-blue-500 to-indigo-500' },
  { text: 'DPIIT RECOGNISED START-UP', icon: '🚀', color: 'from-green-500 to-teal-500' },
]

const bulkReviews = [
  {
    name: 'Atul Tiwari',
    company: 'Diamond Palace',
    location: 'Delhi',
    review: 'Unicorn Jewellery Software is Very well-designed and user-friendly. It runs smoothly and feels relible, with a great set of features that simplify daily operations. Overall, it delivers an excellent software experience and makes jewellery management much easier.',
    rating: 5,
  },
  {
    name: 'Harshil Desai',
    company: 'Gold Star Jewellers',
    location: 'Ahmedabad',
    review: 'Unicorn Jewellery Software is really Well-designed and easy to use. It feels relible and smooth, with useful features that make things much simpler overall. Definitely a great software experience!',
    rating: 4.5,
  },
  {
    name: 'Devyani Gharate',
    company: 'Silver Dreams',
    location: 'Surat',
    review: 'Very smooth experience with Unicorn Jewellery Billing Software.The dashboard is easy to use, and the features are tailored for indian jewellers. Great for growing businesses.',
    rating: 5,
  },
  {
    name: 'Sachin Mittal',
    company: 'Platinum Plus',
    location: 'Mumbai',
    review: 'Unicorn Jewellery Software makes jewellery management so simple and efflcient. The interface is clean, easy to use, and packed with useful features. Highly recommend for anyone looking for reliable software in this field.',
    rating: 5,
  },
  {
    name: 'Durgesh Sonar',
    company: 'Royal Gold',
    location: 'Jaipur',
    review: 'Unicorn Jewellery Software is really good and easy to use, well-designed and Highly recommend for everyone for looking for reliable software in this filed.',
    rating: 5,
  },
  {
    name: 'Vaishnavi Pawar',
    company: 'Crystal Jewels',
    location: 'Pune',
    review: 'Unicorn Jewellery Software is really good and easy to use. Very smooth to handle.',
    rating: 5,
  },
  {
    name: 'Yogita Salave',
    company: 'Heritage Gold',
    location: 'Kolkata',
    review: 'This is a very useful application. Thanks to Unicorn and the entire team for creating such a simple, smooth, and easy-to-use app.',
    rating: 5,
  },
  {
    name: 'Nirali Kankrecha',
    company: 'Modern Jewellery',
    location: 'Hyderabad',
    review: 'My Overall experience with Unicorn Software was decent. Their development quality was solid and the app is also helpfull for everyone.',
    rating: 5,
  },
  {
    name: '64 Sakshi Bhavsar',
    company: 'Golden Touch',
    location: 'Lucknow',
    review: 'Very helpful app for jewellers. Clean interface, fast billing, and professional reports. Best experience....',
    rating: 5,
  },
]
const SocialProof = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCards, setVisibleCards] = useState([])
  const [visibleBadges, setVisibleBadges] = useState([])
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
      testimonials.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, idx])
        }, 400 + idx * 150)
      })

      badges.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleBadges((prev) => [...prev, idx])
        }, 1000 + idx * 100)
      })
    }
  }, [isVisible])

  return (
    <section id="social-proof" ref={sectionRef} className="bg-[#fff8ef] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? 'translate-y-0 opacity-100 scale-100'
                : '-translate-y-8 opacity-0 scale-95'
            }`}
          >
            <span className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-7 py-3.5 text-base sm:text-lg font-bold uppercase tracking-[0.22em] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </span>
              <span className="relative flex items-center gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4 5.5V11.5C4 16 7.33 20.24 12 21.5C16.67 20.24 20 16 20 11.5V5.5L12 2Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                  <path
                    d="M10.2 12.3L9 11.1L7.5 12.6L10.2 15.3L15 10.5L13.5 9L10.2 12.3Z"
                    fill="white"
                  />
                </svg>
                <span>Social Proof</span>
              </span>
            </span>
          </div>
          <h2
            className={`mt-4 font-heading text-4xl font-bold text-[#0f2d55] transition-all duration-700 delay-200 lg:text-5xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Trusted by ambitious jewellers everywhere
          </h2>
          <p
            className={`mt-4 text-base leading-relaxed text-slate-600 transition-all duration-700 delay-300 lg:text-lg ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            From single flagship stores to multi-city chains, teams switch to
            Unicorn to simplify growth.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mx-auto mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(15,45,85,0.15)] transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_16px_50px_rgba(15,45,85,0.25)] lg:p-10 ${
                visibleCards.includes(idx)
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-12 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${400 + idx * 150}ms` }}
            >
              {/* Decorative Quote Icon */}
              <div className="absolute right-4 top-4 text-6xl font-bold text-[#1c918a]/10 transition-all duration-500 group-hover:text-[#1c918a]/20 group-hover:scale-110">
                "
              </div>

              {/* Location with Icon */}
              <div className="relative flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-[#1c918a] transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 transition-colors duration-300 group-hover:text-[#1c918a]">
                  {testimonial.location}
                </p>
              </div>

              {/* Company Name */}
              <h3 className="mt-4 text-2xl font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a] lg:text-3xl">
                {testimonial.company}
              </h3>

              {/* Divider */}
              <div className="my-5 h-px w-16 bg-gradient-to-r from-[#1c918a] to-transparent transition-all duration-300 group-hover:w-24"></div>

              {/* Quote */}
              <p className="relative text-base leading-relaxed text-[#0f2d55] transition-colors duration-300 group-hover:text-slate-700">
                {testimonial.quote}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-500 group-hover:border-[#1c918a]/20"></div>
            </div>
          ))}
        </div>

        {/* Recognition Badges */}
        <div className="mx-auto mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border-2 border-[#0f2d55] bg-white px-5 py-6 text-center shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-700 hover:scale-110 hover:border-[#1c918a] hover:bg-gradient-to-br hover:from-white hover:to-[#fff8ef] hover:shadow-[0_12px_40px_rgba(28,145,138,0.2)] ${
                visibleBadges.includes(idx)
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-12 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${1000 + idx * 100}ms` }}
            >
              {/* Animated Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}></div>

              {/* Award Icon */}
              <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${badge.color} text-3xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                {badge.icon}
              </div>

              {/* Badge Text */}
              <p className="relative text-xs font-bold uppercase tracking-wider text-[#0f2d55] transition-all duration-300 group-hover:text-[#1c918a] md:text-sm">
                {badge.text}
              </p>

              {/* Decorative Corner Elements */}
              <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#1c918a]/0 transition-all duration-500 group-hover:border-[#1c918a]/30"></div>
              <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#1c918a]/0 transition-all duration-500 group-hover:border-[#1c918a]/30"></div>
            </div>
          ))}
        </div>

        {/* Bulk Reviews Carousel Section - Auto Scroll - 3 Cards Visible (no shadows / edge blur) */}
        <div className="mx-auto mt-24 max-w-7xl overflow-hidden">
          <div className="relative">
            {/* Scrolling Container - Shows 3 cards at a time */}
            <div className="flex animate-scroll hover:pause gap-6" style={{ width: 'max-content' }}>
              {/* First set of cards */}
              {bulkReviews.map((review, idx) => (
                <div
                  key={`first-${idx}`}
                  className="group relative w-[calc((min(1280px,100vw-48px)-48px)/3)] min-w-[300px] flex-shrink-0 overflow-hidden rounded-2xl bg-white p-6 transition-transform duration-500 hover:scale-[1.02]"
                >
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
                  
                  {/* Rating Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(Math.floor(review.rating) || 0)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 drop-shadow-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mb-6 text-base leading-relaxed text-[#0f2d55] min-h-[120px]">
                    "{review.review}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0f2d55] to-[#1c918a] text-lg font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#0f2d55]">
                        {review.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {review.company} • {review.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* Corner Decoration without opacity blur */}
                  <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-slate-100 transition-all duration-500 group-hover:h-20 group-hover:w-20" />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {bulkReviews.map((review, idx) => (
                <div
                  key={`second-${idx}`}
                  className="group relative w-[calc((min(1280px,100vw-48px)-48px)/3)] min-w-[300px] flex-shrink-0 overflow-hidden rounded-2xl bg-white p-6 transition-transform duration-500 hover:scale-[1.02]"
                >
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
                  
                  {/* Rating Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(Math.floor(review.rating) || 0)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400 drop-shadow-sm"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mb-6 text-base leading-relaxed text-[#0f2d55] min-h-[120px]">
                    "{review.review}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0f2d55] to-[#1c918a] text-lg font-bold text-white">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-base font-bold text-[#0f2d55]">
                        {review.name}
                      </p>
                      <p className="text-sm text-slate-500">
                        {review.company} • {review.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* Corner Decoration without opacity blur */}
                  <div className="absolute -bottom-2 -right-2 h-16 w-16 rounded-full bg-slate-100 transition-all duration-500 group-hover:h-20 group-hover:w-20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default SocialProof
