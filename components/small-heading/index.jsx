import { useProbeImage } from 'lib/hooks/utils'
import Image from 'next/image'
import React from 'react'

const SmallHeading = ({ svg, title, color }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="bg-grey-200 relative aspect-square h-5 w-5 shrink-0 overflow-hidden">
        <Image fill objectFit="cover" src={svg} alt="paris picture" />
      </div>

      {/* <Image src={svg} alt={svg} /> */}

      <span className="text-base font-medium" style={{ color }}>
        {title}
      </span>
    </div>
  )
}

export default SmallHeading
