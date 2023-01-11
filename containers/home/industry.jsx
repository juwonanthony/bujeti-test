import React, { useState } from 'react';
import { usecase } from '../../assets/image';
import MoreArrow from '../../assets/icons/more-arrow.svg';
import { SmallHeading, SolutionAccodion } from '../../components';
import { case_svg } from '../../assets/icons';
import Image from 'next/image';

const theIndustry = [
  {
    title: 'Startups',
    description: ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Financial Services',
    description: ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Travel & Hospitality',
    description: 'Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Technology',
    description: ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Healthcare',
    description: ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Marketing',
    description: ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
  {
    title: 'Non-Profit',
    description: ' Create a plan that works for your unique needs and goals with our easy-to-use budgeting structure.',
    image: usecase,
  },
];
const Industry = () => {
  const [clicked, setClicked] = useState('0');
  const [imageIndex, setImageIndex] = useState(0);
  const handleToggle = (index) => {
    setImageIndex(index);
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };

  let changeImage = theIndustry[imageIndex];

  return (
    <section className="pt-37 px-0">
      <div className="bg-accent-light_yellow flex flex-wrap h-full w-full">
        <div className="flex flex-wrap lg:w-7/12 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:pl-28 sm:pr-20 px-4 pt-36 mb-6">
            <SmallHeading color="#AF7421" svg={case_svg} title="Use Cases" />
            <h1 className="leading-tight font-normal text-5xl my-4 text-accent-gray">
              The expense solution <br /> <span className="font-semibold">for every industry</span>
            </h1>

            <div className="mt-8">
              {theIndustry.map((solution, index) => {
                const number = (index + 1) * 10;
                const percent = 100 - number + '%';
                return (
                  <SolutionAccodion
                    solution={solution}
                    index={index + 1}
                    length={theIndustry.length}
                    onToggle={() => handleToggle(index)}
                    active={clicked === index}
                    defaultItem={clicked}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="lg:w-5/12 sm:w-1/3 w-full h-full flex overflow-hidden ">
          <Image src={changeImage.image} className="w-fit h-fit ml-auto " alt="" />
        </div>
      </div>
    </section>
  );
};

export default Industry;
//  <h4
//                   key={index}
//                   onClick={() => handleClick(index)}
//                   className="text-gray-700 font-medium text-3xl mb-5"
//                   style={{ opacity: percent }}
//                 >
//                   {title}
//                 </h4>
