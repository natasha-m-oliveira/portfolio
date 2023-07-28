import { About } from './components/About'
import { Jobs } from './components/Jobs'
import { Introduction } from './components/Introduction'
import { Works } from './components/Works'
import { Thank } from './components/Thank'
import { Header } from 'src/components/Header'

export function Home() {
  return (
    <div className="py-3 px-4 flex flex-col items-center gap-8">
      <Header />
      <div className="w-full box-border mt-8 px-60 max-xl:px-40 max-lg:px-24 max-md:px-0 grid grid-cols-1 grid-flow-row gap-[30vh] max-sm:gap-[15vh] transition-all">
        <Introduction />
        <About />
        <Jobs />
        <Works />
        <Thank />
      </div>
    </div>
  )
}
