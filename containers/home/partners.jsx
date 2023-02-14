import React, { useEffect, useState } from 'react'
import { antler, sleep, webflow } from 'assets/image'
import { PartnerLogo } from 'components'

const Partners = ({ partners }) => {
  const { subtitle = '', title = '', logos = [] } = partners || {}
  return (
    <section className="container mx-auto flex flex-col items-center overflow-hidden  px-5">
      <div className="mb-10 w-full max-w-3xl text-center">
        <h1 className="title-font mb-4 text-2xl font-semibold text-accent-gray sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mb-8 font-light leading-relaxed text-accent-gray md:text-sm">{subtitle}</p>
      </div>
      <div className="flex flex-col items-center  overflow-scroll ">
        {logos?.map(({ logo }, index) => (
          <PartnerLogo column={logo.length} image={logo} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Partners
