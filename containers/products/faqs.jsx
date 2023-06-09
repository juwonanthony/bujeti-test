import Image from 'next/image'
import React, { useState } from 'react'
import { faq_svg, question_avatar } from 'assets/icons'
import { Accodion, SmallHeading } from 'components/index'

const FaqQuest = [
  {
    question: 'Who is Rapyd Cars?',
    answer: `Rapyd Cars is an innovative Auto finance company that specializes in providing vehicles for smart and hardworking commercials drivers who want to own their own cars and work for themselves.`,
  },
  {
    question: 'What type of cars do you have?',
    answer: `We have Pontiac Vibe, Toyota Matrix, Toyota Corolla, Honda Civic, Toyota Camry. The year of Manufacture ranges from 2003 – 2007. These car models were selected based on our research and are best suited for commercial use in Nigeria.`,
  },
  {
    question: 'Are the cars Nigerian or Foreign used?',
    answer: `All our Cars are Foreign Used. We do not offer Nigerian Used Cars unless when a vehicle is being reassigned to a new driver.`,
  },
  {
    question: 'Do I have the option to choose the type of car that I want?',
    answer: `Yes, but this is from a list of cars that we have available at the time your application was processed.`,
  },
]

const Faqs = ({ faqs }) => {
  const [clicked, setClicked] = useState('0')
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }

  const {
    faq = [],
    footer_btn_label = '',
    footer_btn_link: { url } = {},
    footer_image: { filename } = {},
    footer_subtitle = '',
    footer_title = '',
    header = '',
    header_icon: { filename: icon } = {},
    title = '',
  } = faqs

  return (
    <section className="w-full bg-accent-light_yellow">
      <div className="mb:px-5 container mx-auto flex px-4 py-16 md:py-37 lg:px-5 lg:py-37">
        <div className=" w-full">
          <div className="mb-8 w-full md:mb-25 lg:mb-25">
            <SmallHeading color="#AF7421" svg={icon} title={header} />
            <h1 className="my-4 max-w-xl text-2xl font-semibold leading-tight text-accent-gray md:text-5xl lg:text-5xl">
              {title}
            </h1>
          </div>
          <div className="mb-6 flex flex-col gap-4 md:mb-25 md:flex-row lg:mb-25">
            <div className="w-full">
              {faq.map((faq, index) => (
                <Accodion
                  faq={faq}
                  index={index + 1}
                  length={faq.length}
                  onToggle={() => handleToggle(index)}
                  active={clicked === index}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="w-full text-center">
            <h1 className="mb-[5px] text-base font-bold md:mb-6 md:text-3xl lg:mb-6 lg:text-3xl">
              {footer_title}
            </h1>
            <p className="mb-4 text-base text-grey-deep md:mb-6 md:text-3xl lg:mb-6 lg:text-3xl">
              {footer_subtitle}
            </p>
            <div className="relative m-auto mb-8 aspect-[4/1] w-40 shrink-0 overflow-hidden">
              <Image fill src={filename} alt="faq img" className="h-full w-full" />
            </div>
            <button className="inline-flex rounded-lg bg-accent-gray px-6 py-2 text-base font-semibold text-white focus:outline-none">
              {footer_btn_label}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
