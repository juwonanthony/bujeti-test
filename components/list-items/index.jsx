import Image from 'next/image'
import React from 'react'

const ListItems = ({ svg, title, description }) => {
  return (
    <div className="flex items-center justify-center space-y-4">
      <div className="flex w-full items-start gap-2 md:w-7/12 lg:w-7/12">
        <Image src={svg} alt={svg} />
        <div>
          <p className="mb-2 text-xl font-semibold text-accent-green">{title}</p>
          <p className="text-base text-white">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ListItems
