import React, { useState } from 'react'
import { usecase, usecase_two } from '../../assets/image'
import MoreArrow from '../../assets/icons/more-arrow.svg'
import { SmallHeading, SolutionAccodion } from '../../components'
import { case_svg } from '../../assets/icons'
import Image from 'next/image'

const theIndustry = [
  {
    title: 'Startups',
    description:
      ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Financial Services',
    description:
      ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase_two,
  },
  {
    title: 'Travel & Hospitality',
    description:
      'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Technology',
    description:
      ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase_two,
  },
  {
    title: 'Healthcare',
    description:
      ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Marketing',
    description:
      ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase_two,
  },
  {
    title: 'Non-Profit',
    description:
      ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
]
const Industry = () => {
  const [clicked, setClicked] = useState(0)
  const handleToggle = (index) => {
    setClicked(index)
  }

  let changeImage = theIndustry[clicked]

  return (
    <section className="px-0 pt-37">
      <div className="grid h-full w-full grid-cols-2 bg-accent-light_yellow">
        <div className="flex flex-wrap content-start sm:pr-10">
          <div className="mb-6 w-full px-4 pt-36 sm:pl-28 sm:pr-20">
            <SmallHeading color="#AF7421" svg={case_svg} title="Use Cases" />
            <h1 className="my-4 text-5xl font-normal leading-tight text-accent-gray">
              The expense solution <br /> <span className="font-semibold">for every industry</span>
            </h1>

            <div className="mt-8">
              {theIndustry.map((solution, index) => {
                const number = (index + 1) * 10
                const percent = 100 - number
                return (
                  <SolutionAccodion
                    solution={solution}
                    length={theIndustry.length}
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                    percent={percent}
                    key={index}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className=" flex h-full w-full overflow-hidden ">
          <Image src={changeImage.image} className="ml-auto h-fit w-fit " alt="" />
        </div>
      </div>
    </section>
  )
}

export default Industry
