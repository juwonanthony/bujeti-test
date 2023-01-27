import Image from 'next/image'
import React from 'react'

const SolutionCard = ({ svg, highlighted, text }) => {
  return (
    <div className="flex items-start gap-2">
      <div className="relative aspect-square h-6 w-6 shrink-0 overflow-hidden">
        <Image fill src={svg} alt={svg} />
      </div>
      <p className="font-medium text-accent-orange md:w-4/6">
        {highlighted} <span className="text-accent-gray">{text}</span>
      </p>
    </div>
  )
}

export default SolutionCard
