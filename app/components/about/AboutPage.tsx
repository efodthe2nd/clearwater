import Navbar from '../layout/Navbar'
import AboutHero from '../about/AboutHero'
import OurStory from '../about/OurStory'
import OurMission from '../about/OurMission'
import OurFounders from '../about/OurFounders'
import AboutCTA from '../about/AboutCTA'
import AboutFooter from '../about/AboutFooter'

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurFounders />
      <AboutCTA />
      <AboutFooter />
    </main>
  )
}
