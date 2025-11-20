import { useState } from "react";
import { Menu, X, Rocket, User } from "lucide-react";

const navItems = [
  { label: "Курсы", href: "#courses" },
  { label: "Пакеты", href: "#bundles" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#testimonials" },
  { label: "Блог", href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/70 border border-slate-700/60 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
          <a href="#top" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-cyan-400 to-violet-500 opacity-40 blur-sm group-hover:opacity-60 transition" />
              <div className="relative bg-slate-800 border border-slate-700 rounded-xl p-2">
                <Rocket className="w-6 h-6 text-cyan-300" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-tight">CodeKids</div>
              <div className="text-xs text-cyan-300/80">Код для будущего</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} className="text-slate-200/90 hover:text-white transition text-sm">
                {i.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#login" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-800 transition text-sm">
              <User className="w-4 h-4" /> Личный кабинет
            </a>
            <a href="#courses" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 font-semibold hover:opacity-90 transition text-sm">
              Начать
            </a>
          </div>

          <button aria-label="Меню" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-700 text-slate-200">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur p-3 space-y-1">
            {navItems.map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/80">
                {i.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="#login" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-800 transition text-sm">
                <User className="w-4 h-4" /> Личный кабинет
              </a>
              <a href="#courses" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 font-semibold hover:opacity-90 transition text-sm">
                Начать
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
