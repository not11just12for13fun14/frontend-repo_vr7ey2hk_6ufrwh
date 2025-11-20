import { Link } from 'react-router-dom'
import { Code, Gamepad2, Shapes, Globe, Box, Cpu, Terminal, Binary, CircuitBoard, Atom, Compass, Layers } from 'lucide-react'

const courses = [
  { title: 'Логика и алгоритмы', age: '7–9', level: 'Начальный', icon: Compass, color: 'from-cyan-400 to-emerald-400' },
  { title: 'Scratch: первые проекты', age: '7–10', level: 'Начальный', icon: Shapes, color: 'from-violet-400 to-fuchsia-400', link: '/course/scratch' },
  { title: 'Roblox Studio', age: '9–12', level: 'Начальный', icon: Gamepad2, color: 'from-emerald-400 to-cyan-400' },
  { title: 'Python Junior', age: '10–13', level: 'Средний', icon: PythonIcon, color: 'from-cyan-400 to-violet-400' },
  { title: 'Веб-разработка: HTML & CSS', age: '10–14', level: 'Начальный', icon: Globe, color: 'from-fuchsia-400 to-pink-400' },
  { title: 'JavaScript Старт', age: '11–15', level: 'Средний', icon: Code, color: 'from-amber-400 to-orange-400' },
  { title: 'Алгоритмы и структуры', age: '12–15', level: 'Средний', icon: Layers, color: 'from-sky-400 to-indigo-400' },
  { title: 'Python Проекты', age: '11–15', level: 'Продвинутый', icon: Terminal, color: 'from-emerald-400 to-lime-400' },
  { title: 'Создание игр на JS', age: '11–15', level: 'Средний', icon: Gamepad2, color: 'from-indigo-400 to-violet-400' },
  { title: 'Микроконтроллеры', age: '12–15', level: 'Средний', icon: CircuitBoard, color: 'from-lime-400 to-emerald-400' },
  { title: '3D и анимация', age: '10–14', level: 'Начальный', icon: Box, color: 'from-cyan-400 to-teal-400' },
  { title: 'Основы ИИ', age: '12–15', level: 'Начальный', icon: Atom, color: 'from-purple-400 to-cyan-400' },
]

function PythonIcon(props){
  return (
    <svg viewBox="0 0 256 255" width="20" height="20" {...props}>
      <linearGradient id="py1" x1=".85" x2=".85" y1=".1" y2=".9">
        <stop offset="0%" stopColor="#387EB8"/>
        <stop offset="100%" stopColor="#366994"/>
      </linearGradient>
      <linearGradient id="py2" x1=".85" x2=".85" y1=".1" y2=".9">
        <stop offset="0%" stopColor="#FFE052"/>
        <stop offset="100%" stopColor="#FFC331"/>
      </linearGradient>
      <path fill="url(#py1)" d="M126 0c-63 0-59 27-59 27v28h60v9H45S0 61 0 124s40 62 40 62h24v-33s-1-40 39-40h67s38 1 38-37V37S215 0 126 0zM92 19a10 10 0 110 20 10 10 0 010-20z"/>
      <path fill="url(#py2)" d="M130 255c63 0 59-27 59-27v-28h-60v-9h82s45 3 45-60-40-62-40-62h-24v33s1 40-39 40h-67s-38-1-38 37v27s10 49 82 49zM164 216a10 10 0 110-20 10 10 0 010 20z"/>
    </svg>
  )
}

export default function Courses(){
  return (
    <section id="courses" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Курсы</h2>
            <p className="text-slate-300 mt-2">12 направлений — от визуального кодинга до Python и алгоритмов</p>
          </div>
          <a href="#bundles" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-800/70">Смотреть пакеты</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => (
            <article key={c.title} className="group rounded-3xl border border-slate-700 bg-slate-900/60 p-5 hover:bg-slate-900 transition relative overflow-hidden">
              <div className={`absolute -right-10 -top-10 w-36 h-36 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl group-hover:opacity-30 transition`} />
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700">
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold leading-tight">{c.title}</h3>
                  <div className="text-xs text-slate-400">{c.age} • {c.level}</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-300">
                Практика в каждом занятии, мини‑проекты и игровая подача материала.
              </div>
              <div className="mt-4 flex items-center justify-between">
                {c.link ? (
                  <Link to={c.link} className="text-cyan-300 hover:text-cyan-200 text-sm">Подробнее</Link>
                ) : (
                  <button className="text-cyan-300 hover:text-cyan-200 text-sm">Подробнее</button>
                )}
                <button className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 text-sm font-semibold hover:opacity-90">Записаться</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
