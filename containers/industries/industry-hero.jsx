import React from 'react'
import HeroWithImages from '../../components/hero-with-image'
import BujetiImage from "../../assets/image/bujeti-product.png";

const IndustryHero = () => {
  return (
    <HeroWithImages
        slug="For startup"
        title={
          <h1 className="text-6xl py-4">
            Get your startup
            <br /> <b>finances in order.</b>
          </h1>
        }
        body="Supercharge your finance, empower your teams and track the pulse of your
         business with an end-to-end expense management platform tailored for African SMBs."
        image={BujetiImage}
        bg="secondary-900"
      />
  )
}

export default IndustryHero