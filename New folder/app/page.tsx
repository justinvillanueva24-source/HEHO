import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  )
}
