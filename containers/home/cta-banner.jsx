import { phone_card } from 'assets/image'
import HTMLReactParser from 'html-react-parser'
import Image from 'next/image'

function CtaBanner({ ctaBanner }) {
  const {
    title = '',
    sub_text = '',
    image: { filename } = {},
    primary_btn_label = '',
    primary_btn_link: { url: primaryLink } = {},
    secondary_btn_label = '',
    secondary_btn_link: { url: secondaryLink } = {},
  } = ctaBanner || {}
  return (
    <>
      <section className="gradient__bg h-full w-full pb-16 md:pb-0">
        <div className="container relative mx-auto flex flex-col items-start px-5 pt-10 md:flex-row">
          <div className="static mb-0 w-5/6 md:-mt-40 md:mb-0 md:w-1/2 lg:mb-10 lg:-mt-40 lg:w-full lg:max-w-xl">
            {/* <Image src={phone_card} alt={phone_card} /> */}
            <div className="relative aspect-square h-full w-full shrink-0">
              <Image fill objectFit="contain" src={filename} alt={filename} className="w-full" />
            </div>
          </div>
          <div className="flex  max-w-3xl flex-col items-center pt-4 text-center md:w-1/2 md:items-start md:pt-4 md:pl-6 md:text-left lg:flex-grow xl:pt-14 xl:pl-24">
            <h1 className="mb-4 text-3xl font-bold text-accent-gray  md:text-3xl xl:text-6xl">
              {HTMLReactParser(title)}
            </h1>
            <p className="mb-8 leading-relaxed">{sub_text}</p>
            <div className="flex items-center space-x-4 text-sm font-medium lg:text-[14px] xl:flex-row">
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
