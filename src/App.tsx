import { Header } from './components/Header'

import './styles/main.css'

export function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <div className="flex flex-col justify-center items-center gap-2">
        <span className="dark:text-gray-400">Olá, Eu sou</span>
        <p className="dark:text-white text-2xl">Natasha M Oliveira</p>
        <span className="dark:text-gray-400">Full Stack Developer</span>
        <div className=""></div>
      </div>
    </div>
  )
}
