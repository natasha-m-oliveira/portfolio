import { useEffect, useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Button } from '../../../components/Button'
import { Heading } from '../../../components/Heading'
import { Text } from '../../../components/Text'
import { config } from '../../../config'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { sr } from '../../../utils/sr'

export function Introduction() {
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
    <section className="section" id="home" ref={revealContainer}>
      <Text className="!text-violet-400" size="lg">
        Olá, me chamo
      </Text>

      <div className="flex flex-col gap-3 mt-4">
        <Heading size="lg">Natasha M Oliveira</Heading>
        <Heading size="lg" className="!text-slate-400">
          Full Stack Developer
        </Heading>
      </div>

      <Text className="max-w-lg my-10" size="lg" asChild>
        <p>
          Sou uma desenvolvedora full stack com experiência em desenvolvimento
          de APIs e microsserviços funcionais e escaláveis e criação de
          componentes web otimizados e responsivos. Atualmente estou me
          especializado em arquitetura de software e boas práticas de
          desenvolvimento.
        </p>
      </Text>

      <Button variant="outline" className="w-max" asChild>
        <Link to="#about">Saiba mais</Link>
      </Button>
    </section>
  )
}
