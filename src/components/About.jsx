export default function About(){
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white">О нас</h2>
          <p className="mt-4 text-slate-300 text-lg">
            Мы создаём среду, где детям интересно развивать логическое мышление и цифровые навыки. Обучение построено на проектах, играх и реальных задачах — от первых анимаций до собственных веб‑сайтов и мини‑игр.
          </p>
          <ul className="mt-6 space-y-3 text-slate-200">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400"/>Пошаговые программы для 7–15 лет</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-violet-400"/>Наставники‑практики и забота о мотивации</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"/>Гибридный формат: онлайн + офлайн материалы</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-700 bg-[radial-gradient(600px_200px_at_80%_10%,rgba(34,211,238,0.25),transparent)]">
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop" alt="Kids coding" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
