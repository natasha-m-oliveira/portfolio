import { AnchorHTMLAttributes } from 'react'
import { config } from '../config'
import classNames from 'classnames'

interface SocialMediaProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
            className={classNames(
              className,
              'text-slate-600 dark:text-slate-200 hover:-translate-y-1 hover:!text-violet-400 transition-all',
            )}
            {...rest}
          >
            <Comp size={24} />
          </a>
        )
      })}
    </>
  )
}
