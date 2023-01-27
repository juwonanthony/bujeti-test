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
    <section className="w-full bg-grey-warm-900 py-37">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <div className="w-[580px]">
            <SmallHeading title={header} svg={filename} color="#BFFF0B" />
            <h1 className="py-6 text-6xl font-semibold text-white">{HTMLReactParser(title)}</h1>
            <p className="text-xl text-white">{HTMLReactParser(sub_title)}</p>
            <button className="mt-[25px] inline-flex rounded-lg border-0 bg-accent-green py-3 px-6 text-base font-semibold text-black focus:outline-none">
              {primary_btn_label}
            </button>
          </div>
          <div className="w-[420px]">
            {numbers.map(({ sub_title, title }, index) => (
              <div
                key={index}
                className={`${
                  numbers.length === index + 1 ? '' : 'border-b'
                }  border-grey-accent py-[30px]`}
              >
                <h1 className="text-6xl font-semibold text-accent-green">{title}</h1>
                <p className="pt-[5px] text-base text-grey-semi">{sub_title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInsight
