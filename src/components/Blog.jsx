const posts = [
  { title: 'Как начать путь в программировании в 7–9 лет', tag: 'Советы', date: '12.10.2025' },
  { title: 'Почему Roblox — отличный старт для логики', tag: 'Игры', date: '02.11.2025' },
  { title: 'Python для подростков: 5 простых проектов', tag: 'Python', date: '18.11.2025' },
]

export default function Blog(){
  return (
    <section id="blog" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Блог</h2>
          <a href="#" className="text-cyan-300 hover:text-cyan-200 text-sm">Все статьи</a>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <article key={p.title} className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6 hover:bg-slate-900 transition">
              <div className="text-xs text-slate-400">{p.date} • {p.tag}</div>
              <h3 className="mt-2 text-white font-semibold">{p.title}</h3>
              <button className="mt-4 text-cyan-300 hover:text-cyan-200 text-sm">Читать</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
