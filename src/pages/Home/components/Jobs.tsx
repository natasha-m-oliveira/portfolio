import * as Tabs from '@radix-ui/react-tabs'
import classNames from 'classnames'
import ptBR from 'date-fns/locale/pt-BR'

import { format } from 'date-fns'
import { Play } from 'phosphor-react'
import { useEffect, useRef } from 'react'
import { Heading } from '../../../components/Heading'
import { Text } from '../../../components/Text'
import { sr } from '../../../utils/sr'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { config } from '../../../config'
import jobs from '../../../content/jobs.json'

export function Jobs() {
  const revealContainer = useRef<HTMLSelectElement>(null)

  const prefersReducedMotion = usePrefersReducedMotion()

  function dateFormat(date: string) {
    const isValidDate = new RegExp(config.dateRegex).test(date)
    if (isValidDate) {
      return format(new Date(date), "MMM 'de' yyyy", { locale: ptBR })
    }
    return date
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
        defaultValue={jobs[0].id}
      >
        <Tabs.List
          aria-label="Guia de Experiências Profissionais"
          className="flex flex-col max-sm:flex-row h-min max-sm:overflow-x-auto"
        >
          {jobs.map(({ id }, index) => (
            <Tabs.Trigger
              key={`trigger_${id}`}
              value={id}
              className={classNames(
                'min-w-[120px] hover:bg-slate-300 dark:hover:bg-slate-800 hover:text-violet-500',
                "text-left text-slate-400 px-4 py-3 border-l-[3px] border-slate-400 dark:border-slate-500 data-[state='active']:!border-violet-400 data-[state='active']:!text-violet-400 transition-colors",
                'max-sm:border-l-0 max-sm:border-b-[3px] max-sm:text-center',
              )}
              tabIndex={index}
            >
              {id}
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
