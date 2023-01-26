import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'
import React from 'react'

const BusinessExpense = ({ businessExpense }) => {
  const { title = '', cases = [] } = businessExpense || {}

  return (
    <section className="bg-grey-warm py-37">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-normal">{HTMLReactParser(title)}</h1>
        <div className="grid grid-cols-3 gap-8 pt-15">
          {cases.map(({ description, title, image: { filename } }, index) => (
            <div className="flex flex-col" key={index}>
              <div className="relative aspect-square h-7.5 w-7.5 shrink-0 overflow-hidden">
                <Image fill src={filename} alt="icon" />
              </div>

              <h1 className="py-1 text-xl text-accent-orange">{title}</h1>
              <p className="text-base text-blue-light">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BusinessExpense
