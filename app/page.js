import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import News from '@/components/News'
import Band from '@/components/Band'
import Music from '@/components/Music'
import Social from '@/components/Social'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <News />
      <Band />
      <Music />
      <Social />
      <Footer />
    </main>
  )
}