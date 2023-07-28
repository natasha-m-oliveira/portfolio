import { Slot, SlotProps } from '@radix-ui/react-slot'

import { tv } from 'tailwind-variants'

const heading = tv({
  base: 'text-slate-700 dark:text-slate-200 font-bold font-sans flex items-center',
  variants: {
    size: {
      sm: 'text-lg',
      md: 'text-3xl max-sm:text-2xl',
      lg: 'text-5xl max-sm:text-4xl',
    },
    fieldset: {
      true: 'after:w-48 after:h-[1px] after:bg-slate-400 dark:after:bg-slate-500 after:ml-5',
    },
  },
  defaultVariants: {
    size: 'md',
    fieldset: false,
  },
})

export type HeadingProps = SlotProps & {
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  fieldset?: boolean
}

export function Heading({
  size,
  fieldset,
  asChild = false,
  className,
  ...rest
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return <Comp className={heading({ size, fieldset, className })} {...rest} />
}
