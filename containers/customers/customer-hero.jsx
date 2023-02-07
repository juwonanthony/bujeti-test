import React from 'react'
import Image from 'next/image'

const CustomerHero = ({ slug, title, body, image, bg }) => {
  const color = bg === 'white' ? 'text-black bg-white' : `text-white bg-${bg}`
  return (
    <section className={`mx-auto flex items-center md:pt-20 lg:pt-20 ${color}`}>
      <div className="flex-1 items-center justify-center pb-[100px] pt-20 pl-4 pr-4 md:pl-28 md:pr-30 lg:pl-28 lg:pr-30">
        <span className="font-semibold uppercase text-accent-orange">{slug}</span>
        {title}
        <p className="pb-10 text-xl md:pr-20 lg:pr-20">{body}</p>
        <div className="flex flex-col md:flex lg:flex-row">
          <button className="rounded-lg border-0 bg-accent-orange py-3 px-6 text-base font-semibold text-white hover:bg-black focus:outline-none md:inline-flex lg:inline-flex">
            Start Now
          </button>
          <button className="ml-0 mt-4 items-center rounded-lg border-2 border-gray-200 bg-white py-3 px-6 text-base font-semibold text-gray-700 hover:bg-gray-200 focus:outline-none md:mt-0 md:ml-4 md:inline-flex lg:mt-0 lg:ml-4 lg:inline-flex">
            Contact Sales
          </button>
        </div>
      </div>
      <div className="hidden aspect-square h-full w-full flex-1 shrink-0 md:flex lg:flex">
        <Image src={image} className="cover h-full w-full" alt="Bujeti dashboard" />
      </div>
    </section>
  )
}

export default CustomerHero
