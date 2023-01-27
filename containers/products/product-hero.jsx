import React from 'react'
import HeroWithImages from '../../components/hero-with-image'
import BujetiImage from '../../assets/image/bujeti-product.png'
import parse from 'html-react-parser'

const ProductHero = ({ hero }) => {
  return (
    <HeroWithImages
      slug={hero?.small_title}
      title={<h1 className="py-6 text-6xl">{parse(hero?.title)}</h1>}
      body={hero?.subtitle}
      image={BujetiImage}
      bg={'white'}
    />
  )
}

export default ProductHero
