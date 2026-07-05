import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Location } from '@/components/location'
import { Navbar } from '@/components/navbar'
import { Services } from '@/components/services'
import { Stats } from '@/components/stats'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Stats />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
