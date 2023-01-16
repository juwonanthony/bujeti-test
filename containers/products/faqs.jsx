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

const Faqs = () => {
  const [clicked, setClicked] = useState('0')
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0')
    }
    setClicked(index)
  }

  return (
    <section className="w-full bg-accent-light_yellow">
      <div className="container mx-auto flex px-5 py-37">
        <div className=" w-full">
          <div className="mb-25 w-full">
            <SmallHeading color="#AF7421" svg={faq_svg} title="Frequently Asked" />
            <h1 className="my-4 max-w-xl text-5xl font-semibold leading-tight text-accent-gray">
              Everything other details you need to know.
            </h1>
          </div>
          <div className="mb-25 flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              {FaqQuest.map((faq, index) => (
                <Accodion
                  faq={faq}
                  index={index + 1}
                  length={FaqQuest.length}
                  onToggle={() => handleToggle(index)}
                  active={clicked === index}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="w-full text-center">
            <h1 className="mb-6 text-3xl font-bold">Still have questions?</h1>
            <p className="mb-6 text-3xl text-grey-deep">
              Our friendly team are always ready to help.
            </p>
            <Image src={question_avatar} alt={question_avatar} className="m-auto mb-8" />
            <button className="inline-flex rounded-lg bg-accent-gray py-2 px-6 text-base font-semibold text-white focus:outline-none">
              See Integrations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
