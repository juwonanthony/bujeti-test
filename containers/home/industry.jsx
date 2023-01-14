import React, { useEffect, useState } from 'react'
import { usecase, usecase_two } from '../../assets/image'
import MoreArrow from '../../assets/icons/more-arrow.svg'
import { SmallHeading, SolutionAccodion } from '../../components'
import { case_svg } from '../../assets/icons'
import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'
import { useProbeImage } from 'lib/hooks/utils'
const sizeOf = require('image-size')
const url = require('url')
const https = require('https')

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
const Industry = ({ industry }) => {
  const { title = '', header = '', header_icon = {}, cases = [] } = industry
  const [clicked, setClicked] = useState(0)
  const handleToggle = (index) => {
    setClicked(index)
  }

  // const [size, setSize] = useState({})

  const { image: { filename } = {} } = cases[clicked]
  // const { image: { filename:sc } = {} } = cases[clicked]

  // useEffect(() => {
  //   useProbeImage(filename).then((result) => setSize(result))
  // }, [filename])

  // const { image } = useProbeImage(filename)

  // const options = url.parse(header_icon.filename)
  // console.log(header_icon.filename)

  // https.get(options, function (response) {
  //   const chunks = []
  //   response
  //     .on('data', function (chunk) {
  //       chunks.push(chunk)
  //     })
  //     .on('end', function () {
  //       const buffer = Buffer.concat(chunks)
  //       console.log(sizeOf(buffer))
  //     })
  // })
  return (
    <section className="px-0 pt-37">
      <div className="grid h-[960px] w-full grid-cols-2 bg-accent-light_yellow">
        <div className="flex flex-wrap content-start sm:pr-10">
          <div className="mb-6 w-full px-4 pt-37 sm:pl-28 sm:pr-20">
            <SmallHeading color="#AF7421" svg={header_icon.filename} title={header} url={true} />
            <h1 className="my-4 text-5xl font-normal leading-tight text-accent-gray">
              {HTMLReactParser(title)}
            </h1>

            <div className="mt-8">
              {cases.map((solution, index) => {
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
        <div className="flex h-full w-full overflow-hidden">
          <div className="relative flex aspect-square h-full w-full shrink-0 overflow-hidden">
            <Image
              fill
              objectFit="cover"
              src={filename}
              alt={filename}
              className="ml-auto max-w-full"
              sizes="100vw"
            />
          </div>

          {/* <Image
            src={image.url}
            className="ml-auto h-fit w-fit"
            width={image.width}
            height={image.height}
            alt=""
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Industry
