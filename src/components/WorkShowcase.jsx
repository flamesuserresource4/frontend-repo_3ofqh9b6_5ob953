import { motion } from 'framer-motion'

const cases = [
  {
    tag: 'E‑commerce',
    title: 'Kinetic storefront that lifted AOV by 24%',
    result: '+24% AOV',
    color: '#d1fae5',
  },
  {
    tag: 'SaaS',
    title: 'Conversion‑focused site with playful micro‑interactions',
    result: '+41% Trials',
    color: '#e0f2fe',
  },
  {
    tag: 'Fintech',
    title: 'Trust‑driven experience with buttery transitions',
    result: '+33% Signups',
    color: '#ede9fe',
  },
]

const portfolio = [
  'Aurora',
  'FluxPay',
  'North & Co',
  'Neon Labs',
  'Hollow Studio',
  'Peak Data',
]

export default function WorkShowcase() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>Case Studies</h2>
            <p className="mt-2 max-w-xl text-gray-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>
              Real results from brands that wanted more than a template.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <motion.div key={c.title} whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden border border-black/10 bg-white/70 backdrop-blur shadow-sm">
              <div className="p-6">
                <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700">
                  {c.tag}
                </span>
                <h3 className="mt-4 text-xl text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>
                  {c.result}
                </p>
              </div>
              <div className="h-40 w-full" style={{ backgroundColor: c.color }} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-2xl text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>Portfolio</h3>
            <div className="h-2 w-24 rounded-full bg-[#39ff14] shadow-[0_0_30px_#39ff14]" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((name) => (
              <motion.div key={name} whileHover={{ scale: 1.01 }} className="rounded-xl border border-black/10 bg-white/70 px-5 py-4 backdrop-blur shadow-sm flex items-center justify-between">
                <span className="text-gray-900" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>{name}</span>
                <svg className="h-4 w-4 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
