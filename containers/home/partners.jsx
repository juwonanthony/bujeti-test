import React, { useEffect, useState } from 'react'
import { antler, sleep, webflow } from 'assets/image'
import { PartnerLogo } from 'components'

const partnerss = [
  { image: [antler, sleep, webflow, antler, sleep] },
  { image: [antler, sleep, webflow, antler, sleep, webflow] },
]
const Partners = ({ partners }) => {
  const { subtitle = '', title = '', logos = [] } = partners || {}
  console.log(partners)
  return (
    <section className="container mx-auto flex flex-col items-center px-5">
      <div className="mb-10 w-full max-w-3xl text-center">
        <h1 className="title-font mb-4 text-3xl font-semibold text-accent-gray sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mb-8 font-light leading-relaxed text-accent-gray md:text-sm">{subtitle}</p>
      </div>
      <div className="flex flex-col items-center">
        {logos?.map(({ logo }, index) => (
          <PartnerLogo column={logo.length} image={logo} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Partners
