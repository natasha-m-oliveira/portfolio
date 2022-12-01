import * as Tabs from '@radix-ui/react-tabs'
import classNames from 'classnames'
import moment from 'moment'
import ptBR from 'date-fns/locale/pt-BR'

import { format } from 'date-fns'
import { Play } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { Heading } from '../../../components/Heading'
import { Text } from '../../../components/Text'
import { sr } from '../../../utils/sr'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { config } from '../../../config'

const jobs = [
  {
    id: 'Uninove',
    career: 'Full Stack Developer',
    company: {
      name: 'Uninove',
      link: 'http://uninove.com.br/',
    },
    startDate: '03-01-2022',
    endDate: 'presente',
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

const list = jobs.map(({ id }) => id)

export function Jobs() {
  const revealContainer = useRef<HTMLSelectElement>(null)

  const prefersReducedMotion = usePrefersReducedMotion()

  const [tabIndex, setTabIndex] = useState(0)

  function dateFormat(date: string) {
    const isValidDate = moment(date).isValid()
    if (isValidDate) {
      return format(new Date(date), "MMM 'de' yyyy", { locale: ptBR })
    }
    return date
  }

  function handleChange(id: string) {
    const index = jobs.findIndex((item) => item.id === id)
    setTabIndex(index)
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    if (revealContainer.current && sr) {
      sr.reveal(revealContainer.current, config.srConfig())
    }
  }, [prefersReducedMotion])

  return (
    <section className="section" id="jobs" ref={revealContainer}>
      <Heading fieldset className="mb-6">
        Onde eu já trabalhei
      </Heading>

      <Tabs.Root
        className="flex gap-6 max-sm:flex-col"
        onValueChange={handleChange}
        defaultValue={jobs[0].id}
      >
        <Tabs.List
          aria-label="Guia de Experiências Profissionais"
          className={classNames(
            `[--high-light:calc(${tabIndex}*48px)] max-sm:[--high-light:calc(${tabIndex}*120px)]`,
            'flex flex-col max-sm:flex-row h-min relative',
            'after:absolute after:left-0 after:top-0 after:w-[2px] after:h-12 after:rounded after:bg-violet-400 after:translate-y-[var(--high-light)] after:transition-transform',
            'max-sm:after:w-[120px] max-sm:after:h-[2px] max-sm:after:bottom-0 max-sm:after:top-auto max-sm:after:translate-y-0 max-sm:after:translate-x-[var(--high-light)]',
          )}
        >
          {list.map((company, index) => (
            <Tabs.Trigger
              key={`trigger_${company}`}
              value={company}
              className={classNames(
                'min-w-[120px] hover:bg-slate-300 dark:hover:bg-slate-800 hover:text-violet-500',
                "text-left text-slate-400 px-4 py-3 border-l-[3px] border-slate-400 dark:border-slate-500 data-[state='active']:!text-violet-400 transition-colors",
                'max-sm:border-l-0 max-sm:border-b-[3px] max-sm:text-center',
              )}
              tabIndex={index}
            >
              {company}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {jobs.map((item) => (
          <Tabs.Content
            className="flex-1 outline-none"
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
              <Text size="sm">{dateFormat(item.startDate)}</Text>
              <Text size="sm">-</Text>
              <Text size="sm">{dateFormat(item.endDate)}</Text>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {item.description.map((value) => (
                <Text key={value} className="!gap-4">
                  <Play
                    size={8}
                    weight="fill"
                    className="text-violet-400 w-4"
                  />
                  {value}
                </Text>
              ))}
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  )
}
