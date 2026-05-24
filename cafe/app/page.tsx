import { Header } from "@/components/header"
import { HeroDrink } from "@/components/hero-drink"
import { MenuSection } from "@/components/menu-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroDrink />
      <MenuSection />
      <WorkshopsSection />
      <Footer />
    </main>
  )
}
