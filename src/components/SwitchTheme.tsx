import { Moon, Sun } from 'phosphor-react'
import { useEffect, useState } from 'react'

export function SwitchTheme() {
  const [theme, setTheme] = useState('')

  function handleChangeTheme() {
    setTheme((state) => {
      if (state === 'dark') {
        return 'light'
      }
      return 'dark'
    })
  }

  useEffect(() => {
    const userTheme = localStorage.getItem('@portfolio:theme-1.0.0')
    if (userTheme) {
      setTheme(userTheme)
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('@portfolio:theme-1.0.0', theme)
  }, [theme])

  return (
    <button
      className="text-slate-600 dark:text-slate-200 hover:!text-violet-400 transition-colors"
      onClick={handleChangeTheme}
    >
      {theme === 'dark' ? (
        <Moon size={24} weight="fill" />
      ) : (
        <Sun size={24} weight="fill" />
      )}
    </button>
  )
}
