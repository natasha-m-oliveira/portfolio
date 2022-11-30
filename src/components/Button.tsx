import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'outline'
}

export function Button({
  children,
  className,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        className,
        {
          'bg-violet-400 border-violet-400 text-slate-900 hover:bg-violet-300 hover:border-violet-300':
            variant === 'primary',
          'bg-transparent border-violet-400 text-violet-400 hover:bg-violet-300 hover:text-slate-200 dark:hover:text-slate-900 hover:border-violet-300':
            variant === 'outline',
        },
        'flex items-center gap-2 py-3 px-4 rounded-lg font-bold text-sm transition-colors outline-none border-2',
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
