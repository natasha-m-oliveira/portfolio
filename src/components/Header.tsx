import { HashLink as Link } from 'react-router-hash-link'
import { SideDivider } from './SideDivider'
import { SocialMedia } from './SocialMedia'
import { SwitchTheme } from './SwitchTheme'
import { Text } from './Text'
import { config } from '../config'
import { tv } from 'tailwind-variants'

const header = tv({
  base: 'w-full px-14 max-md:px-0 transition-[padding]',
})

const email = tv({
  base: 'dark:!text-slate-200 [writing-mode:vertical-rl] hover:-translate-y-1 hover:!text-violet-400 dark:hover:!text-violet-400 transition-all',
})

const menu = tv({
  base: 'max-w-xs z-10 py-3 px-4 fixed bottom-6 left-0 right-0 mx-auto flex justify-around items-center gap-4 rounded-full bg-slate-300 dark:bg-slate-700 dark:text-slate-200',
})

const menuItem = tv({
  base: 'hover:text-violet-500 dark:hover:text-violet-400 transition-colors',
})

export function Header() {
  return (
    <header className={header()}>
      <div className="flex justify-between items-center">
        <Text className="!text-violet-400 !text-2xl">Natasha</Text>
        <SwitchTheme />
      </div>

      <SideDivider>
        <SocialMedia />
      </SideDivider>

      <SideDivider orientation="right">
        <Text asChild className={email()}>
          <a href={config.email}>{config.email}</a>
        </Text>
      </SideDivider>

      <nav className={menu()}>
        {config.navLinks.map(({ id, url, icon, name }) => {
          const Comp = icon
          return (
            <Text className={menuItem()} key={id}>
              <Link to={url} title={name}>
                <Comp size={24} weight="fill" />
              </Link>
            </Text>
          )
        })}
      </nav>
    </header>
  )
}
