import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function SocialMedia() {
  return (
    <>
      <a
        href="https://github.com/natasha-m-oliveira"
        target="_blank"
        rel="noreferrer"
        title="Github"
        className="text-slate-600 dark:text-slate-200 hover:-translate-y-1 hover:!text-violet-400 transition-all"
      >
        <GithubLogo size={24} />
      </a>
      <a
        href="https://www.instagram.com/innocent_girl_q/"
        target="_blank"
        rel="noreferrer"
        title="Instagram"
        className="text-slate-600 dark:text-slate-200 hover:-translate-y-1 hover:!text-violet-400 transition-all"
      >
        <InstagramLogo size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/natasha-matos-oliveira/"
        target="_blank"
        rel="noreferrer"
        title="Linkedin"
        className="text-slate-600 dark:text-slate-200 hover:-translate-y-1 hover:!text-violet-400 transition-all"
      >
        <LinkedinLogo size={24} />
      </a>
    </>
  )
}
