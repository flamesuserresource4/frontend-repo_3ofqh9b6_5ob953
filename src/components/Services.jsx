import { motion } from 'framer-motion'

const services = [
  {
    title: 'Brand to Web',
    desc: 'From identity to interactive experience with seamless motion language.',
  },
  {
    title: 'High‑End Websites',
    desc: 'Next‑gen, accessible and blazing fast. Built for conversions and trust.',
  },
  {
    title: 'Micro‑Animations',
    desc: 'Premium interactions and transitions that make products feel alive.',
  },
  {
    title: 'Launch & Care',
    desc: 'Deployment, analytics and ongoing improvements to keep winning.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>Services</h2>
            <p className="mt-2 max-w-xl text-gray-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>
              Clear value. No fluff. Everything you need for a standout digital presence.
            </p>
          </div>
          <div className="hidden md:block h-2 w-32 rounded-full bg-[#39ff14] shadow-[0_0_30px_#39ff14]" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-md bg-[#39ff14]/20 border border-[#39ff14]/40 flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#39ff14] shadow-[0_0_20px_#39ff14]" />
              </div>
              <h3 className="mt-4 text-lg text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm text-gray-900/70 group-hover:text-gray-900">
                Explore
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
