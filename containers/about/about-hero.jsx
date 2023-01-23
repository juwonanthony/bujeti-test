import parse from 'html-react-parser'
import Image from 'next/image'
import Playicon from '../../assets/icons/play.svg'

import { spiralPattern } from 'assets/icons'

const AboutHero = ({ hero, bg }) => {
  return (
    <section className={`bg-${bg}`}>
      <section className="container mx-auto flex flex-col items-center justify-center px-5 pt-32 ">
        <div className="w-full max-w-3xl text-center">
          <span className="font-semibold text-accent-orange">{hero.tag}</span>
          <h1 className="title-font mb-4 mt-5 text-3xl font-normal leading-[75px] text-accent-gray sm:text-4xl lg:text-7xl">
            {parse(hero?.title)}
          </h1>
          <p className="mb-8 font-light leading-[30px] text-support md:text-xl">{hero?.subtitle}</p>
          <div className="mt-20 -mb-10 flex justify-center">
            <Image src={spiralPattern} alt={Playicon} className="h-[400px] object-cover" />{' '}
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutHero
