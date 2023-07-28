import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const slideDivider = tv({
  base: 'w-10 fixed bottom-0 flex flex-col items-center gap-6 max-md:hidden after:w-[1px] after:h-24 after:bg-slate-600 dark:after:bg-slate-200',
  variants: {
    orientation: {
      right: 'right-14',
      left: 'left-14',
    },
  },
  defaultVariants: {
    orientation: 'left',
  },
})

type SideDividerProps = ComponentProps<'div'> & {
  orientation?: 'right' | 'left'
}

export function SideDivider({
  orientation,
  className,
  ...rest
}: SideDividerProps) {
  return <div className={slideDivider({ orientation, className })} {...rest} />
}
