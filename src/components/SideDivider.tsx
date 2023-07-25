import classNames from 'classnames'
import { HTMLAttributes } from 'react'

interface SideDividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'right' | 'left'
}

export function SideDivider({
  children,
  orientation = 'left',
  className,
  ...rest
}: SideDividerProps) {
  return (
    <div
      className={classNames(
        className,
        {
          'left-14': orientation === 'left',
          'right-14': orientation === 'right',
        },
        'w-10 fixed bottom-0 flex flex-col items-center gap-6 max-md:hidden after:w-[1px] after:h-24 after:bg-slate-600 dark:after:bg-slate-200',
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
