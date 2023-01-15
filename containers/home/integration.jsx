import { integration_svg } from 'assets/icons'
import { integrations } from 'assets/image'
import Image from 'next/image'
import React from 'react'

const Integration = () => {
  return (
    <section className="bg-[#F5F5F4]">
      <div className="container relative mx-auto flex flex-col items-center px-5 pt-37 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Image src={integration_svg} alt={integration_svg} />
          <h6 className="font-medium text-accent-orange">Integration</h6>
        </div>
        <div className="w-full max-w-3xl space-y-6">
          <h1 className="text-6xl font-bold">
            Get more value <br />
            <span className="font-normal">from the tools you love.</span>
          </h1>
          <p>
            <span className="font-semibold">Connect your tools, connect your teams. </span>With over
            100 apps available in our directory, your team’s favourite tolls are just a click away.
          </p>
          <button className="inline-flex rounded-lg border border-gray-200 bg-white py-2 px-6 text-base font-semibold text-black focus:outline-none">
            See Integrations
          </button>
        </div>
        <div className="flex items-center justify-center pt-24 ">
          <Image src={integrations} alt={integrations} />
        </div>
      </div>
    </section>
  )
}

export default Integration
