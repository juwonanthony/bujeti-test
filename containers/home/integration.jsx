import { integration_svg } from 'assets/icons'
import { integrations } from 'assets/image'
import { SmallHeading } from 'components/index'
import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
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
      <div className="container relative mx-auto flex flex-col items-center px-5 pt-20 text-center md:pt-37 lg:pt-37">
        <div className="mb-4 flex items-center justify-center gap-2">
          <SmallHeading color="#D28B28" svg={icon} title={header} />
        </div>
        <div className="w-full max-w-3xl space-y-6">
          <h1 className="md:leading-0 lg:leading-0 text-[32px] font-bold leading-10 md:text-6xl lg:text-6xl">
            {HTMLReactParser(title)}
          </h1>
          <p>{HTMLReactParser(description)}</p>
          {url != '/' && (
            <Link
              href={url}
              className="inline-flex rounded-lg border border-gray-200 bg-white px-6 py-2 text-base font-semibold text-black focus:outline-none"
            >
              {btn_label}
            </Link>
          )}
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
