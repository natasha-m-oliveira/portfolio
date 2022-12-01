import { config } from '../config'

export function SocialMedia() {
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
            className="text-slate-600 dark:text-slate-200 hover:-translate-y-1 hover:!text-violet-400 transition-all"
          >
            <Comp size={24} />
          </a>
        )
      })}
    </>
  )
}
