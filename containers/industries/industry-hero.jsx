import React from 'react'
import HeroWithImages from '../../components/hero-with-image'
import BujetiImage from '../../assets/image/bujeti-product.png'
import HTMLReactParser from 'html-react-parser'

const IndustryHero = ({ hero }) => {
  const {
    hero_image: { filename: heroImg },
    primary_btn: { url: primaryUrl },
    primary_btn_label,
    secondary_btn: { url: secondaryUrl },
    secondary_btn_label,
    small_title,
    subtitle,
    title,
  } = hero || {}

  return (
    <HeroWithImages
      slug={small_title}
      title={<h1 className="py-4 text-4xl md:text-5xl lg:text-6xl">{HTMLReactParser(title)}</h1>}
      body={subtitle}
      image={heroImg}
      bg="secondary-900"
      primaryBtnLabel={primary_btn_label}
      primaryBtnLink={secondaryUrl}
      secondaryBtnLabel={secondary_btn_label}
      secondaryBtnLink={primaryUrl}
    />
  )
}

export default IndustryHero
