import Image from 'next/image';
import React, { useRef } from 'react';
import { minus_circle, plus_circle } from '../../assets/icons';
import MoreArrow from '../../assets/icons/more-arrow.svg';

const SolutionAccodion = ({ solution, active, onToggle, length, index, defaultItem }) => {
  const { title, description } = solution;
  const contentEl = useRef();
  
  return (
    <div>
      <div className={`${active ? 'space-y-4' : ''} `}>
        <div className="flex" onClick={onToggle}>
          <h1
            className={`items-center flex my-4 cursor-pointer ${
              active
                ? ' font-semibold text-accent-brown mb-0 md:text-5xl'
                : 'text-gray-700 font-medium text-3xl group hover:text-accent-brown hover:font-semibold hover:md:text-5xl transition-all ease-in-out duration-300'
            }`}
          >
            {title}{' '}
            {active ? (
              <Image src={MoreArrow} alt={MoreArrow} className="ml-3 h-7 w-7" />
            ) : (
              <Image src={MoreArrow} alt={MoreArrow} className="ml-3 h-7 w-7 group-hover:block hidden " />
            )}
            {/* <MoreArrow className="ml-3 h-7 w-7" /> */}
          </h1>
        </div>
        <div
          ref={contentEl}
          style={active ? { height: contentEl?.current?.scrollHeight } : { height: '0px' }}
          className="h-0 overflow-hidden transition-all ease-in-out duration-200 "
        >
          <p className="leading-relaxed md:w-10/12 w-full text-gray-500 mb-7">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionAccodion;
