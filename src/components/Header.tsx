import { House, User, Book, Briefcase, ChatText } from 'phosphor-react'
import { SwitchTheme } from './SwitchTheme'

export function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-3 px-4">
        <span className="text-violet-400 text-2xl">Natasha</span>
        <SwitchTheme />
      </div>
      <nav className="max-w-xs py-3 px-4 absolute bottom-6 left-0 right-0 mx-auto flex justify-around items-center gap-4 rounded-full dark:bg-slate-800 dark:text-white">
        <button className="hover:text-violet-400 transition-colors">
          <House size={24} weight="fill" />
        </button>

        <button className="hover:text-violet-400 transition-colors">
          <User size={24} weight="fill" />
        </button>

        <button className="hover:text-violet-400 transition-colors">
          <Book size={24} weight="fill" />
        </button>

        <button className="hover:text-violet-400 transition-colors">
          <Briefcase size={24} weight="fill" />
        </button>

        <button className="hover:text-violet-400 transition-colors">
          <ChatText size={24} weight="fill" />
        </button>
      </nav>
    </header>
  )
}
