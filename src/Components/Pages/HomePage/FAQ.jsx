import { useState, useEffect, useRef } from 'react'


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
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

  const faqItems = [
    {
      question: 'Can I migrate from my existing desktop software?',
      answer: 'Yes, we provide comprehensive migration support to help you transition smoothly from your existing desktop software to our platform. Our team will assist you with data migration, setup, and training.',
    },
    {
      question: 'Does it work without internet?',
      answer: 'Our platform is cloud-based and requires an internet connection for full functionality. However, we offer offline capabilities for certain features to ensure you can continue working even with limited connectivity.',
    },
    {
      question: 'How secure is my business data?',
      answer: 'We take data security seriously. Our platform uses enterprise-grade encryption, regular security audits, and complies with industry standards to ensure your business data is protected at all times.',
    },
    {
      question: 'Can I connect my ecommerce site?',
      answer: 'Absolutely! Our platform offers seamless integration with major ecommerce platforms, allowing you to sync orders, inventory, and customer data automatically between your online store and our system.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl">
          {/* FAQ Label */}
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${
              isVisible
                ? 'translate-y-0 opacity-100 scale-100'
                : '-translate-y-8 opacity-0 scale-95'
            }`}
          >
            <span className="relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-8 py-3.5 text-lg sm:text-xl font-bold uppercase tracking-[0.22em] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </span>
              <span className="h-3 w-3 rounded-full bg-white animate-ping" />
              <span className="relative flex items-center gap-2">
                <svg
                  className="h-5 w-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9" />
                  <path
                    d="M11.25 16.5H12.75V15H11.25V16.5ZM12 7C10.62 7 9.5 8.12 9.5 9.5H11C11 8.95 11.45 8.5 12 8.5C12.55 8.5 13 8.95 13 9.5C13 10 12.67 10.29 12.25 10.62C11.75 11 11 11.5 11 12.5V13H12.5V12.75C12.5 12.25 12.83 11.96 13.25 11.63C13.75 11.25 14.5 10.75 14.5 9.5C14.5 8.12 13.38 7 12 7Z"
                    fill="white"
                  />
                </svg>
                <span>FAQ</span>
              </span>
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className={`mt-4 text-center font-heading text-3xl font-bold text-[#0f2d55] transition-all duration-700 delay-300 lg:text-4xl ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Get your queries answered here
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-700 transition-all duration-700 delay-400 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : '-translate-y-4 opacity-0'
            }`}
          >
            Still exploring? Our success coaches go live with you and your
            accountant to ensure every process is mapped.
          </p>

          {/* FAQ Items */}
          <div
            className={`mt-12 space-y-4 transition-all duration-700 delay-500 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            }`}
          >
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-[#f5f0e8] transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-all duration-300 hover:bg-[#ede8df]"
                >
                  <span className="flex-1 pr-4 text-base font-semibold text-[#0f2d55] lg:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 text-2xl font-light text-[#1c918a] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-base leading-relaxed text-gray-700">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
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
      `}</style>
    </section>
  )
}

export default FAQ

