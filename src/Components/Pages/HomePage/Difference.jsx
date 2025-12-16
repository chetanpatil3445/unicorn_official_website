import { useEffect, useRef, useState } from 'react'
import softwareImg from '../../../assets/image/Software_img.jpg'
import unlockImg from '../../../assets/image/Unlock_img.jpg'

const Difference = () => {
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
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#fff8ef] via-white to-[#f3faf5]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div
          className={`mx-auto max-w-4xl text-center transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p
            className={`mx-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#0b2440] via-[#0f766e] to-[#14b8a6] px-8 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_16px_40px_rgba(15,23,42,0.45)] transition-transform duration-500 ${
              isVisible ? 'scale-100' : 'scale-95'
            }`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-100" />
            </span>
            <span className="text-base sm:text-lg leading-none text-teal-50 tracking-[0.5em]">
              Master Restore System
            </span>
            <span className="text-base leading-none text-teal-100/80">+</span>
          </p>
          <h2 className="mt-12 text-2xl sm:text-3xl lg:text-[2.35rem] font-extrabold leading-tight tracking-tight text-[#0b2440]">
            Because your data is as precious as your gold
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed text-slate-600">
            In the jewellery business, even a tiny mistake can feel like a heartbreak. One accidental
            delete shouldn&apos;t shake your peace, accuracy, or flow. That&apos;s why Unicorn gives you a{' '}
            <span className="font-semibold text-emerald-700">7-day Master Restore window</span> where
            deleted data can be revived in seconds—no chaos, no developer calls.
          </p>
        </div>

        {/* Difference Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Without Master Restore */}
          <div
            className={`relative overflow-hidden rounded-2xl border border-rose-100 bg-white p-5 sm:p-6 shadow-[0_18px_45px_rgba(148,27,12,0.08)] transform transition-all duration-700 delay-150 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-300 via-amber-200 to-rose-300" />

            <div className="mb-4 h-36 w-full overflow-hidden rounded-[1.75rem] rounded-br-sm bg-rose-50/80 sm:h-40">
              <img
                src={softwareImg}
                alt="Data loss and missing jewellery records"
                className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">
              Traditional Software
            </p>
            <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#831b13]">
              When a mistake becomes a loss
            </h3>
            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>Accidental stock or customer delete = permanent loss or long manual work.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>Team depends on IT or developers to recover data—if it&apos;s even possible.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>Stress, blame game, and broken trust when entries go missing.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                <span>No clear safety net between human error and data loss.</span>
              </li>
            </ul>
          </div>

          {/* With Master Restore */}
          <div
            className={`relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6 shadow-[0_20px_55px_rgba(3,84,63,0.16)] transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-300" />

            <div className="mb-4 h-36 w-full overflow-hidden rounded-[1.75rem] rounded-bl-sm bg-emerald-50 sm:h-40">
              <img
                src={unlockImg}
                alt="Secure jewellery data with restore protection"
                className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <p className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-200">
              With Unicorn Master Restore
            </p>
            <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#064e3b]">
              When a mistake is just a tap away from being fixed
            </h3>
            <ul className="mt-3 space-y-2 text-sm sm:text-base text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>
                  <span className="font-semibold">7-day golden window</span> where any deleted item can be revived—
                  stock, customers, images, or user details.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>One-tap restore for admins—no waiting, no dependency on developers or backups.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Staff mistakes are reversible, so training becomes safer and day-to-day work stress free.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>
                  Your records stay perfect and your confidence unshaken—even when humans make errors.
                </span>
              </li>
            </ul>

            <div className="mt-4 rounded-xl bg-white/70 p-3.5 text-sm sm:text-base text-[#0f2d55] ring-1 ring-emerald-100">
              <p className="font-semibold">
                Master Restore System – your data&apos;s luxury vault.
              </p>
              <p className="mt-1">
                Built with the same precision and trust that jewellers put into every masterpiece—so your
                legacy is protected with class, care, and uncompromising security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Difference


