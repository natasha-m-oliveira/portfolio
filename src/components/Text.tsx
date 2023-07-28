import { Slot, SlotProps } from '@radix-ui/react-slot'

import { tv } from 'tailwind-variants'

const text = tv({
  base: 'flex items-center gap-2 text-slate-600 dark:text-slate-400 font-sans',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = SlotProps & {
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export function Text({ size, asChild = false, className, ...rest }: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return <Comp className={text({ size, className })} {...rest} />
}
