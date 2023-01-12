import React from 'react'
import { case_svg, fraud, risk, secure, why_us } from '../../assets/icons'
import ListItems from '../../components/list-items'
import { analysis } from '../../assets/icons'
import { SmallHeading } from '../../components'

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
const WhyUs = () => {
  return (
    <section className="bg-[#1C1917]">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 justify-center gap-4">
          <div className="max-w-4xl px-28 py-37 ">
            <SmallHeading color="#BFFF0B" svg={why_us} title="Why us?" />
            <h1 className="mb-4 text-5xl leading-tight text-white">
              Best-in-class, fully integrated and easy-to-use accounting and expense management
              solution for ambitious businesses.
            </h1>
            <h1 className="text-5xl font-semibold leading-tight text-white">
              Get your finances right with <span className="text-accent-green">Bujeti</span> today.
            </h1>
          </div>
          <div className="space-y-4 px-28 py-37">
            {listwhy.map(({ svg, title, description }, index) => (
              <ListItems key={index} title={title} description={description} svg={svg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
