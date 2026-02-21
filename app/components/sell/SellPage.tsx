import Navbar from '../layout/Navbar'
import SellHero from '../sell/SellHero'
import HowItWorks from '../sell/HowItWorks'
import WhyUs from '../sell/WhyUs'
import PaymentProcess from '../sell/PaymentProcess'
import SellCTA from '../sell/SellCTA'
import SellFooter from '../sell/SellFooter'

export default function SellPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <SellHero />
      <HowItWorks />
      <WhyUs />
      <PaymentProcess />
      <SellCTA />
      <SellFooter />
    </main>
  )
}
