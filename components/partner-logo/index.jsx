import Image from 'next/image'
import React from 'react'

const PartnerLogo = ({ column, image = [] }) => {
  return (
    <div
      className={`stats mb-10 grid gap-36 lg:gap-3`}
      style={{ gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))` }}
    >
      {image.map(({ image: { filename } }, index) => (
        <div className="stat h-fit place-items-center" key={index}>
          <div className="relative aspect-[4/1] w-40 shrink-0 ">
            <Image fill src={filename} alt={`${filename}-${index}`} className="w-ful h-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PartnerLogo
