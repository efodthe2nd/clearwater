import Navbar from '../layout/Navbar'
import ContactHero from '../contact/ContactHero'
import ContactForm from '../contact/ContactForm'
import ContactFooter from '../contact/ContactFooter'
import Footer from '../home/Footer'

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <ContactHero />
      <ContactForm />
      {/* <ContactFooter /> */}
      <Footer />
    </main>
  )
}
