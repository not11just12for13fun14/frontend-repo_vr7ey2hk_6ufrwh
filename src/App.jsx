import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Bundles from './components/Bundles'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400/40 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_20%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(900px_300px_at_80%_10%,rgba(34,211,238,0.2),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Bundles />
        <About />
        <Testimonials />
        <Blog />
      </main>
      <footer className="py-10 border-t border-slate-800/80 mt-10 text-center text-sm text-slate-400">
        © 2025 CodeKids — Мы учим кодить как дышать
      </footer>
    </div>
  )
}

export default App
