import React from 'react'
import { cup_svg, globe_svg, integrate_svg, mobile_svg, statics_svg, world_svg } from 'assets/icons'
import { SolutionCard } from 'components'
import HTMLReactParser from 'html-react-parser'

const solutionList = [
  {
    svg: integrate_svg,
    highlighted: 'Fully integrated.',
    text: 'Manage all your business expenses in 1 place.',
  },
  {
    svg: globe_svg,
    highlighted: 'Multi-currency.',
    text: 'Payment cards that works anywhere in the world.',
  },
  {
    svg: cup_svg,
    highlighted: 'Capital.',
    text: 'Keep your business afloat with flexible cash advance.',
  },
  {
    svg: statics_svg,
    highlighted: 'Stay informed.',
    text: 'Instant activity reporting and insights.',
  },
  {
    svg: mobile_svg,
    highlighted: 'Go Mobile.',
    text: 'Smooth user-friendly experience on the go.',
  },
  {
    svg: world_svg,
    highlighted: 'For Africans.',
    text: 'Unique finance platform made by Africans.',
  },
]
const Solutions = ({ solution }) => {
  const { title = '', solutions = [] } = solution || {}

  return (
    <section className="container mx-auto flex flex-col px-5 pb-37">
      <h1 className="mb-16 w-full max-w-2xl text-3xl font-normal md:text-6xl lg:text-6xl">
        {HTMLReactParser(title)}
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
        {solutions.map(({ icon, main_text, sub_text }, index) => (
          <SolutionCard svg={icon.filename} highlighted={main_text} text={sub_text} key={index} />
        ))}
      </div>
    </section>
  )
}

export default Solutions
