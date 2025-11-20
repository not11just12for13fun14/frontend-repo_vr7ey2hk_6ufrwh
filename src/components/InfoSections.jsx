export default function InfoSections(){
  return (
    <>
      <section id="about" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">О нас</h2>
            <p className="text-slate-300 mt-4">
              Мы — команда преподавателей и разработчиков. Создаем занятия, где ребенок не просто повторяет, а придумывает и делает собственные проекты. Программистом может стать каждый — важно начать правильно и вовремя.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-slate-200">
              <li className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">Живые уроки и записи</li>
              <li className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">Проекты и портфолио</li>
              <li className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">Наставники из индустрии</li>
              <li className="p-3 rounded-xl bg-slate-800/60 border border-slate-700">Безопасная среда</li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80 rounded-3xl border border-slate-700 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_30%_20%,rgba(99,102,241,0.3),transparent)]" />
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop" alt="kids coding" className="w-full h-full object-cover opacity-90" />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Отзывы</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-3xl border border-slate-700 bg-slate-900/60 p-6">
                <div className="text-slate-300">«Ребенок перестал бояться ошибок, делает проекты сам и горит идеями!»</div>
                <div className="mt-4 text-sm text-slate-400">Мария, мама ученика 11 лет</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Блог</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[1,2,3].map((i) => (
              <article key={i} className="group rounded-3xl border border-slate-700 bg-slate-900/60 overflow-hidden">
                <div className="h-36 bg-slate-800" />
                <div className="p-6">
                  <h3 className="text-white font-semibold">Как выбрать первый курс по программированию</h3>
                  <p className="text-slate-300 mt-2">Простые шаги для родителей и детей 7–12 лет</p>
                  <button className="mt-4 text-cyan-300 hover:text-cyan-200 text-sm">Читать</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <div>© {new Date().getFullYear()} CodeKids — Программируй с детства</div>
          <div className="flex gap-6">
            <a href="#courses" className="hover:text-slate-200">Курсы</a>
            <a href="#bundles" className="hover:text-slate-200">Пакеты</a>
            <a href="#about" className="hover:text-slate-200">О нас</a>
            <a href="#login" className="hover:text-slate-200">Личный кабинет</a>
          </div>
        </div>
      </footer>
    </>
  )
}
