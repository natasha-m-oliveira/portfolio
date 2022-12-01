import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  House,
  User,
  Book,
  Briefcase,
  ChatText,
} from 'phosphor-react'

export const config = {
  email: 'me@natashamo.dev',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/natasha-m-oliveira',
      icon: GithubLogo,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/innocent_girl_q',
      icon: InstagramLogo,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/natasha-matos-oliveira',
      icon: LinkedinLogo,
    },
  ],

  navLinks: [
    {
      id: 'home',
      name: 'Home',
      url: '/#home',
      icon: House,
    },
    {
      id: 'about',
      name: 'Sobre',
      url: '/#about',
      icon: User,
    },
    {
      id: 'jobs',
      name: 'Experiência',
      url: '/#jobs',
      icon: Briefcase,
    },
    {
      id: 'projects',
      name: 'Projetos',
      url: '/#projects',
      icon: Book,
    },
    {
      id: 'thank',
      name: 'Agradecimentos',
      url: '/#thank',
      icon: ChatText,
    },
  ],

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
}
