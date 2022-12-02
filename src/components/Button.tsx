import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  variant?: 'primary' | 'outline'
}

export function Button({
  children,
  asChild = false,
  className,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={classNames(
        className,
        {
          'bg-violet-400 border-violet-400 text-slate-900 hover:bg-violet-300 hover:border-violet-300':
            variant === 'primary',
          'bg-transparent border-violet-400 text-violet-400 hover:bg-violet-400 dark:hover:bg-violet-300 hover:text-white dark:hover:text-slate-900 dark:hover:border-violet-300':
            variant === 'outline',
        },
        'flex items-center gap-2 py-3 px-4 rounded-lg font-bold text-sm transition-colors outline-none border-2',
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}
