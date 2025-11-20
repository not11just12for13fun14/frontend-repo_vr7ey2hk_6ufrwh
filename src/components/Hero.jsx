import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/[0.02] to-transparent" />
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700 text-cyan-300 text-xs">
            Программируй с детства
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Начни свой IT-путь уже сегодня!
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Современная платформа для детей 7–15 лет: от Scratch и Roblox до Python и веб-разработки. Учим кодить как дышать — легко, увлекательно и результативно.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#bundles" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 font-semibold hover:opacity-90 transition">
              Выбрать пакет <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#courses" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-slate-700 text-slate-200 hover:bg-slate-800/70 transition">
              Смотреть курсы
            </a>
          </div>
        </div>
        <div className="relative h-[360px] md:h-[520px] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900">
          <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_300px_at_80%_10%,rgba(34,211,238,0.25),transparent)]" />
        </div>
      </div>
    </section>
  )
}
