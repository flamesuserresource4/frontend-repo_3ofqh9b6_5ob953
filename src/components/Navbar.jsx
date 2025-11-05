import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-[#39ff14] shadow-[0_0_30px_#39ff14]" />
          <span
            className="text-xl tracking-tight"
            style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}
          >
            Volt Studio
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900 transition">Services</a>
          <a href="#work" className="hover:text-gray-900 transition">Work</a>
          <a href="#founder" className="hover:text-gray-900 transition">Founder</a>
        </div>
        <motion.a
          href="#book"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-black bg-[#39ff14] shadow-[0_10px_30px_-10px_rgba(57,255,20,0.8)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39ff14]"
          style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}
        >
          Book a Call
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </motion.a>
      </div>
    </div>
  )
}
