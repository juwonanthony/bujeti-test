import { phone_card } from 'assets/image'
import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'

function CtaBanner({ ctaBanner }) {
  const {
    title = '',
    sub_title = '',
    image: { filename } = {},
    primary_btn_label = '',
    primary_btn_link: { url: primaryLink } = {},
    secondary_btn_label = '',
    secondary_btn_link: { url: secondaryLink } = {},
  } = ctaBanner || {}
  return (
    <>
      <section className="gradient__bg h-full w-full">
        <div className="container relative mx-auto flex flex-col items-start px-5 pt-10 md:flex-row">
          <div className="static mb-10 -mt-40 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-xl">
            {/* <Image src={phone_card} alt={phone_card} /> */}
            <div className="relative aspect-square h-full w-full shrink-0">
              <Image fill objectFit="contain" src={filename} alt={filename} className="w-full" />
            </div>
          </div>
          <div className="flex  max-w-3xl flex-col items-start pt-14 text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 className="mb-4 text-3xl font-bold text-accent-gray sm:text-6xl">
              {HTMLReactParser(title)}
            </h1>
            <p className="mb-8 leading-relaxed">{sub_title}</p>
            <div className="flex items-center space-x-4 text-sm font-medium md:flex-col lg:flex-row lg:text-[14px]">
              <button className="flex h-11 items-center justify-center rounded-lg bg-black px-6 text-center font-semibold text-white">
                {primary_btn_label}
              </button>
              <button className="flex h-11 items-center justify-center rounded-lg border  border-gray-200 bg-white px-6 font-semibold text-black ">
                {secondary_btn_label}
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-gradient-to-r from-accent-green p-[0.5px]" />
    </>
  )
}

export default CtaBanner
