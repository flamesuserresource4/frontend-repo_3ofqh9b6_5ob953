import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FooterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitted(true)
  }

  return (
    <section id="founder" className="relative pt-20 pb-24">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute bottom-0 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[#39ff14]/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl border border-black/10 bg-white/70 p-10 shadow-sm backdrop-blur">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>Word from the founder</p>
            <h3 className="mt-2 text-3xl text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>
              “Premium isn’t about flashy. It’s about precision. Every pixel, every motion—purposeful.”
            </h3>
            <p className="mt-4 text-sm text-gray-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>— Alex V., Founder at Volt Studio</p>
          </div>

          <div className="mt-10 border-t border-black/10 pt-10">
            <h4 id="book" className="text-2xl text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>Join the premium waitlist</h4>
            <p className="mt-2 text-gray-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>
              Be first in line for openings. We take on a limited number of projects each quarter.
            </p>
            <form onSubmit={onSubmit} className="mt-6 mx-auto max-w-md flex items-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#39ff14] focus:outline-none focus:ring-2 focus:ring-[#39ff14]/30"
                style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="rounded-xl bg-[#39ff14] px-5 py-3 font-medium text-black shadow-[0_10px_30px_-10px_rgba(57,255,20,0.8)]"
                style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}
              >
                Join
              </motion.button>
            </form>
            {submitted && (
              <p className="mt-4 text-sm text-emerald-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>
                You’re on the list. We’ll reach out with next steps.
              </p>
            )}

            <div className="mt-12 rounded-2xl border border-black/10 bg-gradient-to-br from-gray-50 to-white p-6 text-left">
              <h5 className="text-xl text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>End statement</h5>
              <p className="mt-2 text-gray-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>
                If you’re serious about a website that feels premium and performs, let’s build something remarkable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
