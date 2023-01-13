import Image from 'next/image'
import React from 'react'

const SmallHeading = ({ svg, title, color }) => {
  return (
    <div className="flex items-center gap-1">
      <Image src={svg} alt={svg} />
      <span className="text-base font-medium" style={{ color }}>
        {title}
      </span>
    </div>
  )
}

export default SmallHeading
