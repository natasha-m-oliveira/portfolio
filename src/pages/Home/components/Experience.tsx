import * as Tabs from '@radix-ui/react-tabs'
import { Play } from 'phosphor-react'
import { Heading } from '../../../components/Heading'
import { Text } from '../../../components/Text'

const experiences = [
  {
    id: 'Uninove',
    career: 'Full Stack Developer',
    company: {
      name: 'Uninove',
      link: 'http://uninove.com.br/',
    },
    startDate: '03-01-2022',
    endDate: 'Presente',
    description: [
      'Manutenção e desenvolvimento de novas funcionalidades de um ERP com Laravel e Vue.js;',
      "Desenvolvimento e consumo de API's",
      'Manutenção e desenvolvimento de aplicações Web',
    ],
  },
  {
    id: 'Eniac',
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
          className="flex flex-col gap-3 border-l-[1px] border-slate-400"
        >
          {list.map((company) => (
            <Tabs.Trigger
              key={`trigger_${company}`}
              value={company}
              className="hover:bg-slate-800 text-left px-4 py-3 border-l-[1px] border-transparent data-[state='active']:!border-violet-400 data-[state='active']:!text-violet-400"
            >
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
            <Heading asChild size="sm" className="dark:!text-slate-200">
              <h3>
                {item.career}
                <Text className="ml-2 !text-violet-400">
                  @
                  <a
                    href={item.company.link}
                    className="relative after:h-[1px] after:w-0 after:absolute after:left-0 after:bottom-[1px] after:bg-violet-400 hover:after:w-full after:transition-[width]"
                  >
                    {item.id}
                  </a>
                </Text>
              </h3>
            </Heading>

            <div className="flex items-center gap-1 mt-2">
              <Text size="sm">{item.startDate}</Text>
              <Text size="sm">-</Text>
              <Text size="sm">{item.endDate}</Text>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {item.description.map((value) => (
                <Text key={value} className="!gap-4">
                  <Play size={8} weight="fill" className="text-violet-400 " />
                  {value}
                </Text>
              ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  )
}
