import { useEffect, useRef } from 'react'
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

      <Text className="max-w-lg my-10" asChild size="lg">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          nostrum at cumque deleniti illum, vitae, voluptatum ducimus voluptate
          impedit neque, ad nam. Voluptatem ad iure unde pariatur voluptatum
          obcaecati rem.
        </p>
      </Text>

      <Button variant="outline" className="w-max">
        Currículo
      </Button>
    </section>
  )
}
