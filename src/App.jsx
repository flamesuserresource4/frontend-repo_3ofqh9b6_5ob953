import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WorkShowcase from './components/WorkShowcase'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-emerald-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WorkShowcase />
        <FooterCTA />
      </main>
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-gray-500">
          <p style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>© {new Date().getFullYear()} Volt Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
