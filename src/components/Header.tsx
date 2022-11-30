import { HashLink as Link } from 'react-router-hash-link'
import { House, User, Book, Briefcase, ChatText } from 'phosphor-react'
import { SideDivider } from './SideDivider'
import { SocialMedia } from './SocialMedia'
import { SwitchTheme } from './SwitchTheme'
import { Text } from './Text'

const links = [
  {
    id: 'home',
    icon: House,
  },
  {
    id: 'about',
    icon: User,
  },
  {
    id: 'experience',
    icon: Briefcase,
  },
  {
    id: 'work',
    icon: Book,
  },
  {
    id: 'contact',
    icon: ChatText,
  },
]

export function Header() {
  return (
    <header className="w-full px-14 max-md:px-0 transition-[padding]">
      <div className="flex justify-between items-center">
        <span className="text-violet-400 text-2xl">Natasha</span>
        <SwitchTheme />
      </div>

      <SideDivider>
        <SocialMedia />
      </SideDivider>

      <SideDivider orientation="right">
        <Text
          asChild
          className="dark:!text-slate-200 [writing-mode:vertical-rl] hover:-translate-y-1 hover:!text-violet-400 dark:hover:!text-violet-400 transition-all"
        >
          <a href="mailto:me@natashamo@dev">me@natashamo.dev</a>
        </Text>
      </SideDivider>

      <nav className="max-w-xs z-10 py-3 px-4 fixed bottom-6 left-0 right-0 mx-auto flex justify-around items-center gap-4 rounded-full bg-slate-400 dark:bg-slate-800 dark:text-slate-200">
        {links.map(({ id, icon }) => {
          const Component = icon
          return (
            <Text
              className="hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
              key={id}
            >
              <Link to={`#${id}`}>
                <Component size={24} weight="fill" />
              </Link>
            </Text>
          )
        })}
      </nav>
    </header>
  )
}
