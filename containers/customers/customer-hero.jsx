import React from 'react'
import Image from 'next/image'

const CustomerHero = ({ slug, title, body, image, bg }) => {
  const color = bg === 'white' ? 'text-black bg-white' : `text-white bg-${bg}`
  return (
    <section className={`mx-auto flex items-center pt-20 ${color}`}>
      <div className="flex-1 pb-[100px] pt-20 pl-28 pr-30">
        <span className="font-semibold uppercase text-accent-orange">{slug}</span>
        {title}
        <p className="pr-20 pb-10 text-xl">{body}</p>
        <button className="inline-flex rounded-lg border-0 bg-accent-orange py-3 px-6 text-base font-semibold text-white hover:bg-black focus:outline-none">
          Start Now
        </button>
        <button className="ml-4 inline-flex items-center rounded-lg border-2 border-gray-200 bg-white py-3 px-6 text-base font-semibold text-gray-700 hover:bg-gray-200 focus:outline-none">
          Contact Sales
        </button>
      </div>
      <div className="flex-1">
        <Image src={image} className="h-full w-full" alt="Bujeti dashboard" />
      </div>
    </section>
  )
}

export default CustomerHero
