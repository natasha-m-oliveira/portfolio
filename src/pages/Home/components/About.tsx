import classNames from 'classnames'
import { Play } from 'phosphor-react'
import { useEffect, useRef } from 'react'
import { Heading } from '../../../components/Heading'
import { Text } from '../../../components/Text'
import { config } from '../../../config'
import { sr } from '../../../utils/sr'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'

export function About() {
  const revealContainer = useRef<HTMLSelectElement>(null)

  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    if (revealContainer.current && sr) {
      sr.reveal(revealContainer.current, config.srConfig())
    }
  }, [prefersReducedMotion])

  return (
    <section className="section" id="about" ref={revealContainer}>
      <Heading fieldset className="mb-6">
        Sobre mim
      </Heading>

      <div className="flex gap-8 max-md:flex-col max-md:items-center">
        <div className="flex-1 flex flex-col gap-3">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            laborum veritatis illo error facilis corporis, reprehenderit minus
            magni quos, voluptates neque. Esse assumenda blanditiis possimus
            nobis provident tenetur quam consequuntur?
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
            ad nulla necessitatibus consequatur laudantium doloremque, quae
            aperiam quos placeat excepturi dolorem tenetur atque ea modi sint
            cumque non molestiae? Architecto!
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nemo
            deserunt voluptatibus incidunt harum exercitationem doloremque odit
            ipsum quo
          </Text>

          <div className="w-max mt-4 grid grid-rows-3 grid-flow-col gap-x-8">
            <Text>
              <Play size={8} weight="fill" className="text-violet-400" />
              JavaScript (ES6+)
            </Text>
            <Text>
              <Play size={8} weight="fill" className="text-violet-400" />
              React
            </Text>
            <Text>
              <Play size={8} weight="fill" className="text-violet-400" />
              Node.js
            </Text>
            <Text>
              <Play size={8} weight="fill" className="text-violet-400" />
              TypeScript
            </Text>
          </div>
        </div>

        <div
          className={classNames(
            'relative h-min max-w-xs m-8',
            'after:absolute after:w-full after:h-full after:border-2 after:border-violet-400 after:top-5 after:left-5 after:-z-10 after:transition-all',
            'hover:after:top-3 hover:after:left-3',
            'group',
          )}
        >
          <img
            src={`${config.socialMedia[0].url}.png`}
            alt="Self"
            className="max-w-full object-cover [filter:grayscale(100%)_contrast(1)] group-hover:filter-none transition-all"
          />
        </div>
      </div>
    </section>
  )
}
