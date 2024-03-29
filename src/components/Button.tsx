import { Slot, SlotProps } from '@radix-ui/react-slot'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center gap-2 py-3 px-4 rounded-lg font-bold text-sm transition-colors outline-none border-2',
  variants: {
    variant: {
      primary:
        'bg-violet-400 border-violet-400 text-slate-900 hover:bg-violet-300 hover:border-violet-300',
      outline:
        'bg-transparent border-violet-400 text-violet-400 hover:bg-violet-400 dark:hover:bg-violet-300 hover:text-white dark:hover:text-slate-900 dark:hover:border-violet-300',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = SlotProps &
  VariantProps<typeof button> & {
    asChild?: boolean
  }

export function Button({
  asChild = false,
  variant,
  className,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={button({ variant, className })} {...rest} />
}
