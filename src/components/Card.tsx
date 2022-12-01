import { ArrowSquareOut, FolderSimple } from 'phosphor-react'
import { Heading } from './Heading'
import { Text } from './Text'

interface CardProps {
  id: string
  title: string
  description: string
  tags: string[]
}

export function Card({ id, title, description, tags }: CardProps) {
  return (
    <div className="bg-slate-300 dark:bg-slate-800 rounded px-4 py-3 flex flex-col gap-4 cursor-pointer hover:-translate-y-1 transition-transform duration-200">
      <div className="flex justify-between items-center">
        <FolderSimple size={32} weight="bold" className="text-violet-400" />
        <a href="">
          <ArrowSquareOut
            size={20}
            weight="bold"
            className="text-slate-500 dark:text-slate-400 hover:text-violet-400"
          />
        </a>
      </div>
      <div>
        <Heading size="sm" asChild className="mb-2">
          <h3>{title}</h3>
        </Heading>
        <Text>{description}</Text>
      </div>
      <div>
        {tags.map((tag) => (
          <Text key={`${tag}_${id}`} className="!text-slate-500">
            {tag}
          </Text>
        ))}
      </div>
    </div>
  )
}
