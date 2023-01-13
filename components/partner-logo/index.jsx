import Image from 'next/image'
import React from 'react'

const PartnerLogo = ({ column, image = [] }) => {
  return (
    <div
      className={`mb-10 grid gap-2`}
      style={{ gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))` }}
    >
      {image.map((item, index) => (
        <Image key={index} src={item} alt={item} className="w-ful h-full" />
      ))}
    </div>
  )
}

export default PartnerLogo
