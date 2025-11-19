import { Menu, BookOpenText } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-10 w-full">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg shadow-orange-600/30 flex items-center justify-center text-white">
            <BookOpenText className="h-5 w-5" />
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">RoboTales</span>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
          <a href="#how" className="text-sm text-white/80 hover:text-white transition">How it works</a>
          <a href="#cta" className="text-sm text-white/80 hover:text-white transition">Pricing</a>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-sm text-white/90 hover:text-white transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 transition shadow">
            Create a book
          </button>
        </div>

        <button className="sm:hidden p-2 rounded-lg bg-white/10 hover:bg-white/15 text-white">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  );
}
