import React from 'react'
import { analysis, case_svg, fraud, risk, secure, why_us } from 'assets/icons'
import { SmallHeading } from 'components/index'
import ListItems from 'components/list-items'
import HTMLReactParser from 'html-react-parser'

const listwhy = [
  {
    svg: analysis,
    title: 'Avoid headaches & hassles.',
    description:
      'We take care of your expense management so you can focus on growing your business.',
  },
  {
    svg: secure,
    title: 'Simple, smart & secure.',
    description: 'No more chasing receipt papers. Pay with your card and easily get reimbursement.',
  },
  {
    svg: fraud,
    title: 'Bye to errors & fraud.',
    description: 'Define and enforce spending limits. Nothing falls through the cracks.',
  },
  {
    svg: risk,
    title: 'Forget risky cash management.',
    description: 'Define and enforce spending limits. Nothing falls through the cracks.',
  },
]
const WhyUs = ({ whyUs }) => {
  const {
    header = '',
    header_icon: { filename } = {},
    highlighted_title = '',
    main_title = '',
    reasons = [],
  } = whyUs || {}

  return (
    <section className="bg-[#1C1917]">
      <div className="flex flex-col items-center">
        <div className="grid justify-center gap-4 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="max-w-4xl px-4 py-12 md:px-28 md:py-37 lg:px-28 lg:py-37">
            <SmallHeading color="#BFFF0B" svg={filename} title={header} />
            <h1 className="mb-4 mt-6 text-xl leading-tight text-white md:mt-0 md:text-5xl lg:mt-4 lg:text-5xl">
              {main_title}
            </h1>
            <h1 className="text-2xl font-semibold leading-tight text-white md:text-5xl lg:text-5xl">
              {HTMLReactParser(highlighted_title)}
            </h1>
          </div>
          <div className="space-y-4 px-4 py-16 md:px-28 md:py-37 lg:px-28 lg:py-37">
            {reasons.map(({ image, title, description }, index) => (
              <ListItems key={index} title={title} description={description} svg={image.filename} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
