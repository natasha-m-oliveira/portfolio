import ScrollReveal from 'scrollreveal'

const isSSR = typeof window === 'undefined'
export const sr = isSSR ? null : ScrollReveal()
