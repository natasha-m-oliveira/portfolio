import { ArrowSquareOut, FolderSimple, GithubLogo } from 'phosphor-react'
import { Heading } from './Heading'
import { Text } from './Text'
import { tv } from 'tailwind-variants'
import { Project } from 'src/pages/Home/components/Works'

const cardContainer = tv({
  base: 'bg-slate-200 dark:bg-slate-800 aspect-square rounded px-4 py-3 flex flex-col justify-between gap-4 cursor-pointer hover:-translate-y-1 transition-transform duration-200',
})

const cardIcon = tv({
  base: 'text-slate-500 dark:text-slate-400 hover:!text-violet-400',
})

export function Card(props: Project) {
  const topics = props.topics.filter((topic) => topic !== 'for-portfolio')

  return (
    <div className={cardContainer()}>
      <div>
        <div className="flex justify-between items-center">
          <FolderSimple size={40} weight="bold" className="text-violet-400" />
          <div className="flex items-center gap-3">
            <a
              href={props.html_url}
              aria-label="Link do Github"
              title="Link do Github"
            >
              <GithubLogo
                size={24}
                weight="bold"
                className={cardIcon()}
              ></GithubLogo>
            </a>
            {props.homepage && (
              <a
                href={props.homepage}
                aria-label="Link Externo do Projeto"
                title="Link Externo do Projeto"
              >
                <ArrowSquareOut
                  size={24}
                  weight="bold"
                  className={cardIcon()}
                />
              </a>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Heading size="sm" asChild className="mb-2">
            <h3>{props.name}</h3>
          </Heading>
          <Text size="sm">{props.description}</Text>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Text
            size="sm"
            key={`${topic}_${props.id}`}
            className="text-slate-500"
          >
            {topic}
          </Text>
        ))}
      </div>
    </div>
  )
}
