import Image from 'next/image'
import React from 'react'

const SolutionCard = ({ svg, highlighted, text }) => {
  return (
    <div className="flex items-baseline gap-2">
      <Image src={svg} alt={svg} />
      <p className="font-medium text-accent-orange md:w-4/6">
        {highlighted} <span className="text-accent-gray">{text}</span>
      </p>
    </div>
  )
}

export default SolutionCard
