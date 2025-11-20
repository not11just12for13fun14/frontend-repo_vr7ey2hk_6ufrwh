import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Star, Users, Sparkles, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const Block = ({ color, children, className = '' }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 120, damping: 12 }}
    className={`rounded-2xl px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.25)] border ${className}`}
    style={{
      background: color,
      borderColor: 'rgba(255,255,255,0.08)'
    }}
  >
    <div className="flex items-center gap-2 text-slate-900 font-semibold drop-shadow-[0_1px_0_rgba(255,255,255,0.5)]">
      {children}
    </div>
  </motion.div>
)

function CatSVG({ className = '' }){
  return (
    <motion.svg
      viewBox="0 0 200 160"
      className={className}
      initial={{ rotate: -2 }}
      animate={{ rotate: [ -2, 2, -2 ] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <defs>
        <linearGradient id="fur" x1="0" x2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <g>
        <motion.path
          d="M40 110c0-30 25-50 60-50s60 20 60 50-25 40-60 40-60-10-60-40z"
          fill="url(#fur)"
          stroke="#111827"
          strokeWidth="3"
        />
        <path d="M55 65l18 10V60z" fill="#f59e0b" stroke="#111827" strokeWidth="3" />
        <path d="M146 65l-18 10V60z" fill="#f59e0b" stroke="#111827" strokeWidth="3" />
        <circle cx="90" cy="95" r="7" fill="#111827" />
        <circle cx="130" cy="95" r="7" fill="#111827" />
        <path d="M95 120c10 8 20 8 30 0" stroke="#111827" strokeWidth="4" fill="none" strokeLinecap="round" />
        <motion.path
          d="M160 130c15 5 25 10 30 15"
          stroke="#f59e0b"
          strokeWidth="6"
          strokeLinecap="round"
          animate={{ rotate: [0, 10, 0], transformOrigin: '160px 130px' }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </g>
    </motion.svg>
  )
}

export default function CourseScratch(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(900px_300px_at_15%_-5%,rgba(250,204,21,0.18),transparent),radial-gradient(700px_260px_at_85%_10%,rgba(245,158,11,0.16),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Назад
        </Link>

        <section className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 text-amber-200 px-3 py-1 text-xs border border-amber-300/20">
              <Sparkles className="w-3.5 h-3.5" /> Визуальный кодинг для 7–10 лет
            </div>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
              Scratch: первые проекты
            </h1>
            <p className="mt-4 text-slate-300 text-lg">
              Погружаемся в мир блоков и анимаций. Дети создают мультфильмы и игры, изучая основы логики, событий и циклов.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2">
                <Clock className="w-4 h-4" /> 24 занятия по 60 мин
              </div>
              <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2">
                <Users className="w-4 h-4" /> Группа 6–10 детей
              </div>
              <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-xl px-3 py-2">
                <Star className="w-4 h-4 text-amber-300" /> Уровень: начальный
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="#program" className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 text-slate-900 font-semibold hover:opacity-90">
                Смотреть программу
              </Link>
              <a href="#signup" className="px-5 py-3 rounded-2xl border border-amber-300/40 text-amber-200 hover:bg-amber-400/10">
                Записаться на пробный урок
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6 overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 opacity-20 blur-2xl" />

              <div className="grid grid-cols-2 gap-4">
                <Block color="#FDE68A" className="text-slate-900">Переместить <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">10 шагов</span></Block>
                <Block color="#FCA5A5" className="text-slate-900">Издать <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">звук</span></Block>
                <Block color="#93C5FD" className="text-slate-900">Повернуть <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">15°</span></Block>
                <Block color="#A7F3D0" className="text-slate-900">Когда <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">клик по флагу</span></Block>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <CatSVG className="w-[320px] h-[260px]" />
              </div>
            </motion.div>
            <motion.div
              className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-gradient-to-br from-amber-300/30 to-orange-400/30 blur-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </section>

        <section id="program" className="mt-14">
          <h2 className="text-2xl font-bold">Программа курса</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              'Знакомство со сценой и спрайтами',
              'Движение, поворот, координаты',
              'События: нажатие клавиш, флаг, сообщения',
              'Циклы и условия в блоках',
              'Анимация персонажей и фоны',
              'Создаём свой первый интерактивный мультик',
              'Коллизии: касания, края экрана',
              'Мини‑игра: «Поймай кота»',
              'Счёт, переменные и таймер',
              'Звук и эффекты',
              'Финальный проект: аркадная игра',
              'Презентация проекта родителям'
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex items-start gap-3">
                <div className="mt-1 w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div>
                  <div className="text-slate-100 font-medium">{i+1}. {item}</div>
                  <div className="text-slate-400 text-sm">Практика на каждом занятии — маленький проект своими руками.</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="signup" className="mt-14">
          <div className="rounded-3xl border border-amber-300/30 bg-gradient-to-r from-amber-300/10 to-orange-400/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-amber-200">Готовы попробовать?</h3>
                <p className="text-slate-300 mt-1">Оставьте заявку — пришлём расписание ближайших пробных занятий.</p>
              </div>
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-300 to-orange-400 text-slate-900 font-semibold hover:opacity-90">
                <Play className="w-4 h-4" /> Записаться на пробный урок
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
