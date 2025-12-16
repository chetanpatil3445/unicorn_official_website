import { useState, useEffect, useRef } from 'react'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'
import ScheduleDemoModal from '../Common/ScheduleDemoModal'

const features = [
  {
    title: 'AI-powered purity assessment',
    description: 'AI-powered gold purity assessment with live market rates. Generate accurate loan values in seconds.',
    icon: '⚖️',
    accent: '#fff9e8',
  },
  {
    title: 'Digital KYC',
    description: 'Paperless customer onboarding with Aadhaar verification, photo capture, and e-signature collection.',
    icon: '📋',
    accent: '#e5f5f0',
  },
  {
    title: 'Girvi Pledge Cards',
    description: 'Barcode-tagged pledge cards with item photos, weight details, and loan terms for easy tracking.',
    icon: '🏷️',
    accent: '#fce8d5',
  },
  {
    title: 'Interest Calculator',
    description: 'Automated interest calculation with customizable rates, grace periods, and compounding options.',
    icon: '📊',
    accent: '#fdf0f7',
  },
  {
    title: 'Renewal & Closure',
    description: 'One-click renewals, partial payments, and loan closures with automatic interest adjustments.',
    icon: '🔄',
    accent: '#eff3ff',
  },
  {
    title: 'Overdue & Settlement Tracking',
    description: 'Track overdue loans, send automated reminders, and manage auction workflows seamlessly.',
    icon: '🔔',
    accent: '#fff0ef',
  },
  {
    title: 'Multi-Branch Management',
    description: 'Centralized control across all branches with real-time data sync, branch-wise reporting, and unified dashboard.',
    icon: '🏢',
    accent: '#f0f9ff',
  },
  {
    title: 'Vault Reconciliation',
    description: 'Daily vault tallying with CCTV integration, weight verification, and discrepancy alerts.',
    icon: '🔐',
    accent: '#e9f2ff',
  },
  {
    title: 'RBI Compliance',
    description: 'Auto-generated reports meeting all regulatory requirements with audit trails and documentation.',
    icon: '✅',
    accent: '#f4f8ff',
  },
]

const faqItems = [
  {
    question: 'Is the software RBI compliant?',
    answer: 'Yes, our gold loan software is fully compliant with RBI guidelines. It generates all required reports, maintains audit trails, and ensures proper documentation for regulatory inspections.',
  },
  {
    question: 'Can I integrate with my existing systems?',
    answer: 'Absolutely! Our software integrates with popular accounting software, banking systems, and can sync with your existing jewellery management software.',
  },
  {
    question: 'How does the purity testing work?',
    answer: 'You can enter purity manually after testing, or integrate with electronic gold testers for automatic purity capture. The system supports 18K, 22K, 24K and custom purity levels.',
  },
  {
    question: 'What about data security?',
    answer: 'All customer data is encrypted, stored securely in the cloud with daily backups. Access controls ensure only authorized staff can view sensitive information.',
  },
]

const statistics = [
  { number: '500+', label: 'Active Customers', icon: '👥' },
  { number: '50K+', label: 'Loans Processed', icon: '💰' },
  { number: '₹500Cr+', label: 'Loan Value', icon: '💎' },
  { number: '99.9%', label: 'Uptime', icon: '⚡' },
]

const processSteps = [
  {
    step: '01',
    title: 'Customer Onboarding',
    description: 'Digital KYC verification with Aadhaar, photo capture, and e-signature collection in minutes.',
    icon: '👤',
  },
  {
    step: '02',
    title: 'Gold Valuation',
    description: 'AI-powered purity assessment with live market rates for instant and accurate loan valuation.',
    icon: '⚖️',
  },
  {
    step: '03',
    title: 'Loan Disbursement',
    description: 'Quick loan approval and disbursement with automated documentation and pledge card generation.',
    icon: '💳',
  },
  {
    step: '04',
    title: 'Ongoing Management',
    description: 'Track payments, renewals, and interest calculations automatically with real-time updates.',
    icon: '📊',
  },
]

const benefits = [
  {
    title: 'Save 70% Time',
    description: 'Automate manual processes and reduce loan processing time from hours to minutes.',
    icon: '⏱️',
    color: '#fff9e8',
  },
  {
    title: 'Reduce Errors',
    description: 'Eliminate calculation mistakes with automated interest and valuation calculations.',
    icon: '✅',
    color: '#e5f5f0',
  },
  {
    title: 'Increase Revenue',
    description: 'Process more loans daily with streamlined operations and faster customer service.',
    icon: '📈',
    color: '#fce8d5',
  },
  {
    title: 'Stay Compliant',
    description: 'Auto-generate RBI-compliant reports and maintain complete audit trails effortlessly.',
    icon: '🛡️',
    color: '#fdf0f7',
  },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, GoldFin RBI compliant',
    content: 'This software transformed our operations. We now process 3x more loans with the same team. The RBI compliance features are a lifesaver!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Manager, SecureGold',
    content: 'The digital KYC and instant valuation features have reduced our customer onboarding time by 80%. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Director, TrustGold Finance',
    content: 'Multi-branch management is seamless. We can monitor all branches in real-time from one dashboard. Excellent software!',
    rating: 5,
  },
]

const integrations = [
  { name: 'Aadhaar API', icon: '🆔', description: 'Seamless KYC verification' },
  { name: 'Banking Systems', icon: '🏦', description: 'Direct payment integration' },
  { name: 'Accounting Software', icon: '📊', description: 'Tally, QuickBooks sync' },
  { name: 'SMS Gateway', icon: '📱', description: 'Automated notifications' },
  { name: 'Email Service', icon: '📧', description: 'Email alerts & reports' },
  { name: 'CCTV Systems', icon: '📹', description: 'Vault monitoring integration' },
]

const reports = [
  {
    title: 'Loan Portfolio Report',
    description: 'Comprehensive overview of all active loans, disbursements, and collections with branch-wise breakdown.',
    icon: '📑',
    color: '#fff9e8',
  },
  {
    title: 'Interest Calculation Report',
    description: 'Detailed interest statements showing principal, interest, penalties, and total outstanding amounts.',
    icon: '💰',
    color: '#e5f5f0',
  },
  {
    title: 'Overdue & Auction Report',
    description: 'Track overdue loans, pending auctions, and recovery status with automated reminders and alerts.',
    icon: '⏰',
    color: '#fce8d5',
  },
  {
    title: 'Vault Reconciliation Report',
    description: 'Daily vault inventory, weight verification, and discrepancy reports with CCTV integration data.',
    icon: '🔐',
    color: '#fdf0f7',
  },
  {
    title: 'RBI Compliance Report',
    description: 'Auto-generated regulatory reports meeting all RBI guidelines with complete audit trails.',
    icon: '✅',
    color: '#eff3ff',
  },
  {
    title: 'Customer Analytics',
    description: 'Customer behavior insights, loan patterns, renewal rates, and customer lifetime value analysis.',
    icon: '📊',
    color: '#fff0ef',
  },
]

const GoldLoanSoftware = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const [openFaq, setOpenFaq] = useState(null)
  const [visibleStats, setVisibleStats] = useState(false)
  const [visibleProcess, setVisibleProcess] = useState(false)
  const [visibleBenefits, setVisibleBenefits] = useState(false)
  const [visibleTestimonials, setVisibleTestimonials] = useState(false)
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const featuresRef = useRef(null)
  const statsRef = useRef(null)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  const testimonialsRef = useRef(null)

  useEffect(() => {
    setIsHeroVisible(true)
  }, [])

  useEffect(() => {
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleFeatures((prev) => [...prev, idx])
              }, idx * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (featuresRef.current) featuresObserver.observe(featuresRef.current)

    return () => {
      featuresObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (statsRef.current) statsObserver.observe(statsRef.current)

    return () => {
      statsObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProcess(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (processRef.current) processObserver.observe(processRef.current)

    return () => {
      processObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const benefitsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBenefits(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current)

    return () => {
      benefitsObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const testimonialsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleTestimonials(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current)

    return () => {
      testimonialsObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c918a]/10 via-transparent to-[#0f2d55]/5" />
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#1c918a]/20 to-transparent blur-3xl" />
        <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#0f2d55]/10 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p
            className={`inline-flex items-center gap-3 rounded-full border border-[#1c918a]/40 bg-white/80 px-6 py-2.5 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.45em] text-[#1c918a] shadow-[0_12px_32px_rgba(15,45,85,0.16)] transition-all duration-700 ${
              isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#1c918a] animate-ping" />
            <span className="tracking-[0.4em]">Jewellery Girvi Management System</span>
          </p>

          <h1 className={`mt-12 text-4xl font-bold leading-tight text-[#0f2d55] transition-all duration-700 delay-150 lg:text-6xl ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
              Complete Girvi Operating
            <span className="block bg-gradient-to-r from-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
            System for Jewellers
            </span>
          </h1>

          <p className={`mx-auto mt-6 max-w-2xl text-lg text-slate-600 transition-all duration-700 delay-300 ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          Streamline your jewellery girvi operations with secure customer records, digital KYC, instant gold valuation, automated interest calculation, and structured reports for easy tracking and audits.
          </p>

          <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button className="w-full rounded-xl bg-gradient-to-r from-[#1c918a] to-[#0f2d55] px-8 py-4 font-semibold text-white shadow-[0px_8px_20px_rgba(247,160,71,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0px_12px_28px_rgba(247,160,71,0.45)] sm:w-auto">
              Start Free Trial
            </button>
            <button 
              onClick={() => setIsDemoFormOpen(true)}
              className="w-full rounded-xl border-2 border-[#0f2d55] bg-white px-8 py-4 font-semibold text-[#0f2d55] transition-all duration-300 hover:scale-105 hover:bg-[#0f2d55] hover:text-white sm:w-auto"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="bg-gradient-to-b from-white to-[#fff8ef] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Powerful Features
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Everything you need for gold loan operations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              From KYC to compliance, manage your entire loan lifecycle with intelligent automation.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group rounded-[28px] border border-teal-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200 ${
                  visibleFeatures.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: feature.accent }}
                >
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="relative overflow-hidden bg-gradient-to-br from-[#1c918a] to-[#0f2d55] py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  visibleStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="mb-4 text-5xl">{stat.icon}</div>
                <div className="text-5xl font-bold text-white lg:text-6xl">{stat.number}</div>
                <div className="mt-2 text-lg text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={processRef} className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                How It Works
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Simple 4-Step Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              From customer onboarding to loan management, everything happens seamlessly in our platform.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.step}
                className={`group relative rounded-[28px] border border-teal-100 bg-gradient-to-br from-white to-[#fff8ef] p-8 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200 ${
                  visibleProcess ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55] text-lg font-bold text-white shadow-lg">
                  {step.step}
                </div>
                <div className="mb-4 text-5xl">{step.icon}</div>
                <h3 className="text-xl font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="bg-gradient-to-b from-[#fff8ef] to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Key Benefits
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Why Choose Our Platform?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Transform your gold loan operations with powerful automation and intelligent features.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className={`group rounded-[28px] border border-teal-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200 ${
                  visibleBenefits ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: benefit.color }}
                >
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Testimonials
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Trusted by leading NBFCs and financial institutions across India.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`group rounded-[28px] border border-teal-100 bg-gradient-to-br from-white to-[#fff8ef] p-8 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200 ${
                  visibleTestimonials ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-6 text-slate-600 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t border-teal-100 pt-4">
                  <div className="font-semibold text-[#0f2d55]">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-gradient-to-b from-[#fff8ef] to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Integrations
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Seamless Integrations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Connect with your existing tools and services for a unified workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, idx) => (
              <div
                key={integration.name}
                className="group rounded-[28px] border border-teal-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 text-4xl">{integration.icon}</div>
                <h3 className="text-lg font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {integration.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Analytics Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Reports & Analytics
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Comprehensive Reporting Suite
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Generate detailed reports and analytics to make data-driven decisions and ensure regulatory compliance.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reports.map((report, idx) => (
              <div
                key={report.title}
                className="group rounded-[28px] border border-teal-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: report.color }}
                >
                  {report.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {report.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{report.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="rounded-xl border-2 border-[#1c918a] bg-white px-8 py-3 font-semibold text-[#1c918a] transition-all duration-300 hover:bg-[#1c918a] hover:text-white">
              View All Reports
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-[#1c918a]/10 to-[#fff8ef] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Why Choose Us
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              The Complete Solution
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[28px] border border-teal-100 bg-white/90 p-8 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)]">
              <div className="mb-4 text-4xl">🔒</div>
              <h3 className="text-xl font-semibold text-[#0f2d55]">Bank-Grade Security</h3>
              <p className="mt-3 text-slate-600">
                Enterprise-level encryption, secure cloud infrastructure, and regular security audits to protect your data.
              </p>
            </div>
            <div className="rounded-[28px] border border-teal-100 bg-white/90 p-8 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)]">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="text-xl font-semibold text-[#0f2d55]">Lightning Fast</h3>
              <p className="mt-3 text-slate-600">
                Optimized performance with 99.9% uptime guarantee. Process loans in seconds, not minutes.
              </p>
            </div>
            <div className="rounded-[28px] border border-teal-100 bg-white/90 p-8 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)]">
              <div className="mb-4 text-4xl">🎯</div>
              <h3 className="text-xl font-semibold text-[#0f2d55]">RBI Compliant</h3>
              <p className="mt-3 text-slate-600">
                Built-in compliance features ensure you meet all regulatory requirements automatically.
              </p>
            </div>
            <div className="rounded-[28px] border border-teal-100 bg-white/90 p-8 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)]">
              <div className="mb-4 text-4xl">📱</div>
              <h3 className="text-xl font-semibold text-[#0f2d55]">Mobile Ready</h3>
              <p className="mt-3 text-slate-600">
                Access your dashboard from any device. Mobile-responsive design for on-the-go management.
              </p>
            </div>
            <div className="rounded-[28px] border border-teal-100 bg-white/90 p-8 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)]">
              <div className="mb-4 text-4xl">🔄</div>
              <h3 className="text-xl font-semibold text-[#0f2d55]">24/7 Support</h3>
              <p className="mt-3 text-slate-600">
                Round-the-clock customer support with dedicated account managers for enterprise clients.
              </p>
            </div>
            <div className="rounded-[28px] border border-teal-100 bg-white/90 p-8 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)]">
              <div className="mb-4 text-4xl">📈</div>
              <h3 className="text-xl font-semibold text-[#0f2d55]">Scalable Growth</h3>
              <p className="mt-3 text-slate-600">
                Start small and scale effortlessly. Our platform grows with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                FAQ
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55]">Frequently Asked Questions</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl bg-[#fff9e8] transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#0f2d55]">{item.question}</span>
                  <span className={`text-2xl text-[#1c918a] transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-6 pb-5 text-slate-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1c918a]/10 to-[#fff8ef] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0f2d55] lg:text-4xl">
            Ready to modernize your gold loan business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Join hundreds of NBFCs and banks who trust our software for their gold loan operations.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-xl bg-gradient-to-r from-[#1c918a] to-[#0f2d55] px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto">
              Start Free Trial
            </button>
            <button className="w-full rounded-xl border-2 border-[#0f2d55] px-10 py-4 font-semibold text-[#0f2d55] transition-all duration-300 hover:bg-[#0f2d55] hover:text-white sm:w-auto">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schedule Demo Form Modal */}
      <ScheduleDemoModal 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </div>
  )
}

export default GoldLoanSoftware
