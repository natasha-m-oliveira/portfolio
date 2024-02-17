import { Play } from 'phosphor-react'
import { useEffect, useRef } from 'react'
import { config } from 'src/config'
import { sr } from 'src/utils/sr'
import { usePrefersReducedMotion } from 'src/hooks/usePrefersReducedMotion'
import { Heading } from 'src/components/Heading'
import { Text } from 'src/components/Text'
import { tv } from 'tailwind-variants'

const company = tv({
  base: '!text-violet-400 relative after:h-[1px] after:w-0 after:absolute after:left-0 after:bottom-[1px] after:bg-violet-400 hover:after:w-full after:transition-[width]',
})

const icon = tv({
  base: 'text-violet-400',
})

const avatar = tv({
  base: 'relative h-min max-w-xs m-8 after:absolute after:w-full after:h-full after:border-2 after:border-violet-400 after:top-5 after:left-5 after:-z-10 after:transition-all hover:after:top-3 hover:after:left-3 group',
})

const avatarImg = tv({
  base: 'max-w-full object-cover [filter:grayscale(100%)_contrast(1)] group-hover:filter-none transition-all',
})

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
          <Text className="!block">
            Era uma vez... Meu interesse em desenvolvimento de software começou
            em 2019 enquanto eu ainda trabalhava como consultora back office no{' '}
            <a href="http://www.eniac.com.br/" className={company()}>
              Centro Universitário Eniac
            </a>{' '}
            e criava os meus primeiros scripts para automação de tarefas
            utilizando as ferramentas do Google G Suite.
          </Text>
          <Text>
            Encantada em como a tecnologia poderia melhorar a vida das pessoas,
            eu comecei a graduação de Análise e Desenvolvimento de Sistemas, não
            foi algo fácil pois me faltavam muitas bases. Mas com muito empenho
            me graduei em 2022 e conquistei a minha tão sonhada primeira vaga.
          </Text>
          <Text className="!block">
            Avançando para os dias atuais, meu foco principal é criar APIs e
            microsserviços funcionais e escaláveis na{' '}
            <a href="https://radek.com.br/" className={company()}>
              Radek Systems
            </a>
            .
          </Text>
          <Text>
            Aqui estão algumas tecnologias com as quais tenho trabalhado
            recentemente:
          </Text>

          <div className="w-max mt-4 grid grid-rows-3 grid-flow-col gap-x-8">
            <Text>
              <Play size={8} weight="fill" className={icon()} />
              Go
            </Text>
            <Text>
              <Play size={8} weight="fill" className={icon()} />
              C#
            </Text>
            <Text>
              <Play size={8} weight="fill" className={icon()} />
              JavaScript (ES6+)
            </Text>
            <Text>
              <Play size={8} weight="fill" className={icon()} />
              Next.js
            </Text>
            <Text>
              <Play size={8} weight="fill" className={icon()} />
              Node.js
            </Text>
            <Text>
              <Play size={8} weight="fill" className={icon()} />
              TypeScript
            </Text>
            <Text>
              <Play size={8} weight="fill" className={icon()} />
              NestJS
            </Text>
          </div>
        </div>

        <div className={avatar()}>
          <img
            src={`${config.socialMedia[0].url}.png`}
            alt="Self"
            className={avatarImg()}
          />
        </div>
      </div>
    </section>
  )
}
