import { useEffect, useRef, useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import { Button } from 'src/components/Button'
import { Card } from 'src/components/Card'
import { Heading } from 'src/components/Heading'
import { TransitionItem } from 'src/components/TransitionItem'
import { config } from 'src/config'
import { usePrefersReducedMotion } from 'src/hooks/usePrefersReducedMotion'
import { api } from 'src/lib/axios'
import { sr } from 'src/utils/sr'

const GRID_LIMIT = 6

export type Project = {
  id: number
  name: string
  description: string
  language: string
  html_url: string
  homepage: string
  topics: string[]
}

type Repositories = {
  items: Project[]
}

export function Works() {
  const [showMore, setShowMore] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])

  const revealContainer = useRef<HTMLSelectElement>(null)

  const prefersReducedMotion = usePrefersReducedMotion()

  const firstSix = projects.slice(0, GRID_LIMIT)
  const projectsToShow = showMore ? projects : firstSix

  async function getRepos() {
    try {
      const response = await api.get<Repositories>(
        'search/repositories?q=user:natasha-m-oliveira topic:for-portfolio',
      )
      const { items } = response.data
      setProjects(items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    if (revealContainer.current && sr) {
      sr.reveal(revealContainer.current, config.srConfig())
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    getRepos()
  }, [])

  return (
    <section className="section" id="projects" ref={revealContainer}>
      <Heading fieldset className="mb-6">
        Alguns projetos desenvolvidos
      </Heading>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map((project) => (
                <div key={project.id}>
                  <Card {...project} />
                </div>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map((project, index) => (
                <TransitionItem
                  key={project.id}
                  index={index}
                  timeout={
                    index >= GRID_LIMIT ? (index - GRID_LIMIT) * 300 : 300
                  }
                  delay={`${
                    index >= GRID_LIMIT ? (index - GRID_LIMIT) * 100 : 0
                  }ms`}
                >
                  <Card {...project} />
                </TransitionItem>
              ))}
          </TransitionGroup>
        )}
      </div>

      {projects.length > GRID_LIMIT && (
        <Button
          variant="outline"
          onClick={() => setShowMore((state) => !state)}
          className="mt-10 mx-auto"
        >
          Mostrar {showMore ? 'Menos' : 'Mais'}
        </Button>
      )}
    </section>
  )
}
