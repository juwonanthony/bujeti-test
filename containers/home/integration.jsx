import { integration_svg } from 'assets/icons'
import { integrations } from 'assets/image'
import { SmallHeading } from 'components/index'
import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'
import React from 'react'

const Integration = ({ integration }) => {
  const {
    btn_label = '',
    btn_link: { url } = {},
    description = '',
    header = '',
    header_icon: { filename: icon } = {},
    title = '',
    image: { filename: image } = {},
  } = integration || {}

  return (
    <section className="bg-[#F5F5F4]">
      <div className="container relative mx-auto flex flex-col items-center px-5 pt-37 text-center">
        <div className="mb-4">
          <SmallHeading color="#D28B28" svg={icon} title={header} url={true} />
        </div>
        <div className="w-full max-w-3xl space-y-6">
          <h1 className="text-6xl font-bold">{HTMLReactParser(title)}</h1>
          <p>{HTMLReactParser(description)}</p>
          <button className="inline-flex rounded-lg border border-gray-200 bg-white py-2 px-6 text-base font-semibold text-black focus:outline-none">
            {btn_label}
          </button>
        </div>
        <div className="static flex items-center justify-center pt-24 lg:w-full lg:max-w-5xl">
          <div className="relative aspect-[4/1] h-full w-full shrink-0">
            <Image fill objectFit="contain" src={image} alt={image} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integration
