export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <div>© {new Date().getFullYear()} CodeKids — Код для будущего</div>
        <div className="flex gap-4">
          <a href="#courses" className="hover:text-white transition-colors">Курсы</a>
          <a href="#bundles" className="hover:text-white transition-colors">Пакеты</a>
          <a href="#about" className="hover:text-white transition-colors">О нас</a>
          <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
          <a href="#blog" className="hover:text-white transition-colors">Блог</a>
          <a href="#account" className="hover:text-white transition-colors">Личный кабинет</a>
        </div>
      </div>
    </footer>
  )
}
