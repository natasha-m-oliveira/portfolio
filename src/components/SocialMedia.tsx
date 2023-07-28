import { ComponentProps } from 'react'
import { config } from '../config'
import { tv } from 'tailwind-variants'

const socialMedia = tv({
  base: 'text-slate-600 dark:text-slate-200 hover:-translate-y-1 hover:!text-violet-400 transition-all',
})

type SocialMediaProps = ComponentProps<'a'> & {
  orientation?: 'right' | 'left'
}

export function SocialMedia({ className, ...rest }: SocialMediaProps) {
  return (
    <>
      {config.socialMedia.map(({ name, url, icon }) => {
        const Comp = icon
        return (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            title={name}
            className={socialMedia({ className })}
            {...rest}
          >
            <Comp size={24} />
          </a>
        )
      })}
    </>
  )
}
