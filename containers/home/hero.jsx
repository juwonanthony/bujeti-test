import parse from 'html-react-parser'
import Image from 'next/image'
import Playicon from '../../assets/icons/play.svg'

const Hero = ({ hero }) => {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 pt-14 md:min-h-[40rem] md:justify-center md:pt-20 lg:min-h-[40rem] lg:justify-center xl:pt-30">
      <div className="w-full max-w-3xl text-center">
        <h1 className="title-font mb-4 text-3xl font-normal text-accent-gray sm:text-4xl lg:text-7xl">
          {parse(hero?.title)}
        </h1>
        <p className="mb-8 font-light leading-relaxed text-accent-gray md:text-xl">
          {hero?.subtitle}
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-0 lg:flex-row lg:gap-0">
          <button className="inline-flex justify-center rounded-lg border-0 bg-accent-orange py-3 px-6 text-base font-semibold text-white hover:bg-black focus:outline-none md:justify-start lg:justify-start">
            {hero?.primary_btn_label}
          </button>
          <button className="inline-flex items-center justify-center  rounded-lg border-2 border-gray-200 bg-white py-3 px-6 text-base font-semibold text-gray-700 hover:bg-gray-200 focus:outline-none md:ml-4 md:justify-start lg:ml-4 lg:justify-start">
            {/* <ReactSVG src={Playicon} className="mr-1 p-0.5" /> Demo */}
            <Image src={Playicon} alt={Playicon} className="mr-1 p-0.5" />{' '}
            {hero.secondary_btn_label}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
