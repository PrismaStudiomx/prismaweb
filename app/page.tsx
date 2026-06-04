import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Demos } from "@/components/demos"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Process />
      <Demos />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
