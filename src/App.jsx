import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      {/* Top navigation */}
      <Navbar />

      {/* Hero with Spline asset */}
      <Hero />

      {/* Feature highlights */}
      <Features />

      {/* Call to action */}
      <CTA />

      {/* Footer */}
      <footer className="bg-[#0B0E14] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} RoboTales. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
