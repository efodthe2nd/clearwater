import Navbar from '../layout/Navbar'
import BrandsHero from '../brands/BrandsHero'
import BrandsList from '../brands/BrandsList'
import BrandsFooter from '../brands/BrandsFooter'

export default function BrandsPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <BrandsHero />
      <BrandsList />
      <BrandsFooter />
    </main>
  )
}
