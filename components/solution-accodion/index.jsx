import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { minus_circle, plus_circle } from '../../assets/icons';
import MoreArrow from '../../assets/icons/more-arrow.svg';

const opacity = {
  0: 'opacity-0	',
  5: 'opacity-5',
  10: 'opacity-10',
  20: 'opacity-20',
  25: 'opacity-25',
  30: 'opacity-30',
  40: 'opacity-40',
  50: 'opacity-50',
  60: 'opacity-60',
  70: 'opacity-70',
  75: 'opacity-75',
  80: 'opacity-80',
  90: 'opacity-90',
  95: 'opacity-95',
  100: 'opacity-100',
};
const SolutionAccodion = ({ solution, active, onToggle, length, percent }) => {
  const { title, description } = solution;
  const contentEl = useRef();
  const [scrollHeight, setScrollHeight] = useState();

  useEffect(() => {
    setScrollHeight(contentEl.current?.scrollHeight);
  }, [active]);

  console.log(opacity[percent])
  return (
    <div>
      <div className={`${active ? 'space-y-4' : ''} `}>
        <div className="flex" onClick={onToggle}>
          <h1
            className={`items-center flex my-4 cursor-pointer ${
              active
                ? ' font-semibold text-accent-brown mb-0 md:text-5xl'
                : `text-gray-700 font-medium text-3xl group hover:text-accent-brown hover:font-semibold hover:md:text-5xl transition-all ease-in-out duration-300 ${opacity[percent]} hover:opacity-100 `
            }`}
            // style={{ opacity: percent }}
          >
            {title}

            <Image
              src={MoreArrow}
              alt={MoreArrow}
              className={`ml-3 h-7 w-7 ${active ? 'block' : 'group-hover:block hidden'}`}
            />

            {/* <MoreArrow className="ml-3 h-7 w-7" /> */}
          </h1>
        </div>
        <div
          ref={contentEl}
          style={active ? { height: scrollHeight } : { height: '0px' }}
          className="h-0 overflow-hidden transition-all ease-in-out duration-200 "
        >
          <p className="leading-relaxed md:w-10/12 w-full text-gray-500 mb-7">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionAccodion;