import * as Tabs from '@radix-ui/react-tabs'
import { Heading } from '../../../components/Heading'

const experiences = [
  {
    id: 'eniac',
    career: 'Analista de sistemas júnior',
    company: {
      name: 'Centro Universitário Eniac',
      link: 'http://www.eniac.com.br/',
    },
    startDate: '04-01-2018',
    endDate: '03-01-2022',
    description: [
      'Levantamento de requisitos técnicos e funcionais',
      'Elaboração de especificações técnicas',
      "Desenvolvimento de API's",
      "Integração do backend com API's de terceiros",
    ],
  },
]

const list = experiences.map(({ id }) => id)

export function Experience() {
  return (
    <div
      className="dark:text-slate-100 min-h-screen scroll-mt-16"
      id="experience"
    >
      <Heading fieldset className="mb-6">
        Onde eu já trabalhei
      </Heading>

      <Tabs.Root className="flex gap-6">
        <Tabs.List
          aria-label="Guia de Experiências Profissionais"
          className="flex flex-col gap-3 px-4 py-3 border-l-[1px] border-slate-400"
        >
          {list.map((company) => (
            <Tabs.Trigger key={`trigger_${company}`} value={company}>
              {company}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {experiences.map((item) => (
          <Tabs.Content
            className="flex-1"
            value={item.id}
            key={`content_${item.id}`}
          >
            <div className="">Teste</div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}
