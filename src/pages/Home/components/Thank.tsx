import { useEffect, useRef } from 'react'
import { Heading } from '../../../components/Heading'
import { Text } from '../../../components/Text'
import { config } from '../../../config'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { sr } from '../../../utils/sr'

export function Thank() {
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
    <section
      className="section flex flex-col gap-8 max-sm:min-h-[85vh]"
      id="thank"
      ref={revealContainer}
    >
      <div>
        <Heading className="!justify-center">Obrigada pelo apaio.</Heading>
        <Text className="mt-6 max-w-md mx-auto">
          “Qualquer um pode escrever um código que o computador entenda. Bons
          programadores escrevem códigos que os humanos entendam.” – Martin
          Fowler
        </Text>
      </div>
      <div className="mb-4 self-end">
        <Text>
          Code by
          <Text asChild className="hover:!text-violet-400">
            <a href="https://github.com/natasha-m-oliveira">
              Natasha M Oliveira
            </a>
          </Text>
        </Text>
        <Text>
          Inspired by
          <Text asChild className="hover:!text-violet-400">
            <a
              href="https://github.com/bchiang7"
              target="_blank"
              rel="noreferrer"
            >
              Brittany Chiang
            </a>
          </Text>
        </Text>
      </div>
    </section>
  )
}