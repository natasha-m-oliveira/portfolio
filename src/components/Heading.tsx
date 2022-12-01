import { Slot } from '@radix-ui/react-slot'

import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
  fieldset?: boolean
}

export function Heading({
  size = 'md',
  children,
  asChild = false,
  fieldset = false,
  className,
  ...rest
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={classNames(
        className,
        'text-slate-700 dark:text-slate-200 font-bold font-sans flex items-center',
        {
          'after:w-48 after:h-[1px] after:bg-slate-400 dark:after:bg-slate-500 after:ml-5':
            fieldset,
        },
        {
          'text-lg': size === 'sm',
          'text-3xl max-sm:text-2xl': size === 'md',
          'text-5xl max-sm:text-4xl': size === 'lg',
        },
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}
