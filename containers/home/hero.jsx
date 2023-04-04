import { HeroBanner } from 'assets/icons'
import HTMLReactParser from 'html-react-parser'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import Playicon from '../../assets/icons/play.svg'

const Hero = ({ hero }) => {
  return (
    <section className="min-h-full bg-bg_overlay bg-cover bg-no-repeat pt-10 md:pt-0 lg:h-screen 2xl:h-full">
      <div className="grid items-center gap-2 md:grid-cols-2 lg:pl-24">
        <div className="flex w-full max-w-3xl flex-col items-center px-6 text-center md:items-start md:text-start lg:px-0 xl:-mt-44">
          <h1 className="title-font mb-4 text-3xl font-normal text-accent-gray sm:text-4xl lg:text-7xl">
            {HTMLReactParser(hero?.title)}
          </h1>
          <p className="mb-8 font-light leading-relaxed text-accent-gray md:text-xl">
            {hero?.subtitle}
          </p>
          <div className="flex w-fit flex-row gap-1">
            {/* <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-0 lg:flex-row lg:gap-0"> */}
            <a
              href={hero.primary_btn.url}
              target="_blank"
              className="inline-flex w-fit items-center justify-center rounded-lg border-0 bg-accent-orange px-3 py-3 text-sm font-semibold text-white  focus:outline-none md:justify-start md:text-base lg:justify-start"
              rel="noreferrer"
            >
              {hero?.primary_btn_label}
            </a>
            <a
              href={hero.secondary_btn.url}
              target="_blank"
              className="inline-flex w-fit items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-200 focus:outline-none md:ml-4 md:justify-start md:text-base lg:ml-4 lg:justify-start"
              rel="noreferrer"
            >
              Contact sales
            </a>
          </div>
        </div>
        <div className="ml-auto mt-10 w-full">
          <Image
            className="max-h-full w-full object-contain object-center"
            alt="hero"
            src={HeroBanner}
          />
          {/* <img src={carhero} alt="hero_banner" className="" /> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
