import { useEffect, useRef } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Heading } from '../../../components/Heading'
import { config } from '../../../config'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { sr } from '../../../utils/sr'
import { Card } from '../../../components/Card'

const projects = [
  {
    id: 'asdasdas',
    title: 'Projeto',
    description:
      'Consulte os códigos de erro que aparecem no painel do veículo Onix.',
    tags: ['JavaScript'],
  },
  {
    id: 'dasdfasdas',
    title: 'Projeto2',
    description:
      'Consulte os códigos de erro que aparecem no painel do veículo Onix.',
    tags: ['JavaScript'],
  },
]

const GRID_LIMIT = 6

export function Projects() {
  const revealContainer = useRef<HTMLSelectElement>(null)
  const revealProjects = useRef<HTMLElement[]>([])

  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    if (revealContainer.current && sr) {
      sr.reveal(revealContainer.current, config.srConfig())
      revealProjects.current.forEach((ref, i) =>
        sr?.reveal(ref, config.srConfig(i * 100)),
      )
    }
  }, [prefersReducedMotion])

  return (
    <section className="section" id="projects" ref={revealContainer}>
      <Heading fieldset className="mb-6">
        Alguns projetos desenvolvidos
      </Heading>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        <TransitionGroup component={null}>
          {projects.map((project, i) => (
            <CSSTransition
              key={project.id}
              classNames="fadeup"
              timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
              exit={false}
            >
              <div
                key={project.id}
                className=""
                // ref={(el) => (el && revealProjects.current[i] = el)}
                style={{
                  transitionDelay: `${
                    i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                  }ms`,
                }}
              >
                <Card {...project} />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </section>
  )
}
