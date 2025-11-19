import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0E14]">
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-[radial-gradient(circle,_rgba(255,153,0,0.12)_0%,_rgba(255,153,0,0.05)_35%,_transparent_60%)] blur-2xl" />
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-32">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tight text-white"
            >
              Create magical kids books with AI
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-lg sm:text-xl text-white/80 max-w-xl"
            >
              Turn your child’s ideas into personalized stories. Choose a theme, add a character, and let our friendly robot co-author bring it to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <button className="px-5 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-medium shadow-lg shadow-orange-600/30 hover:shadow-orange-600/40 transition">
                Start a story
              </button>
              <button className="px-5 py-3 rounded-xl bg-white/10 text-white/90 hover:bg-white/15 border border-white/10 backdrop-blur-md transition">
                See examples
              </button>
            </motion.div>

            <div className="mt-6 text-sm text-white/60">
              No sign-up required • Generate a full book preview in seconds
            </div>
          </div>
        </div>
      </div>

      {/* Soft bottom fade so content below connects nicely */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B0E14] to-transparent" />
    </section>
  )
}
