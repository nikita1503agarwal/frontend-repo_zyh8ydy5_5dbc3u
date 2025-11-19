import { Sparkles, Palette, Stars, BookOpen, Wand2, Laugh } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Imagination to page',
    desc: 'Type an idea. Our AI expands it into a charming story outline tailored for kids.'
  },
  {
    icon: Palette,
    title: 'Adorable illustrations',
    desc: 'Choose an art style and let the robot co-creator draw delightful scenes.'
  },
  {
    icon: BookOpen,
    title: 'Full book layout',
    desc: 'Covers, chapters, and page designs generated and ready to print or share.'
  },
  {
    icon: Wand2,
    title: 'Personalized heroes',
    desc: 'Add your child’s name, favorite animal, or hobbies to make it truly theirs.'
  },
  {
    icon: Stars,
    title: 'Kid-safe content',
    desc: 'Wholesome themes, gentle language, and positive messages by default.'
  },
  {
    icon: Laugh,
    title: 'Read-aloud mode',
    desc: 'Narration and phonics-friendly text to support early readers.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0B0E14] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for wonder</h2>
          <p className="mt-3 text-white/70">Friendly tech that helps children fall in love with reading.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/7 transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
