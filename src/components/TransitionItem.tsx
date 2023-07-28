import { ReactNode, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { config } from '../config'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { sr } from 'src/utils/sr'

type TransitionCardProps = {
  index: number
  timeout: number
  delay: string
  children: ReactNode
}

export function TransitionItem({
  index,
  timeout,
  delay,
  children,
}: TransitionCardProps) {
  const reveal = useRef<HTMLDivElement>(null)

  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    if (reveal.current && sr) {
      sr.reveal(reveal.current, config.srConfig(index * 100))
    }
  }, [prefersReducedMotion, index])

  return (
    <CSSTransition
      classNames="fadeup"
      timeout={timeout}
      nodeRef={reveal}
      exit={false}
    >
      <div
        ref={reveal}
        style={{
          transitionDelay: delay,
        }}
      >
        {children}
      </div>
    </CSSTransition>
  )
}
