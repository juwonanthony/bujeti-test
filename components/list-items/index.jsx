import Image from 'next/image'
import React from 'react'

const ListItems = ({ svg, title, description }) => {
  return (
    <div className="flex items-center justify-center space-y-4">
      <div className="flex w-7/12 items-start gap-2">
        <div className="relative aspect-square h-7.5 w-7.5 shrink-0 overflow-hidden">
          <Image fill src={svg} alt={svg} />
        </div>
        <div>
          <p className="mb-2 text-xl font-semibold text-accent-green">{title}</p>
          <p className="text-base text-white ">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ListItems
