import { BujetiTeam } from 'assets/image'

const { default: HeroWithImages } = require('components/hero-with-image')
const { default: HTMLReactParser } = require('html-react-parser')

const CareerHero = () => {
  //   const {
  //     hero_image: { filename: heroImg },
  //     primary_btn: { url: primaryUrl },
  //     primary_btn_label,
  //     secondary_btn: { url: secondaryUrl },
  //     secondary_btn_label,
  //     small_title,
  //     subtitle,
  //     title,
  //   } = hero || {}
  return (
    <HeroWithImages
      slug={'Life at Bujeti'}
      title={
        <h1 className="py-4 text-6xl">
          {HTMLReactParser('<b>Grow with us</b><br/> and our partners.')}
        </h1>
      }
      body={
        'Supercharge your finance, empower your teams and track the pulse of your business with an end-to-end expense management platform tailored for African SMBs.'
      }
      image={BujetiTeam}
      bg={'white'}
      primaryBtnLabel={'See Openings'}
      primaryBtnLink={'#careers'}
    />
  )
}

export default CareerHero
