import { useState, useEffect, useRef } from 'react'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'
import appImg from '../../assets/image/App_img.png'

const features = [
  {
    title: 'Unicorn Jewellery App',
    description: 'Your complete jewellery business management app. Billing, inventory, orders, barcode, staff management — everything in one place.',
    icon: '📊',
    accent: '#fce8d5',
  },
  {
    title: 'Unicorn Loan App',
    description: 'Manage all jewellery loan and mortgage activities on the go. Track interest, due dates, customer EMIs, and loan history effortlessly.',
    icon: '📱',
    accent: '#e5f5f0',
  },
  {
    title: 'Unicorn Scheme App',
    description: 'Handle your gold and silver saving schemes digitally. Automate installments, send reminders, and generate scheme reports instantly.',
    icon: '📡',
    accent: '#fdf0f7',
  },
  {
    title: 'Unicorn E-Commerce App',
    description: 'Launch your own online jewellery store. Let customers browse, inquire, and shop directly from your branded mobile app.',
    icon: '🌐',
    accent: '#eff3ff',
  },
  { 
    title: 'Unicorn E-Reports App',
    description: 'Access all your business reports in real time. Analytics, sales summaries, stock insights, performance reports — all in your pocket.',
    icon: '🔐',
    accent: '#fff9e8',
  },
  {
    title: 'Push Notifications',
    description: 'Instant alerts for orders, payments, stock levels, and important business updates.',
    icon: '🔔',
    accent: '#fff0ef',
  },
]

const whyChooseItems = [
  {
    title: 'Manage End-to-End Operations',
    description: 'Billing, schemes, loans, orders, e-commerce, reports - every function your business needs.',
    icon: '🚀',
    accent: '#fff0ef',
  },
  {
    title: 'Optimized for Jewellers',
    description: 'Designed exclusively for jewellery businesses with industry-specific features.',
    icon: '📱',
    accent: '#eff3ff',
  },
  {
    title: 'Seamless Sync Across Devices',
    description: 'Your data automatically syncs between desktop, mobile, and cloud.',
    icon: '🔄',
    accent: '#e5f5f0',
  },
  {
    title: 'Perfect for Owners, Managers & Staff',
    description: 'Powerful enough for owners; simple enough for staff.',
    icon: '💼',
    accent: '#fdf0f7',
  },
  {
    title: 'Work in Real-Time',
    description: 'Track your entire business live - even when you\'re travelling.',
    icon: '⏰',
    accent: '#fff9e8',
  },
]

const advancedFeatures = [
  {
    title: 'Instant Billing on Mobile',
    description: 'Generate bills within seconds — even during rush hours or exhibitions.',
    icon: '⏳',
    accent: '#fff9e8',
  },
  {
    title: 'Real-time Stock Tracking',
    description: 'Check gold, silver, diamond & gemstone stock levels from anywhere.',
    icon: '🔍',
    accent: '#e5f5f0',
  },
  {
    title: 'Photo & Video Catalogue',
    description: 'Upload high-quality images, reels & short videos of jewellery items.',
    icon: '📸',
    accent: '#fdf0f7',
  },
  {
    title: 'Customer Ledger & History',
    description: 'View customer balances, schemes, purchases & loan history instantly.',
    icon: '🧾',
    accent: '#eff3ff',
  },
  {
    title: 'Automatic Gold Rate Update',
    description: 'Gold & silver rates update automatically based on your business settings.',
    icon: '🧮',
    accent: '#fff0ef',
  },
  {
    title: 'Multi-Staff Login',
    description: 'Staff can log in individually with role-based access.',
    icon: '👥',
    accent: '#fce8d5',
  },
  {
    title: 'Shareable Invoices & Orders',
    description: 'Share PDF bills, quotations, and order confirmations via WhatsApp.',
    icon: '📤',
    accent: '#e5f5f0',
  },
  {
    title: 'Bluetooth Printing',
    description: 'Print bills, tags & barcodes using any portable Bluetooth printer.',
    icon: '🖨',
    accent: '#fdf0f7',
  },
]

const ownerAlerts = [
  {
    title: 'High-value sales',
    description: 'Get instant notifications when sales exceed your set threshold.',
    icon: '💰',
    accent: '#fff0ef',
  },
  {
    title: 'Low stock warnings',
    description: 'Stay ahead with alerts when inventory levels drop below minimum.',
    icon: '⚠️',
    accent: '#fff9e8',
  },
  {
    title: 'Staff login activity',
    description: 'Monitor when your staff logs in and out of the system.',
    icon: '👥',
    accent: '#e5f5f0',
  },
  {
    title: 'Cash movement',
    description: 'Track all cash transactions and movements in real-time.',
    icon: '💵',
    accent: '#eff3ff',
  },
  {
    title: 'Online orders',
    description: 'Get notified immediately when new orders come through your e-commerce platform.',
    icon: '🛒',
    accent: '#fdf0f7',
  },
]

const analyticsItems = [
  {
    title: 'Daily/Monthly sales summary',
    description: 'View comprehensive sales reports for any time period with detailed breakdowns.',
    icon: '📊',
    accent: '#fce8d5',
  },
  {
    title: 'Top-selling items',
    description: 'Identify your best-performing products and optimize inventory accordingly.',
    icon: '🏆',
    accent: '#e5f5f0',
  },
  {
    title: 'Staff performance',
    description: 'Track individual staff sales, productivity, and contribution metrics.',
    icon: '📈',
    accent: '#eff3ff',
  },
  {
    title: 'Customer buying trends',
    description: 'Analyze customer behavior patterns and preferences to boost sales.',
    icon: '📉',
    accent: '#fdf0f7',
  },
]

const performanceFeatures = [
  {
    title: 'Lightning-Fast Operations',
    description: 'No lag. No delays. Even with thousands of jewellery items & high-quality images.',
    icon: '🚀',
    accent: '#fff0ef',
  },
  {
    title: 'Smart Auto-Sync',
    description: 'Your data updates silently in the background — no interruptions.',
    icon: '🔄',
    accent: '#e5f5f0',
  },
  {
    title: 'AI-Assisted Insights',
    description: 'Know what items sell more, who your top customers are, and what stock moves fastest.',
    icon: '🧠',
    accent: '#eff3ff',
  },
  {
    title: 'Zero-Downtime Architecture',
    description: 'Your business stays online — always.',
    icon: '🌙',
    accent: '#fdf0f7',
  },
]

const reliabilityFeatures = [
  {
    title: '99.9% App Uptime',
    description: 'Reliable service you can count on, every single day.',
    icon: '✔',
    accent: '#e5f5f0',
  },
  {
    title: 'Military-grade encryption',
    description: 'Your business data is protected with bank-level security.',
    icon: '✔',
    accent: '#eff3ff',
  },
  {
    title: 'Multi-branch compatibility',
    description: 'Seamlessly manage multiple locations from one app.',
    icon: '✔',
    accent: '#fdf0f7',
  },
  {
    title: 'Optimized for low network areas',
    description: 'Works smoothly even with limited internet connectivity.',
    icon: '✔',
    accent: '#fff9e8',
  },
  {
    title: 'Designed with jewellers\' workflow in mind',
    description: 'Built by understanding how jewellers actually work.',
    icon: '✔',
    accent: '#fff0ef',
  },
]

const aiSmartAnalytics = [
  {
    title: 'Sales trends',
    description: 'Automatically analyze and identify patterns in your sales data.',
    icon: '📈',
    accent: '#fce8d5',
  },
  {
    title: 'Fast-moving items',
    description: 'Instantly identify your best-selling products and top performers.',
    icon: '⚡',
    accent: '#e5f5f0',
  },
  {
    title: 'Slow-moving stock',
    description: 'Get alerts on inventory that needs attention or clearance.',
    icon: '📦',
    accent: '#fdf0f7',
  },
  {
    title: 'Best performing staff',
    description: 'Track and recognize your top-performing team members.',
    icon: '👥',
    accent: '#eff3ff',
  },
  {
    title: 'Customer buying patterns',
    description: 'Understand customer preferences and shopping behaviors.',
    icon: '🛍️',
    accent: '#fff9e8',
  },
]

const aiProductRecognition = [
  {
    title: 'Product category',
    description: 'AI automatically identifies and categorizes jewellery items from photos.',
    icon: '🏷️',
    accent: '#fff0ef',
  },
  {
    title: 'Stone type',
    description: 'Recognizes diamond, gemstone, and precious stone types instantly.',
    icon: '💎',
    accent: '#e5f5f0',
  },
  {
    title: 'Weight estimations',
    description: 'Provides intelligent weight estimates for quick catalogue entry.',
    icon: '⚖️',
    accent: '#fdf0f7',
  },
]

const whatsappAssistantFeatures = [
  {
    title: 'Catalogue requests',
    description: 'Customers can request product catalogues and receive them instantly via WhatsApp.',
    icon: '📋',
    accent: '#e5f5f0',
  },
  {
    title: 'Price queries',
    description: 'Automatic price responses for any jewellery item in your inventory.',
    icon: '💰',
    accent: '#fff9e8',
  },
  {
    title: 'Scheme details',
    description: 'Customers get instant information about gold and silver saving schemes.',
    icon: '💎',
    accent: '#fdf0f7',
  },
  {
    title: 'Order status',
    description: 'Real-time order tracking and status updates sent automatically to customers.',
    icon: '📦',
    accent: '#eff3ff',
  },
  {
    title: 'Loan balance',
    description: 'Customers can check their loan balance and payment history instantly.',
    icon: '🏦',
    accent: '#fff0ef',
  },
  {
    title: 'Due date reminders',
    description: 'Automatic reminders for scheme installments, loan payments, and order deliveries.',
    icon: '⏰',
    accent: '#fce8d5',
  },
]

const faqItems = [
  {
    question: 'Is the app free to download?',
    answer: 'Yes, the app is free to download. You need an active Unicorn Jewellery Software subscription to use the app features.',
  },
  {
    question: 'Which devices are supported?',
    answer: 'Our app works on Android 8.0+ and iOS 13+. We also support tablets for a larger screen experience.',
  },
  {
    question: 'Can I use the app offline?',
    answer: 'Yes! The app is designed to work offline. Create bills, manage inventory, and track orders without internet. Everything syncs when you reconnect.',
  },
  {
    question: 'How secure is the mobile app?',
    answer: 'We use bank-grade encryption, biometric authentication, and role-based access controls to keep your data secure.',
  },
]

const MobileApp = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const [visibleWhyChoose, setVisibleWhyChoose] = useState([])
  const [visibleAdvancedFeatures, setVisibleAdvancedFeatures] = useState([])
  const [visiblePerformanceFeatures, setVisiblePerformanceFeatures] = useState([])
  const [visibleReliabilityFeatures, setVisibleReliabilityFeatures] = useState([])
  const [visibleOwnerAlerts, setVisibleOwnerAlerts] = useState([])
  const [visibleAnalytics, setVisibleAnalytics] = useState([])
  const [visibleAiAnalytics, setVisibleAiAnalytics] = useState([])
  const [visibleAiRecognition, setVisibleAiRecognition] = useState([])
  const [visibleWhatsappFeatures, setVisibleWhatsappFeatures] = useState([])
  const [openFaq, setOpenFaq] = useState(null)
  const featuresRef = useRef(null)
  const whyChooseRef = useRef(null)
  const advancedFeaturesRef = useRef(null)
  const performanceRef = useRef(null)
  const reliabilityRef = useRef(null)
  const ownerFeaturesRef = useRef(null)
  const aiCapabilitiesRef = useRef(null)
  const whatsappAssistantRef = useRef(null)

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
    const whyChooseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            whyChooseItems.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleWhyChoose((prev) => [...prev, idx])
              }, idx * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (whyChooseRef.current) whyChooseObserver.observe(whyChooseRef.current)

    return () => {
      whyChooseObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const advancedFeaturesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            advancedFeatures.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleAdvancedFeatures((prev) => [...prev, idx])
              }, idx * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (advancedFeaturesRef.current) advancedFeaturesObserver.observe(advancedFeaturesRef.current)

    return () => {
      advancedFeaturesObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const performanceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            performanceFeatures.forEach((_, idx) => {
              setTimeout(() => {
                setVisiblePerformanceFeatures((prev) => [...prev, idx])
              }, idx * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (performanceRef.current) performanceObserver.observe(performanceRef.current)

    return () => {
      performanceObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const reliabilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reliabilityFeatures.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleReliabilityFeatures((prev) => [...prev, idx])
              }, idx * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (reliabilityRef.current) reliabilityObserver.observe(reliabilityRef.current)

    return () => {
      reliabilityObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const ownerFeaturesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ownerAlerts.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleOwnerAlerts((prev) => [...prev, idx])
              }, idx * 100)
            })
            analyticsItems.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleAnalytics((prev) => [...prev, idx])
              }, idx * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ownerFeaturesRef.current) ownerFeaturesObserver.observe(ownerFeaturesRef.current)

    return () => {
      ownerFeaturesObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const aiCapabilitiesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aiSmartAnalytics.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleAiAnalytics((prev) => [...prev, idx])
              }, idx * 100)
            })
            aiProductRecognition.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleAiRecognition((prev) => [...prev, idx])
              }, idx * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (aiCapabilitiesRef.current) aiCapabilitiesObserver.observe(aiCapabilitiesRef.current)

    return () => {
      aiCapabilitiesObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const whatsappAssistantObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            whatsappAssistantFeatures.forEach((_, idx) => {
              setTimeout(() => {
                setVisibleWhatsappFeatures((prev) => [...prev, idx])
              }, idx * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (whatsappAssistantRef.current) whatsappAssistantObserver.observe(whatsappAssistantRef.current)

    return () => {
      whatsappAssistantObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f0f7ff] to-[#e8f4ff]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/5 via-transparent to-[#1c918a]/5" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/20 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <style>
                {`
                  @keyframes pillGlow {
                    0%, 100% {
                      transform: translateY(0);
                      box-shadow: 0 18px 45px rgba(15, 45, 85, 0.25);
                    }
                    50% {
                      transform: translateY(-3px);
                      box-shadow: 0 24px 55px rgba(15, 45, 85, 0.35);
                    }
                  }
                `}
              </style>
              <p
                className={`inline-flex items-center gap-3 rounded-full border-2 border-[#1c918a]/70 bg-white/90 px-8 py-3 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.5em] text-[#0b716b] shadow-[0_18px_45px_rgba(15,45,85,0.25)] transition-all duration-700 backdrop-blur-sm ${
                  isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}
                style={{ animation: 'pillGlow 3s ease-in-out infinite' }}
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1c918a] shadow-[0_0_0_6px_rgba(28,145,138,0.25)] animate-ping" />
                <span className="tracking-[0.55em]">Mobile App</span>
              </p>

              <h1 className={`mt-12 text-4xl font-bold leading-tight text-[#0f2d55] transition-all duration-700 delay-150 lg:text-5xl ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                Your Jewellery Business
                <span className="block bg-gradient-to-r from-[#0f2d55] to-[#1c918a] bg-clip-text text-transparent">
                  In Your Pocket
                </span>
              </h1>

              <p className={`mt-6 text-lg text-slate-600 transition-all duration-700 delay-300 ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                Manage your entire jewellery business on the go. From billing to inventory, customer management to analytics - everything accessible from your smartphone.
              </p>

              <div className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-500 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <button className="flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] leading-none">Get it on</p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] leading-none">Download on the</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className={`flex justify-center transition-all duration-1000 delay-300 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="relative">
                <style>
                  {`
                    @keyframes float {
                      0%, 100% { transform: translateY(0px); }
                      50% { transform: translateY(-20px); }
                    }
                  `}
                </style>
                <div
                  className="relative"
                  style={{ animation: 'float 4s ease-in-out infinite' }}
                >
                  <div className="relative h-[500px] w-[250px] rounded-[3rem] border-8 border-[#0f2d55] bg-[#0f2d55] shadow-[0_30px_60px_rgba(15,45,85,0.3)]">
                    <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                    <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
                      <img
                        src={appImg}
                        alt="App Screenshot"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-2 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                App Features
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Powerful features, intuitive design
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Everything you need to manage your business on the go.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group rounded-2xl bg-gradient-to-br from-[#f8fafc] to-white p-6 shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(15,45,85,0.12)] ${
                  visibleFeatures.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: feature.accent }}
                >
                  {feature.icon}
                </div>
                <h3 className="mt-4 font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section ref={whyChooseRef} className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f7ff] to-[#e8f4ff] py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/3 via-transparent to-[#1c918a]/3" />
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#1c918a]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#0f2d55]/10 to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Why Choose Us
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-5xl">
              Why Choose Unicorn Mobile Apps?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Experience the power of mobile-first jewellery business management. Built for jewellers, by jewellers.
            </p>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(15,45,85,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(15,45,85,0.2)] border border-white/50 ${
                  visibleWhyChoose.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-2xl" />
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.icon}
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-slate-600">{item.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
            
            {/* Center the last item */}
            <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
              <div
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2d55] to-[#1c918a] p-8 shadow-[0_8px_30px_rgba(15,45,85,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(15,45,85,0.3)] ${
                  visibleWhyChoose.includes(4) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                  {whyChooseItems[4].icon}
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-white transition-colors duration-300">
                  {whyChooseItems[4].title}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-white/90">{whyChooseItems[4].description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section ref={advancedFeaturesRef} className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/2 via-transparent to-[#1c918a]/2" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Advanced Features
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-5xl">
              Advanced Features for Modern Jewellery Businesses
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Powerful tools designed to streamline your operations and boost productivity.
            </p>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {advancedFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f8fafc] to-white p-6 shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(15,45,85,0.15)] border border-[#f0f7ff] ${
                  visibleAdvancedFeatures.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-xl" />
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md"
                  style={{ backgroundColor: feature.accent }}
                >
                  {feature.icon}
                </div>
                <h3 className="relative mt-5 text-lg font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section ref={aiCapabilitiesRef} className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f7ff] to-[#e8f4ff] py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/3 via-transparent to-[#1c918a]/3" />
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#1c918a]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#0f2d55]/10 to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                AI Capabilities
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-5xl">
              🌟 AI Capabilities Inside Unicorn Apps
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Harness the power of artificial intelligence to make smarter business decisions and streamline your operations.
            </p>
          </div>

          {/* AI Smart Analytics Section */}
          <div className="mt-20">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm px-8 py-4 shadow-[0_8px_30px_rgba(15,45,85,0.15)] border border-white/60">
                <span className="text-3xl">🧠</span>
                <h3 className="text-2xl font-bold text-[#0f2d55]">AI Smart Analytics</h3>
              </div>
              <p className="mt-6 text-lg font-medium text-slate-700 max-w-2xl mx-auto">
                Your app automatically analyses and highlights what needs your attention — <span className="text-[#1c918a] font-semibold">instantly</span>.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {aiSmartAnalytics.map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(15,45,85,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(15,45,85,0.2)] border border-white/60 ${
                    visibleAiAnalytics.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-2xl" />
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="relative mt-6 text-xl font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-base leading-relaxed text-slate-600">{item.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* AI Product Recognition Section */}
          <div className="mt-28">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm px-8 py-4 shadow-[0_8px_30px_rgba(15,45,85,0.15)] border border-white/60">
                <span className="text-3xl">📸</span>
                <h3 className="text-2xl font-bold text-[#0f2d55]">AI Product Recognition</h3>
              </div>
              <p className="mt-6 text-lg font-medium text-slate-700 max-w-2xl mx-auto">
                <span className="text-[#1c918a] font-semibold">Click a photo</span> → AI identifies product details instantly. Perfect for quick catalogue entry & fast stock uploads.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto">
              {aiProductRecognition.map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(15,45,85,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(15,45,85,0.2)] border border-white/60 ${
                    visibleAiRecognition.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-2xl" />
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="relative mt-6 text-xl font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-base leading-relaxed text-slate-600">{item.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section ref={performanceRef} className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f7ff] to-[#e8f4ff] py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/3 via-transparent to-[#1c918a]/3" />
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#1c918a]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#0f2d55]/10 to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Performance
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-5xl">
              ⚡ Performance That Feels Effortless
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Built with enterprise technology, our mobile apps deliver:
            </p>
          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {performanceFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(15,45,85,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(15,45,85,0.2)] border border-white/50 ${
                  visiblePerformanceFeatures.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-2xl" />
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                  style={{ backgroundColor: feature.accent }}
                >
                  {feature.icon}
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-slate-600">{feature.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reliability Section */}
      <section ref={reliabilityRef} className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/2 via-transparent to-[#1c918a]/2" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Reliability
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-5xl">
              🥇 Built With Precision. Engineered for Reliability.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Every feature is crafted after working with real jewellers, showroom owners, karigars, wholesalers & chain stores.
            </p>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reliabilityFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f8fafc] to-white p-6 shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(15,45,85,0.15)] border border-[#f0f7ff] ${
                  visibleReliabilityFeatures.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-xl" />
                <div className="flex items-start gap-4">
                  <div
                    className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md"
                    style={{ backgroundColor: feature.accent }}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI WhatsApp Assistant Section */}
      <section ref={whatsappAssistantRef} className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f7ff] to-[#e8f4ff] py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/3 via-transparent to-[#1c918a]/3" />
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#1c918a]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#0f2d55]/10 to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                AI Assistant
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-5xl">
              💬 AI WhatsApp Assistant
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Auto-reply to customer inquiries. All handled automatically, 24/7.
            </p>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {whatsappAssistantFeatures.map((feature, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-[0_8px_30px_rgba(15,45,85,0.12)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(15,45,85,0.2)] border border-white/50 ${
                  visibleWhatsappFeatures.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-2xl" />
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                  style={{ backgroundColor: feature.accent }}
                >
                  {feature.icon}
                </div>
                <h3 className="relative mt-6 text-xl font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-base leading-relaxed text-slate-600">{feature.description}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="mt-16 mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f2d55] to-[#1c918a] p-8 lg:p-12 shadow-[0_20px_60px_rgba(15,45,85,0.3)]">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 mb-6">
                  <span className="text-3xl">🤖</span>
                  <span className="text-xl font-bold text-white">24/7 Automated Support</span>
                </div>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                  Your customers get instant responses to their queries, even when you're not available. 
                  The AI assistant handles catalogue requests, price queries, scheme details, order status, 
                  loan balance, and due date reminders automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features for Business Owners Section */}
      <section ref={ownerFeaturesRef} className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0f7ff] to-[#e8f4ff] py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/3 via-transparent to-[#1c918a]/3" />
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#1c918a]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#0f2d55]/10 to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Special Features
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-5xl">
              Special Features for Business Owners
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Stay in control with real-time alerts and comprehensive analytics designed exclusively for business owners.
            </p>
          </div>

          {/* Owner Alerts Section */}
          <div className="mt-20">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 shadow-md">
                <span className="text-2xl">🔔</span>
                <h3 className="text-2xl font-bold text-[#0f2d55]">Owner Alerts</h3>
              </div>
              <p className="mt-4 text-lg text-slate-600">
                Get real-time notifications for important business events
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {ownerAlerts.map((alert, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(15,45,85,0.15)] border border-white/50 ${
                    visibleOwnerAlerts.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-xl" />
                  <div
                    className="relative flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md"
                    style={{ backgroundColor: alert.accent }}
                  >
                    {alert.icon}
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                    {alert.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{alert.description}</p>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Overview Section */}
          <div className="mt-24">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 shadow-md">
                <span className="text-2xl">💹</span>
                <h3 className="text-2xl font-bold text-[#0f2d55]">Analytics Overview</h3>
              </div>
              <p className="mt-4 text-lg text-slate-600">
                Understand your business with comprehensive insights and reports
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {analyticsItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-[0_4px_20px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(15,45,85,0.15)] border border-white/50 ${
                    visibleAnalytics.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-xl" />
                  <div
                    className="relative flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#faf9f7] py-24">
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
                className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
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
      <section className="bg-gradient-to-br from-[#f0f7ff] to-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0f2d55] lg:text-4xl">
            Download the app and start today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Join 50,000+ jewellers who manage their business on the go with our mobile app.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-3 rounded-xl bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span>Google Play</span>
            </button>
            <button className="flex items-center justify-center gap-3 rounded-xl bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>App Store</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MobileApp
