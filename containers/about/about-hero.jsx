import parse from 'html-react-parser'
import Image from 'next/image'
import Playicon from '../../assets/icons/play.svg'

import { aboutUs } from 'assets/image'

const AboutHero = ({ hero, bg }) => {
  return (
    <section className={`bg-${bg}`}>
      <section className="container mx-auto flex flex-col items-center justify-center px-4 pt-10 md:pt-32 lg:pt-32">
        <div className="w-full max-w-3xl text-center">
          <span className="font-semibold text-accent-orange">{hero.tag}</span>
          <h1 className="title-font mb-4 mt-5 text-3xl font-normal text-accent-gray sm:text-4xl md:leading-[75px] lg:text-3xl lg:text-7xl lg:leading-[75px]">
            {parse(hero?.title)}
          </h1>
          <p className="mb-8 font-light leading-[30px] text-support md:text-xl">{hero?.subtitle}</p>
          <div className="mt-10 -mb-10 flex justify-center md:mt-20 lg:mt-20">
            <Image
              src={aboutUs}
              alt={Playicon}
              className="h-[300px] object-cover md:h-[400px] lg:h-[400px]"
            />{' '}
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutHero
