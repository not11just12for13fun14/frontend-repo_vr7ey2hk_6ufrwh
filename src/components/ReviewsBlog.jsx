import { motion } from 'framer-motion'

const reviews = [
  { name: 'Анна, мама Вити (10)', text: 'Сын построил свою первую игру в Scratch за месяц! Теперь мечтает о Python.' },
  { name: 'Игорь, папа Кати (13)', text: 'Отличные наставники и понятная подача. Дочь сделала сайт и бота на Python.' },
  { name: 'Марина, мама Лёши (8)', text: 'Ребёнок в восторге — уроки как игра, но при этом реальные знания.' },
]

const posts = [
  { title: 'Как выбрать первый курс программирования для ребёнка', tag: 'Советы' },
  { title: 'Roblox или Minecraft — что лучше для старта?', tag: 'Игры' },
  { title: 'Почему Python остаётся лучшим языком для детей', tag: 'Python' },
]

export default function ReviewsBlog() {
  return (
    <section id="reviews" className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">Отзывы</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {reviews.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl bg-slate-900 border border-white/10 p-6">
              <p className="text-slate-200">“{r.text}”</p>
              <div className="mt-4 text-sm text-slate-400">{r.name}</div>
            </motion.div>
          ))}
        </div>

        <div id="blog" className="mt-2">
          <h3 className="text-2xl font-semibold text-white mb-6">Блог</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="rounded-2xl bg-slate-900 border border-white/10 hover:border-white/20 p-6 cursor-pointer">
                <span className="inline-block text-xs text-cyan-300 bg-cyan-300/10 border border-cyan-300/30 px-2 py-1 rounded-full">{p.tag}</span>
                <h4 className="text-white font-semibold mt-3">{p.title}</h4>
                <p className="text-slate-400 text-sm mt-2">Короткий разбор темы и практические рекомендации родителям и детям.</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
