import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative bg-[#0B0E14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,153,0,0.15)_0%,_transparent_60%)] blur-2xl" />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to make a book together?</h3>
              <p className="mt-2 text-white/70">Try it free. Generate a story outline and a first illustrated page in under a minute.</p>
            </div>

            <button className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-medium shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 transition">
              Start for free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
