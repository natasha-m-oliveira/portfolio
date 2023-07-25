import { Slot } from '@radix-ui/react-slot'

import classNames from 'classnames'
import { HTMLAttributes } from 'react'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  asChild?: boolean
}

export function Text({
  size = 'md',
  children,
  asChild = false,
  className,
  ...rest
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={classNames(
        className,
        'flex items-center gap-2 text-slate-600 dark:text-slate-400 font-sans text-justify',
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        },
      )}
      {...rest}
    >
      {children}
    </Comp>
  )
}
