import AboutSection from '@/components/home/AboutSection'
import HeroSection from '@/components/home/HeroSection'
import ProjetsSection from '@/components/home/ProjetsSection'
import ServicesPreview from '@/components/home/ServicesPreview'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProjetsSection />
      <ServicesPreview />
      <AboutSection />
    </main>
  )
}
