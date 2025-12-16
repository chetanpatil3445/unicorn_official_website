import { useState, useEffect, useRef } from 'react'
import Header from './HomePage/Header'
import Footer from './HomePage/Footer'

const features = [
  {
    title: 'Gold rate locking',
    description: 'Customers can lock the current gold price at the time of order, protecting them from future price fluctuations and ensuring price transparency.',
    icon: '🔐',
    accent: '#e5f5f0',
  },
  {
    title: 'Making charges display',
    description: 'Making charges are clearly shown separately for each product, allowing customers to understand the complete cost breakdown before purchase.',
    icon: '🔒',
    accent: '#fce8d5',
  },
  {
    title: 'Certificate / hallmark info',
    description: 'All gold Jewellery includes BIS hallmark and purity certification details, ensuring authenticity, quality, and customer trust.',
    icon: '🛤️',
    accent: '#fdf0f7',
  },
  {
    title: 'Weight & purity visibility',
    description: 'Product pages clearly display net weight, gross weight, and gold purity (such as 22K or 18K) for complete transparency.',
    icon: '📦',
    accent: '#eff3ff',
  },
  {
    title: 'Custom order / enquiry-first checkout',
    description: 'For customized designs or special orders, customers submit an enquiry first instead of direct checkout to discuss requirements in detail.',
    icon: '🔍',
    accent: '#fff9e8',
  },
  {
    title: 'COD restrictions for high value',
    description: 'Cash on Delivery is not available for high-value orders to ensure secure transactions, reduce risks, and maintain safe and reliable order processing.',
    icon: '✨',
    accent: '#fff0ef',
  },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Owner, Golden Treasures',
    location: 'Mumbai',
    content: 'Our online sales increased by 300% within 3 months. The inventory sync feature is a game-changer for managing both our physical and online stores seamlessly.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, Diamond Dreams',
    location: 'Delhi',
    content: 'The virtual try-on feature has significantly reduced return rates. Customers can now visualize jewellery before buying, which builds confidence and trust.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'CEO, Silver Sparkles',
    location: 'Ahmedabad',
    content: 'Setting up our store was incredibly easy. The payment gateway integration works flawlessly, and customer support is always responsive when we need help.',
    rating: 5,
  },
]

const stats = [
  {
    number: '500+',
    label: 'Active Stores',
    description: 'Jewellery businesses powered by our platform',
    icon: '🏪',
  },
  {
    number: '₹50Cr+',
    label: 'Monthly GMV',
    description: 'Total sales processed through our platform',
    icon: '💰',
  },
  {
    number: '98%',
    label: 'Uptime',
    description: 'Reliable platform availability guarantee',
    icon: '⚡',
  },
  {
    number: '24/7',
    label: 'Support',
    description: 'Round-the-clock customer assistance',
    icon: '🎧',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Sign Up & Setup',
    description: 'Create your account in minutes. Our onboarding wizard guides you through the initial setup process.',
    icon: '📝',
  },
  {
    step: '02',
    title: 'Upload Catalog',
    description: 'Import your jewellery catalog with images, descriptions, and pricing. Bulk upload supported.',
    icon: '📸',
  },
  {
    step: '03',
    title: 'Customize Store',
    description: 'Choose from beautiful themes and customize colors, fonts, and layout to match your brand.',
    icon: '🎨',
  },
  {
    step: '04',
    title: 'Go Live',
    description: 'Launch your store and start accepting orders. Connect payment gateways and shipping partners.',
    icon: '🚀',
  },
]

const integrations = [
  { name: 'Razorpay', icon: '💳', color: '#3395FF' },
  { name: 'PayU', icon: '💵', color: '#00A8E8' },
  { name: 'CCAvenue', icon: '🏦', color: '#FF6B35' },
  { name: 'UPI', icon: '📱', color: '#4ECDC4' },
  { name: 'FedEx', icon: '📦', color: '#FF6B6B' },
  { name: 'BlueDart', icon: '🚚', color: '#4A90E2' },
  { name: 'Shiprocket', icon: '✈️', color: '#FFA07A' },
  { name: 'WhatsApp', icon: '💬', color: '#25D366' },
]

const benefits = [
  {
    title: 'Increase Sales by 300%',
    description: 'Our platform helps jewellers expand their reach and convert more visitors into customers with optimized storefronts and seamless checkout.',
    icon: '📈',
    imageSide: 'left',
  },
  {
    title: 'Save 20+ Hours Weekly',
    description: 'Automate inventory management, order processing, and customer communications. Focus on growing your business instead of manual tasks.',
    icon: '⏰',
    imageSide: 'right',
  },
  {
    title: 'Reach Global Customers',
    description: 'Sell to customers across India and internationally. Multi-currency support and international shipping integrations included.',
    icon: '🌍',
    imageSide: 'left',
  },
]

const supportChannels = [
  {
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: '💬',
    availability: '24/7 Available',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Email Support',
    description: 'Send us detailed queries and get responses',
    icon: '📧',
    availability: 'Response within 2 hours',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Phone Support',
    description: 'Talk directly with our experts',
    icon: '📞',
    availability: 'Mon-Sat, 9 AM - 6 PM',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Video Tutorials',
    description: 'Learn at your own pace with guides',
    icon: '🎥',
    availability: 'Always Available',
    color: 'from-orange-500 to-orange-600',
  },
]

const faqItems = [
  {
    question: 'Can I use my existing domain?',
    answer: 'Yes, you can connect your existing domain or we can help you set up a new one. Custom domains help build brand trust.',
  },
  {
    question: 'How is inventory managed?',
    answer: 'Real-time sync between your physical store and online catalog. Sold items are automatically marked unavailable across all channels.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'We support all major payment gateways including Razorpay, PayU, CCAvenue, UPI, credit/debit cards, and EMI options.',
  },
  {
    question: 'How do returns work?',
    answer: 'Configure your return policy, automate refund processing, and track return shipments all from one dashboard.',
  },
]

const ECommerce = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const [visibleFeatures, setVisibleFeatures] = useState([])
  const [openFaq, setOpenFaq] = useState(null)
  const featuresRef = useRef(null)

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff3e6]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff3e6]/80 via-transparent to-[#d8f5f1]/60" />
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-[#1c918a]/15 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p
            className={`inline-flex items-center gap-3 rounded-full border border-[#1c918a]/40 bg-white/80 px-6 py-2.5 text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.45em] text-[#1c918a] shadow-[0_12px_32px_rgba(15,45,85,0.16)] transition-all duration-700 ${
              isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#1c918a] animate-ping" />
            <span className="tracking-[0.4em]">Digital Commerce Platform</span>
          </p>

          <h1 className={`mt-12 text-4xl font-bold leading-tight text-[#0f2d55] transition-all duration-700 delay-150 lg:text-6xl ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            Launch Your Jewellery
            <span className="block bg-gradient-to-r from-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
              E-commerce Store
            </span>
          </h1>

          <p className={`mx-auto mt-6 max-w-2xl text-lg text-slate-600 transition-all duration-700 delay-300 ${isHeroVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
            Create a stunning online storefront integrated with your inventory, catalog, and customer engagement tools. Sell globally while managing everything from one dashboard.
          </p>

          <div className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-500 ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button className="w-full rounded-xl bg-gradient-to-r from-[#0f2d55] to-[#1c918a] px-8 py-4 font-semibold text-white shadow-[0px_10px_24px_rgba(15,45,85,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0px_14px_32px_rgba(15,45,85,0.6)] sm:w-auto">
              Launch Your Store
            </button>
            <button className="w-full rounded-xl border-2 border-[#0f2d55] bg-white px-8 py-4 font-semibold text-[#0f2d55] transition-all duration-300 hover:scale-105 hover:bg-[#0f2d55] hover:text-white sm:w-auto">
              See Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="bg-white px-6 py-24">
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
              Everything you need to sell online
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Launch a modern storefront with all the tools to attract, convert, and retain customers.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg ${
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
                <h3 className="mt-4 text-xl font-semibold text-[#0f2d55] transition-colors duration-300 group-hover:text-blue-600">
                  {feature.title}
                </h3>
                <p className="mt-2 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-white to-[#f5f0e8] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mt-3 inline-flex items-center gap-4 text-base sm:text-lg font-semibold uppercase tracking-[0.7em] text-[#1c918a] mb-6">
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#0f2d55] to-[#1c918a]" />
              <span className="bg-gradient-to-r from-[#0f2d55] via-[#1c918a] to-[#0f2d55] bg-clip-text text-transparent">
                Success Stories
              </span>
              <span className="h-px w-10 rounded-full bg-gradient-to-r from-[#1c918a] to-[#0f2d55]" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#0f2d55] lg:text-4xl">
              Loved by jewellers across India
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              See how our platform is helping jewellers grow their business and reach more customers.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-semibold text-[#0f2d55]">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 mt-1">{testimonial.role}</p>
                  <p className="text-xs text-slate-400 mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2d55] via-[#1c918a] to-[#0f2d55] py-24">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-0 left-0 h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-4">
              Trusted by Leading Jewellers
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join the growing community of jewellers transforming their business with our platform
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-semibold text-sm md:text-base mb-1">{stat.label}</div>
                <div className="text-white/70 text-xs md:text-sm">{stat.description}</div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#1c918a]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0f2d55]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#1c918a]/10 rounded-full mb-4">
              <span className="text-[#1c918a] font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            </div>
            <h2 className="text-3xl font-bold text-[#0f2d55] lg:text-4xl mb-4">
              Get Started in 4 Easy Steps
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Launch your online jewellery store quickly with our streamlined setup process
            </p>
          </div>

          <div className="relative">
            {/* Connection Line for Desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1c918a] via-[#0f2d55] to-[#1c918a] opacity-30"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {howItWorks.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border-2 border-slate-100 hover:border-[#1c918a] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#0f2d55] to-[#1c918a] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="mt-8 mb-6 flex justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#1c918a]/20 to-[#0f2d55]/20 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-[#0f2d55] mb-3 text-center group-hover:text-[#1c918a] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-center leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1c918a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  {/* Arrow for Desktop (except last item) */}
                  {idx < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-3 text-[#1c918a] text-2xl z-10">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights Section */}
      <section className="relative bg-gradient-to-br from-[#fff8ef] via-white to-[#e5f5f0] py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-80 h-80 bg-[#1c918a]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0f2d55]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#1c918a]"></div>
              <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#1c918a] font-semibold text-sm uppercase tracking-wider shadow-sm">
                Platform Highlights
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#1c918a]"></div>
            </div>
            <h2 className="text-3xl font-bold text-[#0f2d55] lg:text-4xl mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Powerful tools and features designed specifically for jewellery businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-[#1c918a] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1c918a] to-[#0f2d55] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0f2d55] mb-3 group-hover:text-[#1c918a] transition-colors">
                    Smart Analytics Dashboard
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Track sales, customer behavior, inventory levels, and revenue insights in real-time. Make data-driven decisions to grow your business.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      Sales performance metrics
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      Customer engagement analytics
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      Inventory forecasting
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-[#1c918a] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0f2d55] to-[#1c918a] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🔐
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0f2d55] mb-3 group-hover:text-[#1c918a] transition-colors">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Your data and customer information are protected with bank-level encryption, SSL certificates, and regular security audits.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      PCI-DSS compliant
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      Regular backups & recovery
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      GDPR & data privacy
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-[#1c918a] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1c918a] to-[#0f2d55] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0f2d55] mb-3 group-hover:text-[#1c918a] transition-colors">
                    Mobile-First Experience
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Manage your store on-the-go with our responsive admin panel and native mobile apps. Your customers get a seamless mobile shopping experience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      iOS & Android apps
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      Responsive storefront
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      Push notifications
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-[#1c918a] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#0f2d55] to-[#1c918a] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#0f2d55] mb-3 group-hover:text-[#1c918a] transition-colors">
                    Lightning Fast Performance
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Built on modern infrastructure with CDN, caching, and optimized code. Your store loads instantly, keeping customers engaged.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      Global CDN network
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      Auto-scaling servers
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="text-[#1c918a]">▸</span>
                      99.9% uptime guarantee
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2d55] lg:text-4xl mb-4">
              Seamless Integrations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Connect with your favorite payment gateways, shipping partners, and communication tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-slate-100 hover:border-[#1c918a] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {integration.icon}
                  </div>
                  <h3 className="font-semibold text-[#0f2d55] text-sm md:text-base">
                    {integration.name}
                  </h3>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1c918a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-[#f5f0e8] to-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2d55] lg:text-4xl mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover the benefits that help jewellers succeed online
            </p>
          </div>

          <div className="space-y-20">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  benefit.imageSide === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1c918a]/20 to-[#0f2d55]/20 rounded-3xl mb-6">
                    <span className="text-5xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#0f2d55] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-[#1c918a]/10 via-[#0f2d55]/10 to-[#1c918a]/10 rounded-3xl p-12 aspect-square flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1c918a]/20 to-transparent rounded-3xl blur-2xl"></div>
                    <div className="relative text-9xl opacity-20">{benefit.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative bg-[#0f2d55] py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#1c918a] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#1c918a] rounded-full blur-3xl"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white lg:text-4xl mb-4">
              We're Here to Help
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Multiple ways to get support whenever you need assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{channel.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-white/80 text-sm mb-3">{channel.description}</p>
                <p className="text-white/60 text-xs">{channel.availability}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Metrics Section */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c918a]/5 via-transparent to-[#0f2d55]/5"></div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1c918a]/10 to-[#0f2d55]/10 rounded-full border border-[#1c918a]/20">
                <span className="w-2 h-2 bg-[#1c918a] rounded-full animate-pulse"></span>
                <span className="text-[#1c918a] font-bold text-sm uppercase tracking-wider">Real Results</span>
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#0f2d55] lg:text-5xl mb-4">
              Transform Your Business
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              See how jewellers are achieving remarkable growth with our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1c918a] to-[#0f2d55] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-slate-100 group-hover:border-[#1c918a] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1c918a]/20 to-[#1c918a]/5 rounded-2xl flex items-center justify-center text-3xl">
                    📊
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-[#0f2d55] mb-1">250%</div>
                    <div className="text-sm text-slate-500">Average Growth</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f2d55] mb-2">Revenue Increase</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Stores see an average revenue increase of 250% within the first year of using our platform.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0f2d55] to-[#1c918a] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-slate-100 group-hover:border-[#1c918a] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0f2d55]/20 to-[#0f2d55]/5 rounded-2xl flex items-center justify-center text-3xl">
                    ⚡
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-[#0f2d55] mb-1">15hrs</div>
                    <div className="text-sm text-slate-500">Time Saved</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f2d55] mb-2">Weekly Time Saved</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Automate repetitive tasks and save 15+ hours per week to focus on growing your business.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1c918a] to-[#0f2d55] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-slate-100 group-hover:border-[#1c918a] transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1c918a]/20 to-[#1c918a]/5 rounded-2xl flex items-center justify-center text-3xl">
                    🌟
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-[#0f2d55] mb-1">4.8/5</div>
                    <div className="text-sm text-slate-500">Satisfaction</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0f2d55] mb-2">Customer Rating</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Rated 4.8 out of 5 by jewellers who trust our platform for their online business.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#1c918a]/10 via-[#0f2d55]/10 to-[#1c918a]/10 rounded-3xl p-8 md:p-12 border border-[#1c918a]/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0f2d55] mb-4">
                  Join 500+ Successful Jewellers
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  From small boutiques to large chains, jewellers across India are growing their business with our comprehensive e-commerce platform. Start your journey today.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-[#0f2d55]">No Setup Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-[#0f2d55]">14-Day Free Trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    <span className="text-sm font-semibold text-[#0f2d55]">Cancel Anytime</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-200">
                  <div className="text-3xl font-bold text-[#1c918a] mb-2">500+</div>
                  <div className="text-sm text-slate-600">Active Stores</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-200">
                  <div className="text-3xl font-bold text-[#1c918a] mb-2">₹50Cr+</div>
                  <div className="text-sm text-slate-600">Monthly GMV</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-200">
                  <div className="text-3xl font-bold text-[#1c918a] mb-2">98%</div>
                  <div className="text-sm text-slate-600">Uptime</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-200">
                  <div className="text-3xl font-bold text-[#1c918a] mb-2">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f5f0e8] py-24">
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
      <section className="bg-gradient-to-br from-[#0f2d55] via-[#1c918a] to-[#0f2d55] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Ready to grow your business online?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Join thousands of jewellers who are expanding their reach with our e-commerce platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-xl bg-white px-10 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 sm:w-auto">
              Start Free Trial
            </button>
            <button className="w-full rounded-xl border-2 border-white px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-600 sm:w-auto">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ECommerce
