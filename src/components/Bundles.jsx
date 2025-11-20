const bundles = [
  { title: 'Старт в кодинг', desc: 'Scratch + Логика + Roblox', badge: 'Для 7–11 лет', price: 'от 2 990 ₽/мес', color: 'from-cyan-400 to-emerald-400' },
  { title: 'Игровая разработка', desc: 'Roblox + JS игры + 3D', badge: 'Для 9–13 лет', price: 'от 3 490 ₽/мес', color: 'from-violet-400 to-fuchsia-400' },
  { title: 'Веб и Python', desc: 'HTML/CSS + JS + Python', badge: 'Для 10–15 лет', price: 'от 3 490 ₽/мес', color: 'from-sky-400 to-indigo-400' },
]

export default function Bundles(){
  return (
    <section id="bundles" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Пакеты</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {bundles.map((b) => (
            <article key={b.title} className="group rounded-3xl border border-slate-700 bg-slate-900/60 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${b.color}`} />
              <div className="p-6">
                <div className="text-xs text-slate-400 mb-2">{b.badge}</div>
                <h3 className="text-white text-xl font-semibold">{b.title}</h3>
                <p className="text-slate-300 mt-2">{b.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-cyan-300 font-semibold">{b.price}</div>
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 text-sm font-semibold hover:opacity-90">Выбрать</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
