import { Inter } from "next/font/google"
import Hero from "@/components/hero"
import Problem from "@/components/problem"
import Solution from "@/components/solution"
import Traction from "@/components/traction"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Traction />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
