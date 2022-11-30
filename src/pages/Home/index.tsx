import { Header } from '../../components/Header'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Introduction } from './components/Introduction'

export function Home() {
  return (
    <div className="py-3 px-4 flex flex-col items-center gap-8">
      <Header />
      <div className="w-full box-border mt-8 px-60 max-xl:px-40 max-lg:px-24 max-md:px-0 transition-[padding] grid grid-cols-1 grid-flow-row gap-10">
        <Introduction />
        <About />
        <Experience />
      </div>
    </div>
  )
}
