import Hero from './Hero'
import HeroDemoBanner from './HeroDemobanner'
import HeroExperienceCarousel from './HeroExperienceCarousel'
import Product from './Product'
import WhyUs from './WhyUs'
import ElevateBusiness from './ElevateBusiness'
import ModuleShowcase from './ModuleShowcase'
import MobileApp from './MobileApp'
import Security from './Security'
import SocialProof from './SocialProof'
import ComparisonTable from './ComparisonTable'
import CTA from './CTA'
import FAQ from './FAQ'
import Footer from './Footer'
import Header from './Header'
import Difference from './Difference'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff8ef] to-[#fff8ef]">
     <Header />
      <Hero />
      <HeroDemoBanner />
      <ComparisonTable />
      <Difference />
      <HeroExperienceCarousel />
      <Product />
      <WhyUs />
      <ElevateBusiness />
      <ModuleShowcase />
      <MobileApp />
      <Security />
      <SocialProof />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
