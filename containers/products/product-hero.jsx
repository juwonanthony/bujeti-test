import React from 'react'
import HeroWithImages from '../../components/hero-with-image'
import BujetiImage from '../../assets/image/bujeti-product.png'

const ProductHero = ({ hero }) => {
  console.log({ hero })
  return (
    <HeroWithImages
      slug="Expense management"
      title={
        <h1 className="py-6 text-6xl">
          Expensing built for <br /> <b>ease and scale.</b>
        </h1>
      }
      body="Supercharge your finance, empower your teams and track the pulse of your
     business with an end-to-end expense management platform tailored for African SMBs."
      image={BujetiImage}
      bg={'white'}
    />
  )
}

export default ProductHero
