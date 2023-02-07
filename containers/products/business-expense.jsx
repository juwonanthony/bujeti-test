import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'
import React from 'react'

const BusinessExpense = ({ businessExpense }) => {
  const { title = '', cases = [] } = businessExpense || {}

  return (
    <section className="bg-grey-warm px-4 py-20 md:px-0 md:py-37 lg:px-0 lg:py-37">
      <div className="container mx-auto">
        <h1 className="mx-auto text-center text-2xl font-normal md:w-[775px] md:text-5xl lg:w-[775px] lg:text-5xl">
          {HTMLReactParser(title)}
        </h1>
        <div className="grid grid-cols-1 gap-8 pt-15 md:grid-cols-3 lg:grid-cols-3">
          {cases.map(({ description, title, image: { filename } }, index) => (
            <div className="flex flex-col" key={index}>
              <div className="relative aspect-square h-7.5 w-7.5 shrink-0 overflow-hidden">
                <Image fill src={filename} alt="icon" />
              </div>

              <h1 className="py-1 text-lg font-semibold text-accent-orange md:text-xl lg:text-xl">
                {title}
              </h1>
              <p className="text-sm text-blue-light md:text-base lg:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessExpense
