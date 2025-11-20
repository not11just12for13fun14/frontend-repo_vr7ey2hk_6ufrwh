const data = [
  { name: 'Анна, мама Ильи (10 лет)', text: 'Сын с нетерпением ждёт уроков! Уже сделал свою первую игру в Scratch и показал всей семье.' },
  { name: 'Олег, папа Маши (12 лет)', text: 'Появилась системность и интерес к математике. Python подан очень дружелюбно и понятно.' },
  { name: 'Екатерина, мама Саши (14 лет)', text: 'Ребёнок сделал сайт-портфолио и теперь мечтает о стажировке — мотивация зашкаливает!' },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Отзывы</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {data.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6">
              <blockquote className="text-slate-200">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
