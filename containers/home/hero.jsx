import Image from 'next/image'
import React from 'react'
import Playicon from '../../assets/icons/play.svg'

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center px-5 py-32 ">
      <div className="w-full max-w-3xl text-center">
        <h1 className="title-font mb-4 text-3xl font-normal text-accent-gray sm:text-4xl lg:text-7xl">
          Take control of your business{' '}
          <span className="font-bold text-accent-orange">expensing.</span>
        </h1>
        <p className="mb-8 font-light leading-relaxed text-accent-gray md:text-xl">
          Supercharge your finance, empower your teams and track the pulse of your business with an
          end-to-end expense management platform tailored for African SMBs.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex rounded-lg border-0 bg-accent-orange py-3 px-6 text-base font-semibold text-white hover:bg-black focus:outline-none">
            Try it today
          </button>
          <button className="ml-4 inline-flex items-center rounded-lg border-2 border-gray-200 bg-white py-3 px-6 text-base font-semibold text-gray-700 hover:bg-gray-200 focus:outline-none">
            {/* <ReactSVG src={Playicon} className="mr-1 p-0.5" /> Demo */}
            <Image src={Playicon} alt={Playicon} className="mr-1 p-0.5" /> Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
