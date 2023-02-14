import Image from 'next/image'
import React from 'react'

const ListItems = ({ svg, title, description }) => {
  return (
    <div className="flex items-center justify-center space-y-4">
      <div className="flex w-full items-start gap-2 md:w-7/12 lg:w-7/12">
        <div className="bg-grey-200 relative aspect-square h-7 w-7 shrink-0 overflow-hidden">
          <Image fill objectFit="cover" src={svg} alt="paris picture" />
        </div>
        <div>
          <p className="mb-2 text-xl font-semibold text-accent-green">{title}</p>
          <p className="text-base text-white">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ListItems
