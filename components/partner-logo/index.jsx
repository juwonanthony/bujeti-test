import Image from 'next/image'
import React from 'react'

const PartnerLogo = ({ column, image = [] }) => {
  return (
    <div
      className={`grid-f mb-10 w-full md:grid md:gap-2`}
      style={{ gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))` }}
    >
      {image.map(({ image: { filename } }, index) => (
        <div
          key={index}
          className="grid-item-f relative  aspect-[4/1] w-40 shrink-0 overflow-scroll md:overflow-hidden lg:overflow-hidden"
        >
          <Image fill src={filename} alt={`${filename}-${index}`} className="w-ful h-full" />
        </div>
      ))}
    </div>
  )
}

export default PartnerLogo
