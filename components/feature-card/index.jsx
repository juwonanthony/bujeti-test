import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MoreArrow from '../../assets/icons/more-arrow.svg'

const FeatureCard = ({ title, description, link, index, image }) => {
  const textPosition = index % 2 === 0 ? 'mt-auto' : 'mb-auto'
  return (
    <div className="min-h-[500px] w-full">
      <div
        className="relative flex h-full flex-col overflow-hidden bg-contain bg-no-repeat px-6 py-10"
        style={{
          background: `url(${image.filename})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className={`${textPosition}`}>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-3 text-sm text-accent-gray md:text-base">{description}</p>
          <Link
            href={link.url}
            className="group mt-5 flex items-center text-sm font-semibold text-accent-brown"
          >
            <span className="mr-2">Discover more </span>{' '}
            <Image
              src={MoreArrow}
              alt={MoreArrow}
              className="transition-all duration-700 ease-in-out group-hover:translate-x-1"
            />
            {/* <MoreArrow className="group-hover:translate-x-1 ease-in-out duration-700 transition-all" /> */}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
