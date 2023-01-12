import React from 'react'
import HeroWithImages from '../../components/hero-with-image'
import SpiralImage from '../../assets/image/spiralsvg.png'

const CustomerHero = () => {
  return (
    <HeroWithImages
      slug="For startup"
      title={
        <h1 className="py-4 text-6xl">
          Growing together,
          <br /> <b>happily.</b>
        </h1>
      }
      body="Supercharge your finance, empower your teams and track the pulse of your
     business with an end-to-end expense management platform tailored for African SMBs."
      image={SpiralImage}
      bg="grey-warm-800"
    />
  )
}

export default CustomerHero
