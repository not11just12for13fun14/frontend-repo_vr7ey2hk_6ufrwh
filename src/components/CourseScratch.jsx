import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Star, Users, Sparkles, Play, Palette, Video, PartyPopper } from 'lucide-react'
import { Link } from 'react-router-dom'

const mascotUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Scratchcat.png'

const scratchColors = [
  '#FDE68A', // amber-200
  '#93C5FD', // blue-300
  '#A7F3D0', // emerald-200
  '#FCA5A5', // rose-300
  '#DDD6FE', // violet-200
  '#FDBA74', // orange-300
  '#67E8F9', // cyan-300
  '#F0ABFC'  // fuchsia-300
]

const blocksData = [
  { color: '#FDE68A', text: <>Переместить <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">10 шагов</span></> },
  { color: '#93C5FD', text: <>Повернуть <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">15°</span></> },
  { color: '#A7F3D0', text: <>Когда <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">клик по флагу</span></> },
  { color: '#FCA5A5', text: <>Издать <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">звук</span></> },
  { color: '#DDD6FE', text: <>Повторить <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">10 раз</span></> },
  { color: '#FDBA74', text: <>Сказать <span className="ml-2 inline-block rounded-md bg-white/70 px-2 py-0.5 text-xs">привет!</span></> },
]

const Block = ({ color, children, delay = 0, className = '', dragConstraints }) => (
  <motion.div
    drag
    dragElastic={0.25}
    dragConstraints={dragConstraints}
    whileTap={{ scale: 0.98 }}
    whileHover={{ scale: 1.04, rotate: 1 }}
    initial={{ y: 24, opacity: 0, rotate: -2 }}
    animate={{ y: 0, opacity: 1, rotate: 0 }}
    transition={{ type: 'spring', stiffness: 120, damping: 12, delay }}
    className={`rounded-2xl px-4 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.25)] border ${className}`}
    style={{ background: color, borderColor: 'rgba(0,0,0,0.08)', cursor: 'grab' }}
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

function ParticleField(){
  const count = 50
  const particles = useMemo(() => Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 4 + 2
    const color = scratchColors[Math.floor(Math.random() * scratchColors.length)]
    const x = Math.random() * 100
    const y = Math.random() * 100
    const dx = (Math.random() - 0.5) * 30
    const dy = (Math.random() - 0.5) * 30
    const delay = Math.random() * 2
    const duration = 4 + Math.random() * 4
    return { id: i, size, color, x, y, dx, dy, delay, duration }
  }), [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <motion.span
          key={p.id}
          className="absolute rounded-full" 
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, background: p.color, filter: 'blur(0.2px)' }}
          animate={{ x: [0, p.dx, 0], y: [0, p.dy, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  )
}

function ConfettiBurst({ burstKey = 0 }){
  const pieces = useMemo(() => {
    const N = 70
    return Array.from({ length: N }, (_, i) => {
      const angle = (i / N) * Math.PI * 2 + Math.random() * 0.4
      const dist = 80 + Math.random() * 140
      const x = Math.cos(angle) * dist
      const y = Math.sin(angle) * dist
      const color = scratchColors[Math.floor(Math.random() * scratchColors.length)]
      const size = 6 + Math.random() * 8
      const rotate = (Math.random() - 0.5) * 120
      const duration = 0.9 + Math.random() * 0.6
      return { id: `${burstKey}-${i}`, x, y, color, size, rotate, duration }
    })
  }, [burstKey])

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {pieces.map(p => (
        <motion.span
          key={p.id}
          className="inline-block rounded-sm shadow"
          style={{ width: p.size, height: p.size, background: p.color }}
          initial={{ opacity: 1, scale: 0, rotate: 0 }}
          animate={{ opacity: [1, 1, 0], scale: [0.6, 1, 1], x: p.x, y: p.y, rotate: p.rotate }}
          transition={{ duration: p.duration, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

const float = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity }
  }
}

export default function CourseScratch(){
  const constraintsRef = useRef(null)
  const [burstKey, setBurstKey] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Multicolor ambient background with subtle motion */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-80 mix-blend-screen pointer-events-none">
          <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -top-10 -left-10 w-[42vw] h-[42vw] bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.16),transparent_60%)]" />
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 16, repeat: Infinity }} className="absolute -right-16 -top-6 w-[38vw] h-[38vw] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
          <motion.div animate={{ x: [0, -8, 0] }} transition={{ duration: 14, repeat: Infinity }} className="absolute bottom-0 left-1/3 w-[36vw] h-[36vw] bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.18),transparent_60%)]" />
        </div>
        <ParticleField />
      </div>

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
              <a href="#program" className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-300 via-rose-300 to-orange-400 text-slate-900 font-semibold hover:opacity-90">
                Смотреть программу
              </a>
              <a href="#video" className="px-5 py-3 rounded-2xl border border-cyan-300/40 text-cyan-200 hover:bg-cyan-400/10 inline-flex items-center gap-2">
                <Video className="w-4 h-4" /> Мини‑видео
              </a>
              <button onClick={() => setBurstKey(k => k + 1)} className="px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-300 to-cyan-300 text-slate-900 font-semibold hover:opacity-90 inline-flex items-center gap-2">
                <PartyPopper className="w-4 h-4" /> Конфетти!
              </button>
              <a href="#signup" className="px-5 py-3 rounded-2xl border border-amber-300/40 text-amber-200 hover:bg-amber-400/10">
                Записаться на пробный урок
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.div
              ref={constraintsRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6 overflow-hidden"
            >
              {/* Ambient blobs */}
              <motion.div {...float} className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 opacity-20 blur-2xl" />
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-10 bottom-10 w-52 h-52 rounded-full bg-gradient-to-tr from-cyan-300/40 to-sky-400/40 blur-2xl" />

              <div className="grid sm:grid-cols-2 gap-4">
                {blocksData.map((b, i) => (
                  <Block key={i} color={b.color} delay={i * 0.08} className="text-slate-900" dragConstraints={constraintsRef}>
                    {b.text}
                  </Block>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="flex items-center justify-center">
                  <CatSVG className="w-[280px] h-[220px]" />
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img src={mascotUrl} alt="Scratch mascot" className="w-full max-w-[260px] mx-auto drop-shadow-[0_12px_30px_rgba(251,191,36,0.45)]" />
                  <motion.span
                    className="absolute -z-10 inset-0 rounded-[28px]"
                    animate={{ boxShadow: [
                      '0 0 0 0 rgba(251,191,36,0.35)',
                      '0 0 0 12px rgba(99,102,241,0.18)',
                      '0 0 0 0 rgba(56,189,248,0.35)'
                    ] }}
                    transition={{ duration: 3.2, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              <ConfettiBurst burstKey={burstKey} />
            </motion.div>

            <motion.div
              className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 rounded-3xl bg-gradient-to-br from-amber-300/30 to-orange-400/30 blur-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </section>

        <section id="video" className="mt-14">
          <div className="flex items-center gap-2 text-cyan-200 text-sm mb-3">
            <Palette className="w-4 h-4" /> Больше цвета и движения
          </div>
          <div className="rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-300/10 via-fuchsia-300/10 to-violet-400/10 p-4 md:p-6">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-cyan-300/20">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/VIpmkeqJhmQ?rel=0&modestbranding=1"
                title="Scratch mini intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="text-slate-300 text-sm mt-3">Короткое видео о том, как в Scratch собирают блоки и создают анимации. Дальше — практика на каждом занятии.</p>
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
              <motion.div
                key={i}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 flex items-start gap-3"
              >
                <motion.div
                  className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 via-cyan-400 to-fuchsia-400"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <div className="text-slate-100 font-medium">{i+1}. {item}</div>
                  <div className="text-slate-400 text-sm">Практика на каждом занятии — маленький проект своими руками.</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="signup" className="mt-14">
          <div className="rounded-3xl border border-amber-300/30 bg-gradient-to-r from-amber-300/10 via-pink-300/10 to-orange-400/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-amber-200">Готовы попробовать?</h3>
                <p className="text-slate-300 mt-1">Оставьте заявку — пришлём расписание ближайших пробных занятий.</p>
              </div>
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-300 via-rose-300 to-orange-400 text-slate-900 font-semibold hover:opacity-90">
                <Play className="w-4 h-4" /> Записаться на пробный урок
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
