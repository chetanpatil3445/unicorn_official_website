import { useState, useEffect, useRef } from 'react'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'

const features = [
  {
    title: 'Accounting Reports',
    description: 'Accounting Reports show income, expenses, profits, and financial status, helping businesses track performance, maintain accuracy, and make smart financial decisions easily.',
    icon: '📊',
    accent: '#fce8d5',
  },
  {
    title: 'Stock Management',
    description: 'Stock Management tracks inventory levels, stock movement, and product availability, ensuring accurate control, reduced losses, and smooth business operations with timely restocking.',
    icon: '📦',
    accent: '#e5f5f0',
  },
  {
    title: 'Barcode & RFID Tag System',
    description: 'Barcode and RFID Tags system enables fast product identification, accurate scanning, real-time tracking, and improved inventory control for seamless retail and warehouse operations.',
    icon: '🏷️',
    accent: '#fdf0f7',
  },
  {
    title: 'Customer Management',
    description: 'Customer Management helps store and track customer details, purchase history, preferences, and support interactions to improve service quality, retention, and business growth.',
    icon: '👥',
    accent: '#eff3ff',
  },
  {
    title: 'GST Reports',
    description: 'GST Reports provide accurate tax calculations, sales and purchase summaries, return filing data, and compliance insights to simplify taxation and ensure smooth business operations.',
    icon: '📋',
    accent: '#fff0ef',
  },
  {
    title: 'Certificate & Tag Printing',
    description: 'Certificate & Tag Printing enables quick creation of professional product tags and certificates with accurate details, customizable designs, and seamless integration for retail operations.',
    icon: '🖨️',
    accent: '#fff9e8',
  },
  {
    title: 'Retail Counter Billing',
    description: 'Retail Counter Billing enables fast invoicing, accurate item scanning, easy payment processing, and smooth checkout experiences to enhance customer satisfaction and store efficiency.',
    icon: '🧾',
    accent: '#e9f2ff',
  },
  {
    title: 'Purchase & Sales',
    description: 'Purchase & Sales manage buying and selling transactions, track orders, monitor stock movement, and generate reports to ensure smooth, accurate, and efficient business operations.',
    icon: '💰',
    accent: '#f4f8ff',
  },
]

const coreModules = [
  {
    title: 'Retail Counter Billing',
    icon: '🧾',
    accent: '#e9f2ff',
    features: [
      'Super-fast POS billing',
      'Weight-wise billing (gross, net, fine, final fine)',
      'Automatic wastage & making calculation',
      'Barcode scanning for quick item selection',
      'Multi-payment support (cash, card, UPI, split payments)',
    ],
  },
  {
    title: 'Purchase & Sales Management',
    icon: '💰',
    accent: '#f4f8ff',
    features: [
      'Purchase entry with purity & weight details',
      'Sales invoices with preset templates',
      'Auto-rate update from daily gold/silver rates',
      'Vendor & customer-wise tracking',
    ],
  },
  {
    title: 'Old Gold / Scrap Gold Exchange',
    icon: '🔄',
    accent: '#fff0ef',
    features: [
      'Auto calculation for old-gold valuation',
      'Purity-wise deduction settings',
      'Track exchange items separately',
      'Instant settlement billing',
    ],
  },
  {
    title: 'Lot-Wise Stock Management',
    icon: '📦',
    accent: '#e5f5f0',
    features: [
      'Maintain stock with lots, categories & tags',
      'Real-time stock balance',
      'Stone & metal valuation',
      'Fast stock search with barcode',
    ],
  },
  {
    title: 'Certificate & Tag Printing',
    icon: '🖨️',
    accent: '#fff9e8',
    features: [
      'Custom tag designs (barcode, QR, size, purity, price)',
      'A4, thermal, and tag printer compatible',
      'Auto-print during stock entry',
    ],
  },
  {
    title: 'Karigar Jobwork',
    icon: '🔧',
    accent: '#fce8d5',
    features: [
      'Issue material to karigars',
      'Receive finished goods',
      'Track wastage, pending work & purity difference',
      'Karigar passbook & settlement reports',
    ],
  },
  {
    title: 'Customer Management (CRM)',
    icon: '👥',
    accent: '#eff3ff',
    features: [
      'Customer profiles with purchase history',
      'Birthday/anniversary reminders',
      'SMS/WhatsApp notifications',
      'Loyalty points (optional)',
    ],
  },
  {
    title: 'GST Accounting & Reports',
    icon: '📋',
    accent: '#fff0ef',
    features: [
      'Auto GST-ready invoices',
      'GSTR-1, GSTR-2A, GSTR-3B',
      'Daybook, ledger, trial balance',
      'Profit & loss, stock valuation, karigar report',
    ],
  },
]

const keyBenefits = [
  {
    title: 'Zero Mistake Billing',
    icon: '✅',
    accent: '#e5f5f0',
    description: 'Automated formulas remove all manual errors in weight, purity, wastage & labour calculation.',
  },
  {
    title: 'Multi-Unit Weight Support (gm, mg, ct)',
    icon: '⚖️',
    accent: '#fce8d5',
    description: 'Supports every jewellery industry unit for accurate weight calculations.',
  },
  {
    title: 'Custom Tag Designs',
    icon: '🎨',
    accent: '#fff9e8',
    description: 'Print premium jewellery labels with barcode, QR, logo, and price.',
  },
  {
    title: 'Fast & Easy to Learn',
    icon: '🚀',
    accent: '#e9f2ff',
    description: 'Clean interface, quick search, and simple workflows ensure staff can learn in minutes.',
  },
  {
    title: 'Cloud + Offline Support (Optional)',
    icon: '☁️',
    accent: '#eff3ff',
    description: 'Access from mobile & computer, even in low internet areas.',
  },
  {
    title: 'Highly Secure Data',
    icon: '🔒',
    accent: '#fff0ef',
    description: 'Daily backups, encryption, multi-user rights, and full activity logs.',
  },
]

const benefits = [
  {
    title: 'Zero Mistake Billing',
    icon: '✅',
    accent: '#e5f5f0',
  },
  {
    title: 'Multi-unit Weight Support (gm, mg, ct)',
    icon: '⚖️',
    accent: '#fce8d5',
  },
  {
    title: 'Custom Tag Designs',
    icon: '🎨',
    accent: '#fff9e8',
  },
  {
    title: 'Fast & Easy to Learn',
    icon: '🚀',
    accent: '#e9f2ff',
  },
]

const additionalFeatures = [
  {
    title: 'Multi-branch support',
    icon: '🏢',
    accent: '#e9f2ff',
  },
  {
    title: 'Cashbook, credit book & account settlements',
    icon: '📚',
    accent: '#fce8d5',
  },
  {
    title: 'Rate update API',
    icon: '🔄',
    accent: '#e5f5f0',
  },
  {
    title: 'Photo upload for each item',
    icon: '📸',
    accent: '#fff9e8',
  },
  {
    title: 'Repairing & service module',
    icon: '🔧',
    accent: '#eff3ff',
  },
  {
    title: 'Dashboard with live analytics',
    icon: '📊',
    accent: '#fff0ef',
  },
  {
    title: 'Export to Excel/PDF',
    icon: '📄',
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
    question: 'Is the software suitable for small jewellery shops?',
    answer: 'Absolutely! Our software is designed to scale from single-store jewellers to multi-branch chains. Choose modules that fit your needs and expand as you grow.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most stores go live within 3-7 days. Our onboarding team handles data migration, staff training, and workflow customization.',
  },
  {
    question: 'Can I access from mobile devices?',
    answer: 'Yes! Our cloud-based platform works on any device. We also offer dedicated Android and iOS apps for on-the-go management.',
  },
  {
    question: 'Is my data secure?',
    answer: 'We use enterprise-grade encryption, daily backups, and comply with data protection standards. Your business data is always safe and accessible.',
  },
]

const JewellerySoftware = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const [visibleReliabilityFeatures, setVisibleReliabilityFeatures] = useState([])
  const [visibleOwnerAlerts, setVisibleOwnerAlerts] = useState([])
  const [visibleAnalytics, setVisibleAnalytics] = useState([])
  const [visibleWhatsappFeatures, setVisibleWhatsappFeatures] = useState([])
  const [openFaq, setOpenFaq] = useState(null)
  const featuresRef = useRef(null)
  const reliabilityRef = useRef(null)
  const ownerFeaturesRef = useRef(null)
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
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d55]/5 via-transparent to-[#1c918a]/5" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#1c918a]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#0f2d55]/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl text-center">
          <p
            className={`inline-flex items-center gap-3 rounded-full border border-[#1c918a]/40 bg-white/80 px-6 py-2.5 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.45em] text-[#1c918a] shadow-[0_12px_32px_rgba(15,45,85,0.16)] transition-all duration-700 ${
              isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#1c918a] animate-ping" />
            <span className="tracking-[0.4em]">India's #1 Jewellery Software</span>
          </p>
          
          <h1 className={`mt-12 text-4xl font-bold leading-tight text-[#0f2d55] transition-all duration-700 delay-150 lg:text-6xl ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            Complete Business OS for
            <span className="block bg-gradient-to-r from-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
              Modern Jewellers
            </span>
          </h1>
          
          <p className={`mx-auto mt-6 max-w-2xl text-lg text-slate-600 transition-all duration-700 delay-300 ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          Powerful Jewellery Billing & Inventory Software for Retailers & Wholesalers.
          </p>

          <p className={`mx-auto mt-6 max-w-3xl text-lg text-slate-600 transition-all duration-700 delay-300 ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          A complete jewellery management solution designed for gold, silver, diamond and gemstone businesses.-Simple, fast, and built for real-world jewellery workflows.
          </p>
          
          <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button className="w-full rounded-xl bg-gradient-to-r from-[#1c918a] to-[#0f2d55] px-8 py-4 text-base font-semibold text-white shadow-[0px_8px_20px_rgba(241,99,56,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0px_12px_28px_rgba(241,99,56,0.45)] sm:w-auto">
              Start Free Trial
            </button>
            <button className="w-full rounded-xl border-2 border-[#0f2d55] bg-white px-8 py-4 text-base font-semibold text-[#0f2d55] transition-all duration-300 hover:scale-105 hover:bg-[#0f2d55] hover:text-white sm:w-auto">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8ef] to-white px-6 py-28">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-[#1c918a]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-[#0f2d55]/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(28,145,138,0.03),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="absolute h-px w-20 bg-gradient-to-r from-transparent via-[#0f2d55] to-[#1c918a] opacity-50" />
              <p className="relative px-6 text-base sm:text-lg font-bold uppercase tracking-[0.5em] text-[#1c918a] bg-white/80 backdrop-blur-sm py-2 rounded-full border border-[#1c918a]/20 shadow-sm">
                Powerful Features
              </p>
              <div className="absolute h-px w-20 bg-gradient-to-l from-transparent via-[#1c918a] to-[#0f2d55] opacity-50" />
            </div>
            <h2 className="mt-6 text-4xl font-extrabold text-[#0f2d55] lg:text-5xl leading-tight">
              Everything you need to run your
              <span className="block mt-2 bg-gradient-to-r from-[#1c918a] via-[#0f2d55] to-[#1c918a] bg-clip-text text-transparent">
              jewellery business efficiently.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              From billing to compliance, manage every aspect of your store with intelligent automation and powerful tools designed for modern jewellers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group relative rounded-[32px] border-2 border-transparent bg-gradient-to-br from-white to-[#fff8ef]/50 p-8 shadow-[0_8px_30px_rgba(15,45,85,0.12)] backdrop-blur-sm transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(15,45,85,0.25)] hover:border-[#1c918a]/30 ${
                  visibleFeatures.includes(idx) ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Gradient Border Effect on Hover */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#1c918a]/20 via-[#0f2d55]/10 to-[#1c918a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                
                {/* Icon Container with Enhanced Design */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1c918a]/20 to-[#0f2d55]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-[0_8px_20px_rgba(15,45,85,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_12px_30px_rgba(15,45,85,0.25)]"
                    style={{ backgroundColor: feature.accent }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10">{feature.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0f2d55] mb-3 transition-all duration-300 group-hover:text-[#1c918a] group-hover:translate-x-1">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Animated Bottom Border */}
                <div className="mt-6 relative h-1 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0f2d55] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1c918a] via-[#0f2d55] to-[#1c918a] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[#1c918a] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-[#0f2d55] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Modules Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff8ef] to-white px-6 py-28">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-[#1c918a]/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-[#0f2d55]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center gap-3">
                <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#0f2d55] to-[#1c918a]" />
                <span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1c918a]/10 to-[#0f2d55]/10 border border-[#1c918a]/20 text-sm sm:text-base font-bold uppercase tracking-[0.4em] text-[#1c918a] backdrop-blur-sm shadow-sm">
                  Core Modules
                </span>
                <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-[#1c918a] to-[#0f2d55]" />
              </div>
            </div>
            <h2 className="mt-6 text-4xl font-extrabold text-[#0f2d55] lg:text-5xl leading-tight">
              Comprehensive Modules for
              <span className="block mt-2 bg-gradient-to-r from-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Complete Business Management
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Detailed modules designed specifically for jewellery businesses to streamline every aspect of operations with precision and efficiency.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreModules.map((module, idx) => (
              <div
                key={module.title}
                className="group relative rounded-[36px] border-2 border-[#1c918a]/10 bg-white p-8 shadow-[0_10px_40px_rgba(15,45,85,0.1)] transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_25px_70px_rgba(15,45,85,0.2)] hover:border-[#1c918a]/30 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c918a]/5 via-transparent to-[#0f2d55]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Icon Section - Enhanced Design */}
                <div className="relative mb-6 flex flex-col items-center">
                  {/* Outer Glow Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[#1c918a]/20 to-[#0f2d55]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  
                  {/* Icon Container with Multiple Layers */}
                  <div className="relative z-10">
                    {/* Background Circle */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Main Icon Box */}
                    <div
                      className="relative flex h-20 w-20 items-center justify-center rounded-3xl text-4xl shadow-[0_10px_30px_rgba(15,45,85,0.2)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_15px_40px_rgba(15,45,85,0.3)]"
                      style={{ backgroundColor: module.accent }}
                    >
                      {/* Shine Effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10 drop-shadow-sm">{module.icon}</span>
                    </div>
                    
                    {/* Decorative Rings */}
                    <div className="absolute -inset-2 rounded-3xl border-2 border-[#1c918a]/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center text-xl font-bold text-[#0f2d55] mb-6 transition-all duration-300 group-hover:text-[#1c918a] group-hover:scale-105">
                  {module.title}
                </h3>

                {/* Features List with Enhanced Styling */}
                <ul className="space-y-3 relative z-10">
                  {module.features.map((feature, featureIdx) => (
                    <li 
                      key={featureIdx} 
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
                    >
                      {/* Enhanced Check Icon */}
                      <div className="relative mt-0.5 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-[#1c918a]/20 scale-0 group-hover:scale-150 transition-transform duration-500" />
                        <div className="relative h-5 w-5 rounded-full bg-gradient-to-br from-[#1c918a] to-[#0f2d55] flex items-center justify-center shadow-sm">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="flex-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Accent Line */}
                <div className="mt-6 relative h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1c918a] via-[#0f2d55] to-[#1c918a] w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 h-3 w-3 rounded-full bg-[#1c918a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg" />
                <div className="absolute bottom-4 left-4 h-3 w-3 rounded-full bg-[#0f2d55] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Key Benefits Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8ef] via-white to-[#fff8ef] py-28">
        {/* Geometric Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 border-2 border-[#1c918a] rounded-full" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-[#0f2d55] rounded-full" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <div className="inline-block relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1c918a]/20 to-[#0f2d55]/20 rounded-full blur-xl" />
              <div className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#1c918a]/10 to-[#0f2d55]/10 border-2 border-[#1c918a]/30 backdrop-blur-sm">
                <p className="text-sm sm:text-base font-bold uppercase tracking-[0.5em] text-[#1c918a]">
                  Key Benefits
                </p>
              </div>
            </div>
            <h2 className="mt-6 text-4xl font-extrabold text-[#0f2d55] lg:text-5xl leading-tight">
              Why Choose Our Software
              
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              Powerful advantages that make our software the perfect choice for modern jewellery businesses seeking excellence and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {keyBenefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="group relative rounded-[40px] bg-white border-2 border-[#1c918a]/10 p-8 shadow-[0_8px_30px_rgba(15,45,85,0.12)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(15,45,85,0.25)] hover:border-[#1c918a]/40 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c918a]/5 via-transparent to-[#0f2d55]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Left Border Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1c918a] via-[#0f2d55] to-[#1c918a] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-l-[40px]" />
                
                <div className="relative flex items-start gap-6">
                  {/* Enhanced Icon Container */}
                  <div className="relative flex-shrink-0">
                    {/* Outer Glow Ring */}
                    <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#1c918a]/30 to-[#0f2d55]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Icon Background with Pattern */}
                    <div className="relative">
                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Main Icon Box */}
                      <div
                        className="relative flex h-20 w-20 items-center justify-center rounded-3xl text-4xl shadow-[0_8px_25px_rgba(15,45,85,0.2)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_15px_40px_rgba(15,45,85,0.35)]"
                        style={{ backgroundColor: benefit.accent }}
                      >
                        {/* Inner Shine */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 drop-shadow-md filter">{benefit.icon}</span>
                      </div>
                      
                      {/* Decorative Corner Elements */}
                      <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#1c918a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg" />
                      <div className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full bg-[#0f2d55] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-2xl font-bold text-[#0f2d55] mb-3 transition-all duration-300 group-hover:text-[#1c918a] group-hover:translate-x-1">
                      {benefit.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                    
                    {/* Animated Underline */}
                    <div className="mt-5 relative">
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#1c918a] to-[#0f2d55] w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full" />
                    </div>
                  </div>
                </div>
                
                {/* Top Right Corner Badge */}
                <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-[#1c918a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg" />
                
                {/* Bottom Left Accent */}
                <div className="absolute bottom-6 left-6 h-8 w-8 rounded-full bg-gradient-to-br from-[#1c918a]/20 to-[#0f2d55]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Additional Features
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Add-on Features for Enhanced Functionality
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Extend your software capabilities with powerful add-on modules designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                className="group flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-[#fff8ef] to-white border border-teal-100 hover:border-[#1c918a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 mb-4"
                  style={{ backgroundColor: feature.accent }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reliability Section */}
      <section ref={reliabilityRef} className="bg-gradient-to-b from-white to-[#fff8ef] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Reliability
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
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
                className={`group rounded-[28px] border border-teal-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200 ${
                  visibleReliabilityFeatures.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl font-bold shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: feature.accent }}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </div>
                </div>
                <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#0f2d55] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI WhatsApp Assistant Section */}
      <section ref={whatsappAssistantRef} className="bg-gradient-to-b from-white to-[#fff8ef] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                AI Assistant
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
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
                className={`group rounded-[28px] border border-teal-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200 ${
                  visibleWhatsappFeatures.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: feature.accent }}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#0f2d55] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="mt-16 mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f2d55] to-[#1c918a] p-8 lg:p-12 shadow-[0_20px_60px_rgba(15,45,85,0.3)]">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="relative text-center">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/20 backdrop-blur-sm px-6 py-3 mb-6 border border-white/30">
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
      <section ref={ownerFeaturesRef} className="bg-gradient-to-b from-white to-[#fff8ef] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Special Features
              </span>
              <span className="h-px w-12 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Special Features for Business Owners
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-slate-600">
              Stay in control with real-time alerts and comprehensive analytics designed exclusively for business owners.
            </p>
          </div>

          {/* Owner Alerts Section */}
          <div className="mt-20">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 shadow-md border border-teal-100">
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
                  className={`group rounded-[28px] border border-teal-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200 ${
                    visibleOwnerAlerts.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: alert.accent }}
                    >
                      {alert.icon}
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                    {alert.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{alert.description}</p>
                  <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#0f2d55] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Overview Section */}
          <div className="mt-24">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur-sm px-6 py-3 shadow-md border border-teal-100">
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
                  className={`group rounded-[28px] border border-teal-100 bg-white/90 p-6 shadow-[0_15px_35px_rgba(15,45,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(15,45,85,0.15)] hover:border-teal-200 ${
                    visibleAnalytics.includes(idx) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: item.accent }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-[#1c918a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  <div className="mt-4 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#0f2d55] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>
              ))}
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
                className="overflow-hidden rounded-xl bg-[#f5f0e8] transition-all duration-300 hover:shadow-md"
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
      <section className="bg-[#fff8ef] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0f2d55] lg:text-4xl">
            Start your digital transformation today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Join thousands of jewellers who have modernized their operations with Unicorn Jewellery Software.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-xl bg-gradient-to-r from-[#1c918a] to-[#0f2d55] px-10 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto">
              Start Free Trial
            </button>
            <a
              href="https://wa.me/919420844725?text=Hello%2C%20I%20am%20interested%20in%20Unicorn%20Jewellery%20Software.%20Please%20provide%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border-2 border-[#0f2d55] px-10 py-4 font-semibold text-[#0f2d55] transition-all duration-300 hover:bg-[#0f2d55] hover:text-white sm:w-auto text-center"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default JewellerySoftware
