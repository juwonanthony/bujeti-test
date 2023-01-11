import Image from 'next/image';
import React, { useState } from 'react';
import { faq_svg, question_avatar } from '../../assets/icons';
import { Accodion, SmallHeading } from '../../components';

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
];

const Faqs = () => {
  const [clicked, setClicked] = useState('0');
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };

  return (
    <section className="bg-accent-light_yellow w-full">
      <div className="container mx-auto flex px-5 py-37">
        <div className=" w-full">
          <div className="w-full mb-25">
            <SmallHeading color="#AF7421" svg={faq_svg} title="Frequently Asked" />
            <h1 className="leading-tight font-semibold text-5xl my-4 text-accent-gray max-w-xl">
              Everything other details you need to know.
            </h1>
          </div>
          <div className="flex md:flex-row flex-col gap-4 mb-25">
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
            <h1 className="font-bold text-3xl mb-6">Still have questions?</h1>
            <p className="text-grey-deep text-3xl mb-6">Our friendly team are always ready to help.</p>
            <Image src={question_avatar} alt={question_avatar} className="mb-8 m-auto" />
            <button className="inline-flex text-white bg-accent-gray py-2 px-6 focus:outline-none rounded-lg font-semibold text-base">
              See Integrations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
