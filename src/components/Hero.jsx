import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-1/2 left-1/2 h-[80rem] w-[80rem] -translate-x-1/2 rounded-full bg-[#39ff14]/10 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-80 w-80 rotate-12 bg-gradient-to-tr from-[#39ff14]/30 to-emerald-300/20 blur-2xl rounded-full" />
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 backdrop-blur">
              Premium motion-first websites
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#39ff14] shadow-[0_0_15px_#39ff14]" />
            </span>
            <h1
              className="mt-6 text-5xl md:text-6xl leading-[1.05] tracking-tight text-gray-900"
              style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}
            >
              We craft killer web experiences with micro‑animations that convert
            </h1>
            <p
              className="mt-6 text-lg text-gray-600 max-w-xl"
              style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}
            >
              Clean, modern and lightning‑fast websites engineered to feel alive. No jargon—just premium design, motion and results.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <motion.a
                href="#book"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full bg-[#39ff14] px-6 py-3 font-medium text-black shadow-[0_10px_30px_-10px_rgba(57,255,20,0.8)]"
                style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}
              >
                Book a Sales Call
              </motion.a>
              <a href="#work" className="text-gray-900 underline-offset-4 hover:underline">See our work</a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[
                { label: 'Avg. load time', value: '0.9s' },
                { label: 'Conversion lift', value: '+38%' },
                { label: 'Projects shipped', value: '120+' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/10 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <dt className="text-xs text-gray-500" style={{ fontFamily: 'Neurial Grotesk, Manrope, Inter, sans-serif' }}>{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-gray-900" style={{ fontFamily: 'Qurova, Manrope, Inter, sans-serif' }}>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-gray-50 to-white p-2 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur p-8 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                  className="grid grid-cols-3 gap-4"
                >
                  {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -6 }}
                      className="h-20 w-20 rounded-xl bg-gradient-to-br from-gray-100 to-white border border-black/5 shadow-sm flex items-center justify-center"
                    >
                      <span className="text-xs text-gray-600">Motion</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#39ff14]/60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
