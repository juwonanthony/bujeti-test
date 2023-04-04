import { SmallHeading } from 'components/index'
import HTMLReactParser from 'html-react-parser'
import React from 'react'

const ProductInsight = ({ productInsight }) => {
  const {
    header = '',
    header_icon: { filename } = {},
    numbers = [],
    primary_btn_label = '',
    primary_btn_link: { url } = {},
    sub_title = '',
    title = '',
  } = productInsight || {}

  return (
    <section className="w-full bg-grey-warm-900 px-4 py-10 md:px-0 md:py-37 lg:px-0 lg:py-37">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between">
          <div className="w-full md:w-[580px] lg:w-[580px]">
            <SmallHeading title={header} svg={filename} color="#BFFF0B" />
            <h1 className="py-6 text-2xl font-semibold text-white md:text-6xl lg:text-6xl">
              {HTMLReactParser(title)}
            </h1>
            <p className="text-lg text-white md:text-xl lg:text-xl">{HTMLReactParser(sub_title)}</p>
            <button className="mt-[25px] inline-flex rounded-lg border-0 bg-accent-green px-6 py-3 text-base font-semibold text-black focus:outline-none">
              {primary_btn_label}
            </button>
          </div>
          <div className="mt-4 md:w-[420px] lg:w-[420px]">
            {numbers.map(({ sub_title, title }, index) => (
              <div
                key={index}
                className={`${
                  numbers.length === index + 1 ? '' : 'border-none md:border-b lg:border-b'
                }  border-grey-accent py-[20px] md:py-[30px] lg:py-[30px]`}
              >
                <h1 className="text-xl font-semibold text-accent-green md:text-6xl lg:text-6xl">
                  {title}
                </h1>
                <p className="pt-[5px] text-sm text-grey-semi md:text-base lg:text-base">
                  {sub_title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInsight
